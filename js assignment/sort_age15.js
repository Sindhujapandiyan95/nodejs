var myObj = 
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var result=function(a, b){
    if(a.age > b.age) return -1;
    if(a.age < b.age) return 1;
    return 0;
};

var r=myObj.sort(result);
console.log(r);
 for(var i=0;i<=myObj.length;i++)
 {
  if(myObj[i].occupation == "Programmer")
  {
  console.log(myObj[i]);
  }
}
 for(var i=0;i<=myObj.length;i++)
 {
  console.log(myObj[i].age);
  
}
