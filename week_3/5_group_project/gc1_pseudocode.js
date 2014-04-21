//Reflection
//I found this experience unique in my time at DBC as it was our first real group project that required significant collaboration.
//Adrian and I had an interesting interaction as he emailed me that he thought my pseduo code should have been more detailed.
//I agreed after looking at some articles on pseudo code and rewrote accordingly (see below).
//Our group initially did not pass the final test (9 showed number is not a function). I tweaked the code because I did not agree with the median function.
//The issue with the median function was two-fold. First, the parentheses were incorrectly place in one of the conditionals, which I eventually fixed.
//Second, median was a variable inside the median function (we were showing return median = ...). I eliminated and instead did return array....
//This exercise taught me a lot about how to debug and refactor code. One thing I found myself doing was drawing out a diagram on a piece of paper with a sample array.
//I would look at our code and try to figure out what was happening in the sample array. Using this technique, I could trial and error my way through our group's issues.
//I have found CodeAcademy an invaluable tool here, but know it is not "recommended" we use it. Is there a better environment for testing out code and identifying errors?
//Overall, a great experience and I look forward to more group projects.

//Pseudo Code
//receive input that is a group of numbers
//return the sum of the group of numbers
//return the mean of the group of numbers
//return the median of the group of numbers

//I later linked up with Adrian on what the pseudo code should be.
//Adrian argued and I now agree I should have been more detailed in my pseudo code.
//Here is what I sent him in response:

// take group of numbers as input 
// store in array
// return error message for array that does not contain integers
// compute sum of array
   // compute sum of all elements in array
   // return sum
// compute average of array
  // compute sum of all elements in array
  // compute number of elements in array
  // divide sum of elements by number of elements
  // return answer
// compute median of array
// compute number of elements in array
// IF number of elements is odd number
    // subtract 1 from number of elements in array
    // divide difference by 2 (call this quotient answer)
    // eliminate the first [quotient answer] elements in the array
    // eliminate the last [quotient answer] in the array
    // return first (and only) element in array
 // IF number of elements is even number
    // subtract 2 from number of elements in array
    // divide difference by 2 (call this quotient answer)
    // eliminate the first [quotient answer] elements in the array
    // eliminate the last [quotient answer] in the array
    // sum all elements in array (should be only 2)
    // divide by number of elements in array (should be only 2)
    // return answer
  
