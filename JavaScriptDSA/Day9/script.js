
myFunction();

function myFunction()
{ 
    var n = parseInt(prompt("Enter number for the pattern"));

    var start = 10;
    var end = n * (n+1) *10;
    // document.write("end "+end);
    // document.write("<br>");
    var values, spaces, ctr;

    for(var i =0; i<n; i++)
    {
        values = 2*n -(2*i); //
        spaces = 2*n-values;
        ctr = parseInt(values/2);

        while(spaces>0)
        {
            document.write("*");
            spaces--;
        }

        var j =ctr;

        while(j>0)
        {
            document.write(start);
            j--;
            start+=10;
        }

        j =ctr;
       end = end - ((j-1)*10);

        while(j>1)
        {
            document.write(end);
            j--;
            end+=10;
        }
        document.write(end/10);

        end = end - (ctr*10);

        document.write("<br>");
    }

       
    
    
   
}