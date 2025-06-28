
/* 

Twotypes of data types based on storung and accessing data - 
--Primitive
--Non-Primitive(Reference) data types 

*/

/*

Q.Javascript dynamically typed or statically typed language?
A.Javascript is a dynamically typed language. It means that the type of a variable is determined at runtime 
and can change as the program executes. 
You don't need to declare the type of a variable when you create it, 
and you can reassign it to a value of a different type later on.

*/


/*-----------------------------------------------------------------------------------

***** Primitive data types - call by value *****
7 types--
    1.String
    2.Number
    3.Boolean
    4.null
    5.undefined
    6.Symbol
    7.BigInt
*/

const score = 100;
const score2 = 122.2;

const isLoggedin = true;
const Temp = null
let userEmail;

//Symbol
const id = Symbol('123')
const anotherid = Symbol('123')
// id and anotherid looks like they are same but they are not same 

const bigNumber = 1321432536365645747n;

//-----------------------------------------------------------------------------------------

/*-------------------------------------------------------------------------------------------
***** (Reference) Non-Primitive data types - call by reference *****
1.Array
2.Object
3.Functions
*/

const user = ["John", "Fon", "Pon", "Ron"];
let myobj = {
    name: "ashibh",
    age:20
}

const myFunc = function(){
    console.log("Hello from myFunc");
}


//-------------------------------------------------------------------------------------------


/*
typeof() function for primitive and non primitive data types

Primitive -
    1.String => "string"
    2.Number => "number"
    3.Boolean => "boolean"
    4.null => "object" (this is a known quirk in JavaScript)
    5.undefined => "undefined"
    6.Symbol => "symbol"
    7.BigInt => "bigint"

Non-Primitive -
    1.Array => "object"
    2.Object => "object"
    3.Function => "function" (functions are a special type of object in JavaScript also called as function object)

*/

