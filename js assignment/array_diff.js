var a=[2,3,4,5];
var b=[2,7,8,9];
var s=[],t=[];
function difference(x,y)
{
  for(i=0;i<=a.length;i++)
  {
     if(x[i]==y[i])
     {
      delete x[i];
      delete y[i];
     }
     else{
       s[i]=x[i];
       t[i]=y[i];
     }
  }
  
  console.log(s.concat(t));
}
difference(a,b);
