var string=window.prompt("enter string");
var charc=window.prompt("enter char");
var c=0;
for(var s=0;s<=string.length;s++)
{
if(string.charAt(s) == charc)
{
  c+=1;
}
}
console.log(c);
