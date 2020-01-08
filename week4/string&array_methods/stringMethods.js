// Week 4 Pause and Practice: String Methods & Array Methods

//return any given string into all caps followed by the same string all lowercase.
function capitalizeAndLowercase(str) {
    let upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
};

console.log(capitalizeAndLowercase("Hello"));

//returns a number half the length, and rounded down.
function findMiddleIndex(str) {
     let middleOfString = Math.floor(str.length / 2);
     return middleOfString;
};

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

//return the first half of the string.
function returnFirstHalf(str) {
    let middleOfString = findMiddleIndex(str);
    let firstHalfOfString = str.slice(0, middleOfString);
    return firstHalfOfString;   
};

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

/*returns string where the first half is capitalized,
and the second half is lower cased. (If the string length 
is odd, capitalize the shorter of the first half.)*/
function firstHalfUppercaseSecondHalfLowercase(str) {
    let middleOfString = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, middleOfString);
    let secondHalf = str.slice(middleOfString)
    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
};

console.log(firstHalfUppercaseSecondHalfLowercase("Hello"));
console.log(firstHalfUppercaseSecondHalfLowercase("Hello World"));

//takes any string and capitalizes any character that follows a space.
function capitalize(str) {
    arrayOfString = str.split(" ");
    let capitalizeElement = []
    for(i = 0; i < arrayOfString.length; i++) {
        capitalizeElement.push(arrayOfString[i].charAt(0).toUpperCase()+arrayOfString[i].slice(1));
    };
    firstLetterUpperStr = capitalizeElement.join(" ");
    return firstLetterUpperStr;
}

console.log(capitalize("hey friends! practice practice practice!"));