
myFunction();

function myFunction()
{ 
    var n = prompt("Enter any number.");
    var spaces, values;
    for(var i =0; i<n ; i++)
    {
        if(i>= parseInt(n/2))
        {
            spaces=  n-i-1;
        }
        else
        {
            spaces = i;
        }

        values = n -(2*spaces);
        var j = spaces ;
        while(j>0)
        {
            document.write("&nbsp;&nbsp;");
            j--;
        }

        if(i==0 || i>n/2)
        {
            while(values>0)
            {
                document.write("*");
                values--;
            }
        }
        else
        {
            for(j = values; j>0; j--)
            {
                if(j==1 || j==values)
                {
                    document.write("*");
                }
                else
                {
                    document.write("&nbsp;&nbsp;");
                }

            }
        }




        document.write("<br>");
    }

       
    
    
   
}