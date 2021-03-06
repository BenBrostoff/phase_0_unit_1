// I paired by myself on this challenge.




// Pseudocode
// set secretNumber equal to number
// set password equal to string
// set allowedIn equal to Boolean
// set allowedIn equal to false
// set members equal to array
// set the first element equal to John
// set the fourth element equal to Mary


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = new Array();
members[0] = "John";
members[3] = "Mary";




// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;
var password = "just open the door";
var allowedIn = true;
var members = ["John","X","Y","Mary"];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// The only change I made in my refactoring was to condense the three lines used to work the array criteria into one line. I used literal array notation as opposed to regular.
// It seems to me that the three other variables must be specified as separate lines of code, but I could be in error here.
// I will note that I tested my code in CodeAcademy as opposed to some other environment (such as the terminal).
// When I ran in the terminal, it did output nine trues (after I had used CodeAcademy for error testing).
// I tried purposely changing allowedIn to true to see the change in the terminal.
// The error does indeed read "the value of allowedIn should be false" - I just think codeAcademy is cleaner.


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

