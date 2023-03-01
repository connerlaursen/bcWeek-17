// Create a function which accepts three arguments name, age, and city.
// We will be creating an object with a function instead of a class.

function User (name,age,city){
    this.name = name
    this.age = age
    this.city = city
    this.introduceSelf = ()=> {

        // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
        return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
    }
}

const userthree = new User("John", 29.5, "Phoenix")
User.prototype.introduceSelf = ()=>{console.log("hello")}

function createUser(name, age, city) {
    // Create an user object and map the function arguments to a key in the object.
    const user = {
        name: name,
        age: age,
        city: city
    }

    // Return two inner functions.
    return {
        introduceSelf: function() {

            // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
            return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
        },

        location: function() {
            return console.log(`${user.name} is located in ${user.city}`)
        }
    }
}



// Create a user without using the `new` keyword different from how we do it with classes.
const userOne = createUser('Beverly', 58, 'Phoenix')

// Call the two methods attached to our `createUser` function to see if the user object is logging the correct values.
userOne.introduceSelf()
userOne.location()

const userTwo = createUser('Jon', 29, 'Seattle')
userTwo.introduceSelf()
userTwo.location()