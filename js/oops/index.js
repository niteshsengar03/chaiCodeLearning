// Prototype
// it is a mechanism 
// thorough which our object 
// properties ko inherit krta hai
// through other objects 


const usr1 = {
    name: "nitesh",
    score: 100,
    increament() {
        this.score++;
    }
}
// usr inhertied toString through prototype
usr1.toString();

// user2 is empty and getting 
// property of user1 through 
// prototype
const usr2 = {
    __proto__: usr1
}

// it is getting ref from usr1 and not a copy
console.log(usr2.score);
console.log(usr2.increament());
console.log(usr2.score);
console.log(usr2.name);
// here we are creating new object
usr2.name = "neharika";
// changing name through ref
usr2.__proto__.name = "dogesh";
console.log(usr2.name);
console.log(usr1.name);

// new way to create proto
const user3 = Object.create(usr1);
// but question is what will 
// it bring copy or reference?



// constructor function
function User(name, score) {
    this.name = name;
    this.score = score;
}

const user1 = new User("nitesh", 100);
const user2 = new User("neharika", 150);

User.prototype.increament =
    function () {
        this.score++;
    }

//working of new
// create empty object {}
// link to the User.prototyp
// bind this --> object
// return object

console.log(user1.name, user1.score);
console.log(user2.name, user2.score);

// .prototype belongs to constructor function
// __proto__ belongs to object
