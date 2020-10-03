
myFunction();

function myFunction()
{ 

    var numbers = new Array();
     
    var n = parseInt(prompt("Enter the size of array"));

    for(var i = 0; i<n; i++)
    {
        var a = parseInt(prompt("Enter element "+(i+1)));
        numbers.push(a);

    }

     var k = parseInt(prompt("Enter the element"));

    if(numbers.includes(k))
    {
        
        document.write("Found at index: "+numbers.indexOf(k));
    }
    else{
        document.write("Not found");
    }
    
  
   
}