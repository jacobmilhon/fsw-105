//if statment exercise for FSW-105 week 2

//declaring variables
var catString = "cat";
var dogString = "dog";
var person = {
    name: "Bobby",
    age: 12
};

// 5 is greater than 3
if(5 > 3){
    console.log("is greater than")
};

//length of cat
if(catString.length == 3){
    console.log("is the length")
};

//compare cat and dog strings
if(catString === dogString){
    console.log("is the same")
} else{
    console.log("not the same")
};

//only allow if person age is 18 or older.
if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.")
} else{
    console.log(person.name + " is not allowed to go to the movie.")
};

//only allow if person name starts with "B"
if(person.name.charAt(0) === "B"){
    console.log(person.name + " is allowed to go to the movie.")
} else{
    console.log(person.name + " is not allowed to go to the movie.")
};

//only allow if person name starts with "B" and older than 18
if(person.name.charAt(0) === "B" && person.age > 18){
    console.log(person.name + " is allowed to go to the movie.")
} else{
    console.log(person.name + " is not allowed to go to the movie.")
};

//strict, loose, type check
if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose")
} else{
    console.log("not equal at all")
};

//less than or equal to, and(&&)
if(1 <= 2 && 2 ===4){
    console.log("yes")
};