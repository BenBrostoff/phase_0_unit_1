  // This is a Solo Challenge. 

  // There is a section below where you will write your code.
  // Do not alter this object here.

  var terah = {
    name: "Terah",
    age: 32,
    height: 66,
    weight: 130,
    hairColor: "brown",
    eyeColor: "brown"
  }


  /* Pseudocode Section - write pseudocode for each challenge below.
  1. Define a variable adam and use object literal notation to assign this variable 
     the value of a JavaScript Object object with no properties.
  // creat adam 

  2. Give adam a name property with the value "Adam".
  // set name equal to "Adam"

  3. Add a spouse property to terah and assign it the value of adam.
  // create spouse property for terah
  // set spouse to adam for terah

  4. Change the value of the terah weight property to 125.
  // set terah weight to 125

  5. Remove the eyeColor property from terah.
  //delete eyeColor for terah

  6. Add a spouse property to adam and assign it the value of terah.
  //set spouse to terah for adam
  //you cannot do this within object literal notation for adam, because the terah variable appears after adam
  //create new line after both variables have been stated setting adam spouse equal to terah

  7. Add a children property to terah and and use object literal notation to assign 
     this variable the value of a JavaScript Object object with no properties
  // create children object nested within terah
 
  8. Add a carson property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Carson".
    // create separate carson object
    // set name to "Carson"

  9. Add a carter property to the value of the terah child
ren property and assign it 
     the value of an object with the property name with a value of "Carter".
      // create separate carter object
    // set name to "Carter"

  10. Add a colton property to the value of the terah children property and assign it 
      the value of an object with the property name with a value of "Colton".
        // create separate Colton object
    // set name to "Colton"

  11. Add a children property to adam and assign it the value of terah children.
  // create children property
  //at end of code, create separate line setting adam children to terah children


  */

  // __________________________________________
  // Write your code below.

  var adam = {
    name: "Adam",
    children: "",
  }

  var terah = {
    name: "Terah",
    age: 32,
    height: 66,
    weight: 125,
    hairColor: "brown",
    spouse: adam,
    children: {
       carson: {name: "Carson"},
       carter: {name: "Carter"},
       colton: {name: "Colton"},
    }
    }



  

adam.spouse = terah;
adam.children = terah.children;

  







  // __________________________________________
  // Reflection: Use the reflection guidelines
  // I think the main take-away from this challenge is that order matters in Javascript.
  // The "gotcha" in this exercise are the two lines of code in 82-83 and the nesting of the children propert.
  //I needed to assign adam.spouse to terah and adam.children to terah.children at the end because of the fact that the Adam variable appears before Terah. 
  //Both need to be stated and I need to alter "after". This is a major difference from Ruby where order is not integral. 
  //I learned a significant amount about nesting objects within objects here.  
  // Objects exist within and of themselves, the notation for all objects needs to be the same.
// Thus, brackets around individual objects need to be self contained (children is an object, and carson is an object).
//In retrospect, this makes complete sense, but I struggled initially with understanding this concept. 

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
    (adam instanceof Object),
    "The value of adam should be an Object.",
    "1. "
  )

  assert(
    (adam.name === "Adam"),
    "The value of the adam name property should be 'Adam'.",
    "2. "
  )

  assert(
    terah.spouse === adam,
    "terah should have a spouse property with the value of the variable adam.",
    "3. "
  )

  assert(
    terah.weight === 125,
    "The terah weight property should be 125.",
    "4. "
  )

  assert(
    terah.eyeColor === undefined,
    "The terah eyeColor property should be removed.",
    "5. "
  )

  assert(
    terah.spouse.spouse === terah,
    "The terah spouse property's value spouse property should be terah.",
    "6. "
  )

  assert(
    (terah.children instanceof Object),
    "The value of the terah children property should be an Object.",
    "7. "
  )

  assert(
    terah.children.carson.name === "Carson",
    "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
    "8. "
  )

  assert(
    terah.children.carter.name === "Carter",
    "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
    "9. "
  )

  assert(
    terah.children.colton.name === "Colton",
    "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
    "10. "
  )

  assert(
    adam.children === terah.children,
    "The value of the adam children property should be the value of the terah children property",
    "11. "
  )

  console.log("\nHere is your final terah object:")
  console.log(terah)