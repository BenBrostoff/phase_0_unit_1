// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ben Brostoff
//  2. Jennie Tutu
//  3. Jeuel Wilkerson

// 1. "YOU SIGNED... WHO?!"

var jackson = {name: "Jackson",
                age: 35,
                quote: "There's a snake in my boot!", 
                avgRTscore: 60/100};
                
var april = {name: "April",
                age: 44,
                quote: "I'll be back!",
                avgRTscore: 70/100};

// 2. "Here they Come!"

                
var adam = {name:"Adam Sandler",
                age: 47,
                quote: "That's your home! Are you too good for your home?!",
                avgRTscore: 19/100};

var kristen = {name: "Kristen Bell",
                age: 33,
                quote: "Do you wanna build a snowman?",
                avgRTscore: 60/100};

var jim = {name: "Jim Carey",
                age: 52,
                quote: "So you're telling me there's a chance? YEAH!",
                avgRTscore: 65/100};

var array = [jackson, april, adam, kristen, jim]

function Client(name, age, quote, avgRTscore) {
this.name = name;
this.age = age;
this.quote = quote;
this.avgRTscore = avgRTscore;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!" + // ** BONUS **


function show(array) {
    for (i = 0; i < array.length; i++) {
        console.log("Name: " + array[i].name);
        console.log("Age: " + array[i].age);
        console.log("Quote: " + array[i].quote);
        console.log("RT Score: " + array[i].avgRTscore);
        console.log(" ");
    }
};

show(array);


//  Your Reflection:
//I enjoyed working with Jenny and Jeuel. I think we all individually brought value skills to the project.
//Jenny was excellent in testing out the code in her terminal. She shared the screen and was great at relating what the errors were and offering potential solutions.
//Jenny also did a great job navigating and implementing code as Jeuel and I took turns driving.
//Jeuel was the only person who knew how to do a for loop in Javascript, although we all didn't realize the parameters in the for loop had to be separated by semi-colons as opposed to commas. I liked how Jeuel and I worked together in taking turns on driving.
//I felt really good about my own performance in the GPS session. I was able to correct a potentially bad error when it was recommended we use a var in a function (which would have global implications).
//I also was testing out the code in CodeAcademy and found and corrected syntax errors.
//I think this exercise was great on learning for loops; all of us came out with a stronger understanding.
//Additionally, Allen did a strong job explaining some key differences between Ruby and Javascript; how where variables are placed affects the code and the differences between puts and prints in Ruby and console.log in Javascript.
//Also, Jenny had a good question about how we will be using Javascript in DBC, which helped underscore that this is a "helper" language for web development as opposed to Ruby, which is the de facto primary language we'll be working in. 



