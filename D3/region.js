var fs = require('fs');
var lr = require('readline').createInterface(
{
    input: fs.createReadStream('FoodFacts1.csv')
});
var dataArray = [];//store csv file values
var country_index = 0,
    i = 0,
    fat_index = 0,
    protein_index = 0,
    carbohydrate_index = 0;
    country = "",
    head = 0,
    fat = 0,
    protein = 0,
    carbohydrate = 0,
    j = 0,
    set_region = "",
    north_europe_length = 0,
    central_europe_length = 0,
    south_europe_length = 0;
var northEurope = ['United Kingdom', 'Denmark', 'Sweden', 'Norway'];//array contains northEurope countries
var centralEurope = ['France', 'Belgium', 'Germany', 'Switzerland', 'Netherlands'];//array contains centralEurope countries
var southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia', 'Albania'];//array contains southEurope countries
var region_group = ['NorthernEurope', 'CentralEurope', 'SouthernEurope'];//array contains all regions
var addfat = [],
    addprotein = [],
    addcarbohydrate = [],
    json_arr = [];//to store fat,protein,carbohydrate values based on region
for (var j = 0; j < region_group.length; j++)//initialize values to zero
{
    addfat[j] = 0;
    addprotein[j] = 0;
    addcarbohydrate[j] = 0;
}
lr.on('line', function(line)
{
var  k1 = 0,
     k2 = 0,
     k3 = 0;//to check northEurope,southEurope,centralEurope values
    dataArray = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);//split line and assign it to dataArray
    while (head < 1)//to find countries_en,fat_100g,proteins_100g,carbohydrates_100g index values from dataArray
    {
        country_index = dataArray.indexOf('countries_en');
        fat_index = dataArray.indexOf('fat_100g');
        protein_index = dataArray.indexOf('proteins_100g');
        carbohydrate_index = dataArray.indexOf('carbohydrates_100g');
        head++;
    }//end of while loop
    country = dataArray[country_index];//assign countries_en value to country
    fat = dataArray[fat_index];//assign fat_100g value to fat
    protein = dataArray[protein_index];//assign proteins_100g value to protein
    carbohydrate = dataArray[carbohydrate_index];//assign carbohydrates_100g value to carbohydrate
    if (country == "")//check country and assign value to "N" if its empty
    {
        country = "N";
    }//end of if loop
    if (fat == "")//check fat and assign value to 0 if it has empty value
    {
        fat = 0;
    }//end of if loop
    if (protein == "")//check protein and assign value to 0 if it has empty value
    {
        protein = 0;
    }//end of if loop
    if (carbohydrate == "")//check carbohydrate and assign value to 0 if it has empty value
    {
        carbohydrate = 0;
    }//end of if loop
    north_europe_length = northEurope.length;//calculate and store northEurope array length
    while (k1 >= 0 && k1 < north_europe_length)//loop to assign region value
    {
        if (country == (northEurope[k1]))//check country value to northEurope[k1]
            set_region = "NorthernEurope";//if true.set_region value to NorthernEurope
        k1++;
    }//end of while loop
    central_europe_length = centralEurope.length;//calculate and store centralEurope array length
    while (k2 >= 0 && k2 < central_europe_length)//loop to assign region value
    {
        if (country == (centralEurope[k2]))//check country value to centralEurope[k1]
            set_region = "CentralEurope";//if true.set_region value to centralEurope
        k2++;
    }//end of while loop
    south_europe_length = southEurope.length;//calculate and store southEurope array length
    while (k3 >= 0 && k3 < south_europe_length)//loop to assign region value
    {
        if (country == (southEurope[k3]))//check country value to southEurope[k1]
            set_region = 'SouthernEurope';//if true.set_region value to southEurope
        k3++;
    }//end of while loop
    if (set_region)//check if set_region is true/false
    {
        if (set_region == "CentralEurope")//check set_region has the value CentralEurope
        {
            if (typeof(carbohydrate) == "undefined" || typeof(fat) == "undefined" || typeof(protein) == "undefined")//check typeof all variables,if it has undefined values then assign zero.
            {
                carbohydrate = 0;
                protein = 0;
                fat = 0;
            }//end of if loop
        }//end of if loop

        var i = region_group.indexOf(set_region);//find set_region index in region_group array
        if (i != -1)//check index
        {
            addcarbohydrate[i] = addcarbohydrate[i] + parseFloat(carbohydrate);//add carbohydrate value of all countries in particular region
            addfat[i] = addfat[i] + parseFloat(fat);//add fat value of all countries in particular region
            addprotein[i] = addprotein[i] + parseFloat(protein);//add protein value of all countries in particular region
        }//end of if loop
  }  //end of if loop
});
lr.on('close', function()
{
    for (var m = 0; m < region_group.length; m++)//store all region,fat,carbohydrate,protein values in json object
    {
        var json_obj = {};//json object
        json_obj["Region"] = region_group[m];//add region to json object
        json_obj["Fat"] = addfat[m].toFixed();//add fat value to json object
        json_obj["Carbohydrate"] = addcarbohydrate[m].toFixed();//add carbohydrate value to json object
        json_obj["Protein"] = addprotein[m].toFixed();//add protein value to json object
        json_arr.push(json_obj);//push json object to array json_arr
        console.log(addprotein[m] + " " + addfat[m] + " " + addcarbohydrate[m]);//print values in console
    }
    fs.writeFileSync('regionJSON.json', JSON.stringify(json_arr), 'utf-8');//write json_arr value in regionJSON file
});
