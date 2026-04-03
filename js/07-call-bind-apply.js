function cookDish(ingredinent, style) {
    console.log(this.name, ingredinent, style);
}

const cook1 = { name: "nitesh" };
const cook2 = { name: "neharika" };

cookDish.call(cook1, "panner", "masala"); // -> nitesh panner masala
const arr = ["mushroom", "gravy"];
cookDish.apply(cook2, arr); // -> neharika mushroom gravy

const bill = [1, 2, 3, 4];
console.log(Math.max.apply(null, bill));
console.log(Math.max(...bill));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//Bind

