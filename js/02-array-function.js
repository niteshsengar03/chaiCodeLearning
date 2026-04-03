const arr = [1, 2, 3];


// Foreach
function printkr(element) {
    console.log(element);
}

function multipyKr(element) {
    console.log(element * 2);
}

function myForEach(fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr.at(i));
    }
}

arr.forEach(printkr);
myForEach(printkr);

arr.forEach(multipyKr);
myForEach(multipyKr);

// Notes forEach does not returns kuch bhi

// MAP
function multiplykraurReturn(element) {
    return element * 2;
}


const newArray = arr.map(multiplykraurReturn);
console.log(newArray);

const newArray2 = myMap(multiplykraurReturn);
console.log(newArray2);

function myMap(fn) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        const ans = fn(arr[i]);
        array.push(ans);
    }
    return array;
}

// Notes map alwasy return you an array also whatever function you are passing you should return something


const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];


//filter expects your function to return true or false
function isSpicy(element) {
    return element.spicy;
}
function myFilter(fn) {
    const result = [];

    for (let i = 0; i < orders.length; i++) {
        if (fn(orders[i])) {   // 👈 key part
            result.push(orders[i]);
        }
    }

    return result;
}

const order = orders.filter(isSpicy);
console.log(myFilter(isSpicy));
console.log(order);



//Reduce 
const ans = orders.reduce((sum, order) => {
    return sum + order.price
}, 0)
console.log(ans);

const ans1 = orders.reduce((accumulator, order) => {
    const category = order.spicy ? "spicy" : "mild";
    accumulator[category].push(order.dish);
    return accumulator;
}, { spicy: [], mild: [] })

console.log(ans1);


// Gotch moment
