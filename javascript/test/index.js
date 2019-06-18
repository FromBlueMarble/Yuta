
// function myFunction () {

// return ;

// }

// //Create a function that will return a random number *
// var random = Math.random( ); 
// document.write("Random Number Generated : " + random );



function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

var i = 0;
for (i = 0; i <100; i++)
{
console.log(test_prime(testThisPrime);
}


function person(){



console.log(firstName + lastName);

}

//
var array = ['apple','banana','lemon','orange'];
 
console.log(array);



//
var txt = "abcdefgthijklm";
var pos = txt.;


function reverseString(str) {
    return str.split("").reverse().join("");
  }
 reverseString("abcdefgthijklm");