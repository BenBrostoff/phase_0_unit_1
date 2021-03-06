// I worked with Osama and Phillip on this challenge.

// Your mission description:
// The ogres have declared an ultimatum to Thorin and his son Thorin Jr. 
// Thorin, standing 20m straigh-away from Thorin Jr., must shoot an arrow at an apple directly above Thorin Jr.'s head or die.
// Of course, if the arrow touches any part of Thorin Jr. Thorin's son will die.
// Additionally, if Thorin misses his son and the apple completely, both will be killed by the ogres.
// In summary, the only way for the user to pass the mission is for Thorin to hit the apple. 

// Pseudocode

// create object, Thorin
// starting positionXY for Thorin of (50,50)
// create object, Thorin Jr. 
// starting positionXY for Thorin Jr. of (100,50)
// create object apple
// starting positionXY for apple of (100,66)
// create object Thorin Jr. danger zone
// area of Thorin Jr. Danger is rectangular perimeter

// perimeter coordinates 
//(90,60) --> top left
//(110,60) --> top right
//(90,40) --> bottom left
//(110,40) --> bottom right

// create object apple 
// starting positionXY for apple of (100,51)
// create object apple success zone

// perimeter coordinates
//(95,71) --> top left
//(105,71) --> top right
//(95,61) --> bottom left
//(105,61) --> bottom right

//create function attackXY() that sends arrow to coordinates
//IF attackXY() is within apple success zone
   // mission success
//IF attackXY() is within Thorin Jr. danger zone
   // mission failure
   // Thorin Jr. death animation
//ELSE
   // mission failure
   // ogre laughing animation

// Initial Code
var thorin {
	name: "Throrin",
	location: (50,50),
}

var thorinjr {
	name: "Thorin Jr",
	location: (100,50),
}

var apple {
	name: "apple",
    location: (100,66),
}

var thorinjrdzone {
	location: {
		top-left: {location: (90,60)},
		top-right: {location: (110,60)},
		bottom-left: {location: (90,40)},
		bottom-right: {location: (110,40)},
	}

var applesuccesszone {
	location: {
		top-left: {location: (95,71)},
		top-right: {location: (105,71)},
		bottom-left: {location: (95,61)},
		bottom-right: {location: (105,61)},
	}


function attackXY(x,y){} // unsure on this part
function deathanimation {} // unsure on this part
function laughing {} // unsure on this part


if (X >= 95 && X <= 105 && Y >= 61 && Y <= 71) 
{
console.log("Mission success!") 
}

else if (X >= 90 && X <= 110 && Y >= 40 && Y <= 60) 
{
console.log("Mission failure!")
thorinjr.deathanimation();
}


else
ogre.laughanimation();
};



// Refactored Code
//Phillip suggested we modify the attackXY function to make condition

function attackXY() {
if (X >= 95 && X <= 105 && Y >= 61 && Y <= 71) 
{
attackanimation(); // presumably we would inherit from Code Combat
console.log("Mission success!") 
}

else if (X >= 90 && X <= 110 && Y >= 40 && Y <= 60) 
{
attackanimation(); // presumably we would inherit from Code Combat
console.log("Mission failure!")
thorinjr.deathanimation();
}

else{
attackanimation(); // presumably we would inherit from Code Combat
ogre.laughanimation();
}
}
}




// Reflection
// I must admit that the scope of this mission was a bit beyond my knowledge of JavaScript.
// I specifically struggled with the danger zones and how to write the if statements specifying that if an area hit a certain zone to do certain commands.
// Osama and Phillip both assisted a lot here; Osama made good comments on how to write the condition.
// Phillip suggested we change the attackXY function so different things happened in different conditions.
// In all scenarios, one would see the arrow animation (which I assume we could inherit from another class).
// I refactored the code based on Phillip's suggestion. 
// 
// I reviewed Armen's code here and commented on his Github. Interesting, Armen approached the challenge differently than I did.
// Armen focused more on solving his mission from a user perspective, whereas I focused on designing the level.
// I think both focuses are important and find it intriguing we interpreted the assignment so differently.