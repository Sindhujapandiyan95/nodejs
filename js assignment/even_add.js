var number =window.prompt(); 
var number1=number.split(',').map(function(item) {
    return parseInt(item, 10);
});
var result = [number1[0]];  
    
for(var x=1; x<number1.length; x++)  
  {  
    if(number1[x]%2 == 0)  
     {  
      result.push(number1[x],"-");  
     }  
    else  
     {  
      result.push(number1[x]);  
     }  
  }  
console.log(result);  
