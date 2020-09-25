
myFunction();

function myFunction()
{ 
    var l = prompt("Enter length of the rectangle");
    var b = prompt("Enter breadth of the rectangle");

    for(var i =0; i<l; i++)
    {
        for(var j =0; j<b; j++)
        {
            if(i==0 || i==l-1 || j==0 || j==b-1)
            {
                document.write("*");
            }
            else
            {
                document.write("&nbsp;&nbsp;");
            }
        }

        document.write("<br>");
    }

       
    
    
   
}