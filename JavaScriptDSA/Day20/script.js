
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
    
   document.write("Leaders of array are: ");

   for(var i =0; i<arr.length; i++)
   {
        var flag = 1;
       for(var j =i+1; j<arr.length; j++)
       {
           if(arr[i]<arr[j]) {

               flag = 0;
               break;
           }
       }

       if(flag==1)
       {
           document.write(arr[i]+" ");
       }

   }
 
   
  
}