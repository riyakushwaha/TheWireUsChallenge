
myFunction();

function myFunction()
{ 

    var numbers = new Array();
    var res = [];
   
    var n = parseInt(prompt("Enter the size of array"));
    var values = prompt("Enter space seperated values of the array");
    var res = values.split(" ");

    document.write("Entered array: "+res+"<br>");

    for(var i = 0; i<n; i++)
    {
        var temp = res.lastIndexOf(res[i]);
        if(temp!=i)
        {
          res.splice(temp, 1);
          n--;
        }

    }
    
    document.write("Final array: "+res+"<br>");
   

  
   
}