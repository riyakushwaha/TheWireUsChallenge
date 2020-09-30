
myFunction();

function myFunction()
{ 

    var numbers = new Array();
    var res = [];
   
    var n = parseInt(prompt("Enter the size of array"));

    for(var i = 0; i<n; i++)
    {
        console.log(i);
        var a = parseInt(prompt("Enter element "+(i+1)));
        numbers.push(a);

    }

     var target = parseInt(prompt("Enter the target sum"));

    var i =numbers.length-1;

   document.write("Entered array: "+numbers+"<br>");
    document.write("Entered target: "+target+"<br>");
    document.write("Pairs Array: [");


    while(i >=0)

    {
        var a = numbers.pop();
        if(numbers.includes(target-a))

        {

           document.write("[ "+(target-a)+ ","+ a+ " ]");
           
        }
      i--;
    }

  document.write("]");

     
    
    
   
}