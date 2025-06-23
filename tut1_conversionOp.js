let score = NaN;
console.log(typeof(score));

let inumber = Number(score);
console.log(typeof(value));

//score = 10 => 10
//score = "10" => NaN
//score = "sgsg"= > NaN
//score = undefined => NaN
//score = null => 0
//score = true => 1
//score = NaN 

//convert boolean
let isyes= true;
let isno = Boolean(isyes);
console.log(isno);

//1 => true; 0 => false
// "" => false
// "Something" => true

//convert string
let str = 33;
let strnum = String(str);
console.log(strnum);
console.log(typeof(strnum));


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Operations $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//concatenating string
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);

console.log("1" + 2)   //12
console.log(1 + "2")   //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

//tricky conversions
console.log(true); //true
console.log(+true); //1
console.log(+""); //0
console.log(true + 1); //2


// Increment operator ---------------------------------------

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

// If used postfix, with operator after operand (for example, x++), the increment operator increments 
// and returns the value before incrementing.

let z = 3
const f  = ++z;
console.log(`z:${z}, f:${f}`); // Expected output: "z:4, f:4"

// If used prefix, with operator before operand (for example, ++x), the increment operator increments 
// and returns the value after incrementing.


//----------------------------------------------------------





