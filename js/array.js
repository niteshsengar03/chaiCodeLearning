const arr = Array(3);
console.log(arr, arr.length);
arr.push("nitesh");
console.log(arr);

const arr1 = Array.of(3)
console.log(arr1)


const arrFromString = Array.from("Nitesh");
console.log(arrFromString); // 'N','i','t',..

const arrFromObj = Array.from({0:"nitesh",1:"singh",length:2})
console.log(arrFromObj)

//truncate of array
array1 = ['A','B','C','D','E'];
array1.length = 3 // we can overwrite the length output -> ['A','B','C']
array1.length = 5 // now cannot resotre the lost the data so empty slots will be created


//Searching index, indexOf, includes

console.log(typeof []);  // output - object
console.log(Array.isArray([])) // output - true or false
// better to get know if the things is arrays or not


const h = [2,2];
console.log(h[3]);



