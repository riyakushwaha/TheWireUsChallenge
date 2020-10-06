
myFunction();

function myFunction()
{ 

    var array = new Array();
    var intersec = new Array();
     
    var element = prompt("Enter elements of array(space seperated values)");
    var array = element.split(" ");
  
    for(let j =0; j<array.length; j++)
       {
            array[j] = parseInt(array[j]);
       }
    
  document.write("Entered Array: "+array);
  document.write("<br>");

    var target = parseInt(prompt("Enter the target"));
    array.sort();

    
    for(var i = 0; i<array.length; i++)
    {
       for(var j =i+1; j<array.length; j++)
       {

           var a = parseInt(array[i]);
           var b = parseInt(array[j]);
           if(array.includes(target-(a+b)) && array.indexOf(target-(a+b))>j)
           {
            
               document.write(`${a}, ${b} and ${target-(a+b)}`+"<br>");
           }
       }

   }
  
}