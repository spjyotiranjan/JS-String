// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.var
var str1 = "I am a "
var str2 = "Kalvian"
var string1 = str1 + str2
console.log(string1);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var string2 = 'If you fail, never give up because FAIL means "First Attempt In Learning"'
console.log(string2);
// Challenge 3: Store a string in a variable and display the length of the string.
var string3 = "Hello"
console.log(string3.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
var string4 = "Hello"
console.log(string4.toUpperCase());

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var string5 = "I love programming"
console.log(string5.replace("programming", "JavaScript programming"));

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var string6 = "Hello"
console.log(string6.repeat(3));
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var string7 = "I am a Kalvian"
console.log(string7.split());
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var string8 = "Time and Tide wait for none"
console.log(string8.indexOf("Ti"));

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var string9 = "When life gives you lemons make lemonade"
console.log(string9.includes("lemon"));

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var string10 = "You must be the change you wish to see in the world."
var index1 = string10.indexOf("change")
console.log(string10.slice(index1,index1+6));
var index2 = string10.indexOf("world")
console.log(string10.substring(index2,index2+5));


