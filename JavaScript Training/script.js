//reference= [] () {} 
//aise koi bhi value jisko copy karne par real copy nahi hota , balki us main value ka reference pass hojaata
//hai , use hum reference value kehte hai , aur 


//functions
// mainly teen kaam ke liye hote hai 
// 1. jab apka code aap turant nahi chalana chaahte fitire mein chalaana chaahte ho 
// 2. jab apla code app reise karna chahte ho
//3.jab aap code chalana chahte ho har baaar with different data

//function name(){} 
// jo values apa bhejde aw funtion rahi jive apa function nu call krda hune ae odo , ohna nu kehnde ne arguments  te jehde variable apa function de vich ditte hunde ae jithe jake eh value store honi a ohna nu kehnde ne parameters .
//fucntion name(parameters){}

// function name(parameter1 , parameter2){
//     //code
// }
// name(argument1 , argument2)

//arrays 
// arrays vich apa multiple values store krwa sakde ae
//array de start vich kuch add krn ali apa unshift use krde ae and array de firt value htaun lyi shift use hunda a 
// pop for remove last value and push for add value in last
// splice used for add or remove value in any position inn array
// slice used for copy value of array

//object
//ek to jyada bandeya di gal kari tn oh array a , j ik bande bare sari gal kari oh hunda a object.
// object hai ik bande di details nu hold karna , in key value pair

//blank object
// var a = {};
// filled object
// var a={
//    age=29,
//   name="mandeep",
//   gender="male"
// }
// age name gender are properties here 
// ek aise property jiski value hai function usko hum method kehte hai 
//var funtion scoped hota hai / var apne parent function me kahi bhi use ho sakta hai 
// var add itseflt to the window object

//let const braces scope hota hai , 
//let and const window me object add nahi krte

//heap memory - jitne bhi variables ya data hum banate hai unhe strore jaha hota hai  usko bolte hai heap memory

//execution context - means jab bhi hum function chlaye ge ,function khud ka ek imaginary container bna lega , jisme uski teen cheejehn honi

// 1. variables
// 2. functuins inside that parent function
//3.lexical environment of that function - it means kya access kr sakte hai aur kya access nahi kr sakde
//execution  context - is a container where the fuctions  code is executed . it is always created whenever a function is called , it contains 3 things , variables ,funtions and lexical environment.

//lexical environment hota hai ek chart jisme yeh likha hota hai k apka  particular function ki cheejo ko access kar sakta hai and kinko nahi. means "scope"

//... three dots called as a spread operators jihnu nu apa ik array nu copy krn lyi use krde aw
//we can aslo copy object values with three dots

//foreach loop sirf array pe chalta hai matlab ki jab bhi tumhaare pass ek array ho , tab use mein kaun atta hai foreach loop

//foreach by default kabhi bhi by default apke arrray mein change nahi krta  , wo apko changes krke deta hai array ki temporary copy par jiski wajah se array hmesha same rehta hai 

// objects par loop karne k liye hota hai forin loop

//callback fncs
// jab bhi koi aisa code jo baad me chalta hai , kyuki wo  baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi aise code ke completetion par js ko bataya jaata hai k wo complete hogya aur app use chala sakte ho,  ye bataaane ka kaam callback ha .

//aisa code jo baad me chalta hai use hum ek function de dete hai le bhayia jab complete hojana to ye fuction chala dena , aur wo function jo hum dete hai wo ek normal function hi hota hai aur usse kehte hai callback function .

//first class fncs

//js mein ek concept hai jiska matlab hota hai ki app fnc ko use kar sakte ho as a value
