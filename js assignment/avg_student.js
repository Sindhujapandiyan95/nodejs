var average=0;
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
for(var s=0;s<students.length;s++)
{
  average+=students[s][1];
  
}
var avg=average/students.length;
console.log(avg);
if (avg < 60){  
          console.log("Grade : F");        
          }   
        else if (avg < 70) {  
                console.log("Grade : D");   
                  }   
        else if (avg < 80)   
            {  
                console.log("Grade : C");   
        } else if (avg < 90) {  
                console.log("Grade : B");   
        } else if (avg < 100) {  
                console.log("Grade : A");   
}  
