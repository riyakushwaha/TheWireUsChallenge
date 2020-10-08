
myFunction();

function myFunction()
{ 

    var arr = new Array();
     
    var element = prompt("Enter elements of array(space seperated values)");
    var arr = element.split(" ");
  
    for(let j =0; j<arr.length; j++)
       {
            arr[j] = parseInt(arr[j]);
       }
    
   document.write("Largest sum of subarray is: ");

   var sum=0;
   var max=arr[0];

   for(var i =0; i<arr.length ; i++)
   {

       sum+= arr[i];
       if(max<sum)
       {
           max=sum;
       }
       if(sum<0)
       {
           sum=0;
       }

   }

   document.write(max);
 
   
  
}