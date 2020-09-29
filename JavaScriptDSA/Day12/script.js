
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

    document.write("Entered array: "+numbers+"\n");
    document.write("Sorted Array: "+numbers.sort());

    


       
    
    
   
}