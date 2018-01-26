document.getElementById("happy")

function happy (n) {  // Create function "happy" with parameter "n"

    var past= []; // Code to be exicuted: Declared a variable "past" as an empty array.
      while (n= [].reduce.call(n.toString(), 
       function (a,n) { return a+n*n }, 0))
   
    // While loop n is an empty array, loops until n paramater reduces (combine both digits) the number value in the array and convert n to a string. 
    //Then carry out a function on the parameters a & n.
    // Return a plus n times n. Followed with a zero to break the loop.
   
    if (n === 1) return 1; else if (past.indexOf(n) >= 0) return 0; else past.push(n);
   }
   // if n is exactly equal to 1, then happy number and return 1.(only runs if the if statment is false =>)  else if the index of n in the array var is greater or equal to zero then return 0. 
   //else push the n paramater into the array.   
   for (var i=0 ; i<=1000 ; ++i) happy(i) && console.log(i);
   // 