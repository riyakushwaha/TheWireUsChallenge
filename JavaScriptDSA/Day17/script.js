
myFunction();

function myFunction()
{ 

    var array1 = new Array();
    var array2 = new Array();
    var intersec = new Array();
     
    var element = prompt("Enter elements of array 1(comma seperated values)");
    var array1 = element.split(" ");

    element = prompt("Enter elements of array 2(comma seperated values)");
    var array2 = element.split(" ");
    
    for(var i = 0; i<array1.length; i++)
    {
        if(array2.includes(array1[i]))
        {
           intersec.push(array1[i]);
        }

    }

    document.write("Array one: "+array1);
    document.write("Array two: "+array2);
    document.write("Intersection of the two array is: "+intersec);
    


    
  
   
}