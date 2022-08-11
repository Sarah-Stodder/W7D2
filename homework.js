//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favoriteFood(object) {
    for (let key in object) {
      console.log(`${key}:`)
  
      if (Array.isArray(object[key])) {
        for (const item of object[key]) {
          if (item instanceof Object) {
            for (const i in item) {
              console.log(`  ${i}:`)
              console.log(`  ${item[i]}`)
            }
          } else {
            console.log(`  ${item}`);
          }
        }
      } else {
        console.log(` ${object[key]}`);
      }
    }
  }
  


favoriteFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(nam, age){
    this.nam = nam;
    this.age = age;

    this.printInfo = () => {
        console.log(`${this.nam} is ${this.age} years old`)
    }

    this.addAge = (num) => {
        this.age += num
        console.log(`In ${num} years, ${this.nam} will be ${this.age}`)
    }
}
Sarah = new Person('Sarah', 22)
Rowen = new Person('Rowen',3)

Sarah.printInfo()
Rowen.printInfo()
Rowen.addAge(3)
Rowen.printInfo()







// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkString (str){
    return new Promise( (yes, no) => {
        str.length > 10 ? yes('Big word') : no('Small Number')
    })
    .then( (result)=> console.log(result))
    .catch( (error)=> console.log(error))
}

checkString('Hi how are you today? please go easy on me today')