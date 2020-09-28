
myFunction();

function myFunction()
{ 
    var n = parseInt(prompt("Enter number for the pattern"));
    var spaces, rt, lt;

    for(var i=n-1; i>=0; i--)
    {
        spaces = i*2;

        rt = n-i;
        lt = n-i;

        while(rt>0)
        {
            document.write("*");
            rt--;
        }

        while(spaces>0)
        {
            document.write("&nbsp;&nbsp;");
            spaces--;
        }

        while(lt>0)
        {
            document.write("*");
            lt--;
        }

        document.write("<br>");
    }

    for(var i=0; i<n; i++)
    {
        spaces = i*2;
     
        rt = n-i;
        lt = n-i;

        while(rt>0)
        {
            document.write("*");
            rt--;
        }

        while(spaces>0)
        {
            document.write("&nbsp;&nbsp;");
            spaces--;
        }

        while(lt>0)
        {
            document.write("*");
            lt--;
        }

        document.write("<br>");
    }


       
    
    
   
}