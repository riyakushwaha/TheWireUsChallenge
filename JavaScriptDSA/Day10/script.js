
myFunction();

function myFunction()
{ 
    var n = parseInt(prompt("Enter number for the pattern"));

    var spaces, values, temp;

    for(var i=0; i<n; i++)
    {
        values= n-i;
        spaces = 2*i;
        temp = values;


        while(temp>0)
        {
            document.write("*");
            temp--;
        }
        while(spaces>0)
        {
            document.write("&nbsp;&nbsp;");
            spaces--;
        }

        while(values>0)
        {
            document.write("*");
            values--;
        }

        document.write("<br>");
    }

    for(var i=0; i<n; i++)
    {
        values= i+1;
        spaces = 2*(n-values);
        temp = values;


        while(temp>0)
        {
            document.write("*");
            temp--;
        }
        while(spaces>0)
        {
            document.write("&nbsp;&nbsp;");
            spaces--;
        }

        while(values>0)
        {
            document.write("*");
            values--;
        }

        document.write("<br>");
    }


       
    
    
   
}