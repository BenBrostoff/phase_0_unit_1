// I worked on this challenge by myself. 
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();

//move right x2
//move down x1
//attack

this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
// move up x1
// move right x1
// move left x1
// move up x1
// attack enemy

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me

// move right x1
// attack enemy x1
// move right x1
// move up and move down to get potion 
// move right x1
// attack enemy x1

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards

// move right
// break down door
// distract guards by moving right, speaking
// move left x2
// tell Phoebe to attack
// move right, tell Phoebe to follow
// move right x2
// move up x1 
// move right x1
// yell to distract guards
// move down x1 
//move right x1
// move up x1
// move right x1
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Let's do this!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a Trap

// move down x2
// taunt
// move up x2

this.moveDown();
this.moveDown();
this.say("Hey!");
this.moveUp();
this.moveUp();

// Taunt

// taunt x4 but ensure taunts are different

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hello");
this.say("Oaf");
this.say("Idiot");
this.say("Fool");

//Cowardly Taunt

//move into danger zone
//taunt
//move into safe space

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(58, 34);
// Say something!
this.say("BAM!");
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);
// You can shift+click on the map to insert coordinates.


//Commanding Followers

// say something with follow
// move to danger zone
// say attack
// move to safe zone

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!");
this.moveXY(66, 47);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack!");
// Make sure Tharin is safe!
this.moveXY(75, 65);

//Break the Prison (I know, out of order)
// for friends, break doors
// for foes, pass over
// below only specifies isFriend() function

if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name === "Robert")
    return true;
if(name === "Marcus")
    return true;
if(name === "Lucas")
    return true;
if(name === "Gordon")
    return true;

//Mobile Artillery

// move and attack top left
// move and attack top right

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(41, 42);
this.attackXY(50,68);
this.attackXY(45,54);
this.moveXY(45, 43);
this.attackXY(69,57);
this.attackXY(57,47);
 
 
 // Reflection:

//What is this referring to? Think programming-wise rather than in the terms of the game.
//This refers to an object. A programmer enacts functions on an object. In CodeCombat, the object is Thorin or whatever person / character whatever character you control. 

//What does the () do in JavaScript?
//() denotes a function. Per Codeacademy, a function is a block of reusable code. By adding the () to the end of the name of a function, the programmer specifying that the program call on the block of code.

//What is the point of the semicolons?
//Semicolons denote the end of a command. Code cannot run if a semi-colon is not present at the end of a command.

 
 
 
 
