const film = {
    name: "Nitesh",
    introduce() {
        // points to same object
        return (this);
    },
    // points to global object done't have own this binding
    // don't use arrow function in objects
    arrowIntroduce: () => {
        return this;
    }
}

console.log(film.introduce());
console.log(film.arrowIntroduce());

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const filmDirector = {
    film: "Bajirao Mastani",
    cast: ["ranveer", "deepika"],
    anounce() {
        this.cast.forEach((element) => {
            console.log(`${this.film},${element}`);
        })
    },
    anounceWithoutInsideArrowCallbackFun() {
        this.cast.forEach(function (element) {
            console.log(`${this.film},${element}`);
        })
    }
}
filmDirector.anounce();
filmDirector.anounceWithoutInsideArrowCallbackFun();

console.log("======================================================================================")

// REGUALAR NESTED FUNCTION DOEST NOT INHERIT this
const films = {
    name: "hero",
    print() {
        console.log("outer function this", this.name);
        function innerPrint() { // inner function ke pass this hai hi nhi
            console.log("inner function this", this.name);
        }
        innerPrint();
        const arrowPrint = () => {
            console.log("inner arrowPrint this", this.name);
        }
        arrowPrint();
    }
}
films.print();

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//Detached method

const actor = {
    name: "Ranveer",
    bow() {
        console.log(`${this.name} takes a bow`);
    }
}
// actor.bow();  if we call this normally then Ranveer will be printend 
// but if we detached actor.bow and keep it's reference in a diff 
// varibable then it doest not take this with it
const actorBow = actor.bow;
actorBow();