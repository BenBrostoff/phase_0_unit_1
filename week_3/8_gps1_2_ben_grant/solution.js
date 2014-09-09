// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ben Brostoff
//  2. Grant Hummer


// 0. "YOU SIGNED... WHO?!"

var adamSandler = {  
                   name: "Adam Sandler",
                   age: 47,
                   quote: "That's your home... "
                    };

console.log(adamSandler);



// 1. "Here they Come!"

// See above; you'd just input different variable names and data

// 2. "TIME IS MONEY!"

globalArray = []

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  globalArray.push(this);
}


Client.prototype.showQuote = function() {
  console.log("This client's name is " + this.name + ". He / she is " + this.age + " years old. Hilarious quote: " + this.quote) 
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var tomCruise = new Client("Tom Cruise", 48, "SHOW ME THE MONEY!!!");

shooterMcGavin.showQuote();
console.log(globalArray);

// 3. "SHOW 'EM OFF!"

// See Client function

// 4. "But wait, there's more!"

// See Client function

// 5.  ** BONUS **

// See Client function

//  6.  Your Reflection: