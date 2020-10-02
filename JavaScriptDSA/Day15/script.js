
myFunction();

function myFunction()
{ 

    var numbers = new Array();
      
    var n = parseInt(prompt("Enter the size of array"));
    var values = prompt("Enter space seperated values of the array");
    var arr = values.split(" ");
    var k = parseInt(prompt("Enter the target"));

    document.write("Entered array: "+arr+"<br>");

    var count = 0; 
    for (var i = 0; i < n; ++i) 
    if (arr[i] <= k) 
        ++count; 
  
    // Find unwanted elements in current 
    // window of size 'count' 
    var bad = 0; 
    for (var i = 0; i < count; ++i) 
    if (arr[i] > k) 
        ++bad; 
  
    // Initialize answer with 'bad' value of 
    // current window 
    var ans = bad; 
    for (var i = 0, j = count; j < n; ++i, ++j) 
    { 
  
    // Decrement count of previous window 
    if (arr[i] > k) 
        --bad; 
  
    // Increment count of current window 
    if (arr[j] > k) 
        ++bad; 
  
    // Update ans if count of 'bad' 
    // is less in current window 
    ans = Math.min(ans, bad); 
    } 
   
   
document.write("Minimum swaps: "+ans);
  
   
}