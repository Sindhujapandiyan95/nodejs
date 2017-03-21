var fs = require('fs');
var lineReader = require('readline').createInterface(
{
    input: fs.createReadStream('FoodFacts1.csv')
});
var country_arr = ['Netherlands', 'Canada', 'United Kingdom', 'United States', 'Australia',

                   'France', 'Germany', 'Spain', 'South Africa'];
var dataArray = [],
    sugar_arr = [],
    salt_arr = [],
    json_arr = [];
var indexSugar = 0,
    indexSalt = 0,
    indexCountry = 0;
var country = 0,
    sugar = 0,
    salt = 0,
    head = 0;
for (var j = 0; j < country_arr.length; j++)//array initialization
{
    sugar_arr[j] = 0;
    salt_arr[j] = 0;
}//end of for loop
lineReader.on('line', function(line)
{
    dataArray = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);//split csv file
    while (head < 1)//store index value of country,sugar,salt
    {
        indexCountry = dataArray.indexOf('countries_en');
        indexSugar = dataArray.indexOf('sugars_100g');
        indexSalt = dataArray.indexOf('salt_100g');
        head++;
        console.log("indexcountry:" + indexCountry);

    }//end of while loop
    country = dataArray[indexCountry];//store country value
    sugar = dataArray[indexSugar];//stroe sugar value
    salt = dataArray[indexSalt];//stroe salt value
    if (sugar == "")//initialize sugar=0 if sugar value is empty
    {
        sugar = 0;
    }
    if (salt == "")//initialize salt=0 if salt value is empty
    {
        salt = 0;
    }
    if (country == "")//initialize country="N" if country value is empty
    {
        country = "N";
    }
    var i = country_arr.indexOf(country);//find country index in country_arr

    if (i != -1)//to check index
    {
        sugar_arr[i] = sugar_arr[i] + parseFloat(sugar);//add all sugar value and store that value in particular index
        salt_arr[i] = salt_arr[i] + parseFloat(salt);//add all salt value and store that value in particular index

    }//end of if loop

});
lineReader.on('close', function()
{
    for (var m = 0; m < country_arr.length; m++)//store all country,sugar,salt values in json object
    {
        var json_obj = {};//json object
        json_obj["country"] = country_arr[m];
        json_obj["Sugar"] = sugar_arr[m].toFixed();
        json_obj["salt"] = salt_arr[m].toFixed();
        json_arr.push(json_obj);
        console.log(country_arr[m] + " " + sugar_arr[m] + " " + salt_arr[m]);//print country,salt,sugar values in console
    }//end of for loop
    fs.writeFileSync('countryJSON.json', JSON.stringify(json_arr), 'utf-8');//write json object into countryJSON file
});
