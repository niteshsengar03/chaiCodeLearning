const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

// get all keys
const keys = Object.keys(artifact); // will get arrays
const values = Object.values(artifact); // return arrays
const entries = Object.entries(artifact); // return array of array

console.log(entries);

//Iterate over object
for(const [key,value] of Object.entries(artifact)){
    console.log(`key:${key},value:${value}`)
}


const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);


const obj = {
    name:"nitesh"
}

Object.freeze(obj);
obj.name="neharika";
console.log(obj);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// You also have GOD mode in objects 
// like every key pair has there own property
const secureArtificats = { name: "Ruby Pendant" };

Object.defineProperty(secureArtificats, "catelogId", {
  value: "SEC-999",
  writable: false, // if you can change the value or not
  enumerable: false, // if you can iterate or not
  configurable: false,
});

console.log(secureArtificats.catelogId);
secureArtificats.catelogId = "HACKED";
console.log(secureArtificats.catelogId);

for (const [key, value] of Object.entries(secureArtificats)) {
  console.log(`${key} : ${value}`);
}
// To see the properties of key-value paris in object
const desc = Object.getOwnPropertyDescriptor(secureArtificats, "name");
const desc2 = Object.getOwnPropertyDescriptor(secureArtificats,"catelogId");
console.log(desc);
console.log(desc2);
