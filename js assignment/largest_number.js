var arr=[2,3,23,45,56,1,3234,456];
var num=1;
var max=arr[0];
for(num in arr)
{
  if(max < arr[num])
  {
    max=arr[num];
  }
}
console.log("the largest Number is "+max);
