//All String methods walkthrough
//Static & prototype method

//1. str.length - String property cannot be reassign
let string = "William"
string.length = 4
console.log(string.length) //output: still 7


//2. static String method
//fromCharCode() - returns a string created from the specified sequence of UTF-16 code units
console.log(String.fromCharCode(189)) //output: ½
console.log(String.fromCharCode(65, 66, 67)) //output: ABC

//fromCodePoint() - returns a string created by using the specified sequence of Unicode code points
console.log(String.fromCodePoint(9731, 9733, 0x2f804)) //output:☃★你

//charAt() - return new char at the given index
const sample = "cats"
console.log(sample.charAt(3)) //s
// If index cannot be converted in Int, first char would be returned
console.log(sample.charAt()) //c
console.log(sample.charAt(true)) //c
console.log(sample.charAt(false)) //a
console.log(sample.charAt(30)) // ""

//charCodeAt() - returns an integer between 0 to 65535 representing the UTF-16 code unit at the given index
const sample2 = "½A你"
console.log(sample2.charCodeAt(0)) //189
console.log(sample2.charCodeAt(1)) //65
console.log(sample2.charCodeAt(100)) //NaN
console.log(sample2.charCodeAt(-1)) //NaN

//codePointAt - returns a non-negative Unicode code point value
console.log(sample2.codePointAt(2)) //0x2f804 in hexadecimal, 194564 in decimal

//Concat() - performance worse than "+" operator
console.log("Hello".concat({})) //Hello[object Object]
console.log("Hello".concat(true)) //Hellotrue
console.log("Hello".concat(NaN)) //HelloNaN
console.log("Hello".concat(1, 2, 3)) //Hello123

//startsWith() - Check if string starts with specified char(s)
const str4 = "Cats are the best!";
console.log(str4.startsWith("Cats a")) //true

//endsWith() - The second arg 'length' determines where the string ends.
const str1 = 'Cats are cute!'
console.log(str1.endsWith('cut', 12)) //true: ending after the char "cut" which is str1[12]
console.log(str1.endsWith('C', 1)) //true: ending after the char "C" which is str1[1]
console.log(str1.endsWith('cute')) //false
console.log(str1.endsWith('cute!')) //true

//includes() - returns boolean to check whether string contains specified charaters
const strA = "Cats are the best!"
console.log(strA.includes("Cats")) //true
console.log(strA.includes("cats")) //false

//indexOf() - returns the index of first found char or substring within the string.
//If not found(indexOf is case sensitive), -1 would be returned
console.log(strA.indexOf()) //-1
console.log(strA.indexOf("are")) //5
console.log(strA.indexOf("a")) //1
console.log(strA.indexOf("x")) //-1

//lastIndexOf() - return the index of last found char or substring within the string.
console.log(strA.lastIndexOf("a")) //5
console.log(strA.lastIndexOf("x")) //-1

//macth() - Regex match method
const input = "apple banana";
const pattern = /^a\w*/g;
const matches = input.match(pattern);
console.log(matches); // ["apple"]

// search() - same as indexOf, but accept regex as argument
const toSearch = "The quick brown fox jumps over the lazy dog";
// search for the word "quick" using search()
console.log(toSearch.search("quick")); // output: 4
// search for the word "Quick" using search()
console.log(toSearch.search(/Quick/i)); // output: 4
// search for the word "quick" using indexOf()
console.log(toSearch.indexOf("quick")); // output: 4
// search for the word "Quick" using indexOf()
console.log(toSearch.indexOf("Quick")); // output: -1

//repeat() - return new string with specified number of copies of existing string.
const toCopy = "Bla"
console.log(toCopy.repeat(0)) //""
console.log(toCopy.repeat(3)) //"BlaBlaBla"

// replace() - replaces specified value with another value in a string.
const toReplace = "JavaScript is amazing";
console.log(toReplace.replace("Java", "Type")) //TypeScript is amazing

//slice() VS splice() (Array method, only use in array, would mutate the original array)
//slice: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
const str2 = "Cats are the best!";
const result = str2.slice(3);
console.log(result) // s are the best!
console.log(str2) // Cats are the best!

//split() - Split string into array of substrings.
const str3 = "Javascript-is-amazing!"
console.log(str3.split()) //[ 'Javascript-is-amazing!' ]
console.log(str3.split("-")) // [ 'Javascript', 'is', 'amazing!' ]
console.log(str3.split("!")) // [ 'Javascript-is-amazing', '' ]

// substr() VS substring()
// str.substr(starIndex, length)
// returns the character snippet in a string beginning at "start" and through the specified number of characters, "length". Second params "length" is optional and if omitted, by default up to the end of the string is.
const str5 = "Cats are the best!"
console.log(str5.substr(2, 6)) //ts are
console.log(str5.substr(13)) //best!
console.log(str5.substr(5, 8)) //output: "are the",  (start at str[5] with 8 characters counted
// substring(starIndex, toIndex) 
console.log(str5.substring(5, 8))//output: "are"

//toLowerCase() / toUpperCase()
const str6 = "CATS"
const str7 = "cats"
console.log(str6.toLowerCase())
console.log(str7.toUpperCase())

//trim() - Remove whitespace from both ends of a string
const str8 = "     will  "
console.log(str8.trim())

// valueOf() - returns the primitive value of a String object
const strObj = new String("foo")
console.log(strObj) //[String: 'foo']  { 0:f, 1:o, 2:o }
console.log(strObj.valueOf()) // "foo"