//return new array of numbers 5 or greater
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if(num >= 5){
            return true;
        };
    });
    return result;
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//return new array of only even numbers
function evensOnly(arr) {
    const result = arr.filter(function(num){
        if(num % 2 === 0){
            return true;
        };
    });
    return result;
};
console.log(evensOnly([3, 6, 8, 2]));

//return new array of strings with 5 or less characters
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(function(num){
        if(num.length <= 5){
            return true;
        };
    });
    return result;
};
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//retrun new array of only people in club
function peopleWhoBelongToTheIlluminati(arr) {
    const result = arr.filter(function(num){
        if(num.member === true){
            return true;
        };
    });
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true}
]));

//return filtered list of people who are old enough to see the matrix
function ofAge(arr) {
    const result = arr.filter(function(num){
        if(num.age >= 18){
            return true;
        };
    });
    return result;
};
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));

//new array that are dubbles of first array
function doubleNumbers(arr) {
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
};
console.log(doubleNumbers([2, 5, 100]));

//array of numbers to strings
function stringItUp(arr){
    const result = arr.map(function(num){
        return num.toString();
    });
    return result;
};
console.log(stringItUp([2, 5, 100]));

//capitalize first letter in each name in array
function capitalizeNames(arr) {
    const result = arr.map(function(num){
        return num.charAt(0).toUpperCase() + num.substring(1).toLowerCase();
    });
    return result;
};
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//array of strings of the names
function namesOnly(arr) {
    const result = arr.map(function(num){
        return num.name;
    });
    return result;
};
console.log(namesOnly([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));

//array of strings whether or not they can go to The Matrix
function makeStrings(arr) {
    const result = arr.map(function(num){
        if(num.age >= 18){
            return num.name + " can go to The Matrix";
        } else {
            return num.name + " is under age!!";
        };
    });
    return result;
}
console.log(makeStrings([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));

//new array of names in h1 tags and ages in h2 tags
function readyToPutInTheDOM(arr){
    const result = arr.map(function(num){
        return "<h1>" + num.name + "</h1>" + "<h2>" + num.age + "</h2>";
    });
    return result;
};
console.log(readyToPutInTheDOM([
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]));

//total of all numbers in array
function total(arr){
    const result = arr.reduce(function(final, num){
        final += num;
        return final;
    });
    return result;
}
console.log(total([1, 2, 3]));

//array of numbers into long string of all numbers
function stringConcat(arr){
    const result = arr.reduce(function(prev, current, index){
        return index == 0 ? current : prev.toString() + current.toString();
        
    });
    return result;
};
console.log(stringConcat([1, 2, 3]));

//count how many people voted
function totalVotes(arr) {
    const result = arr.reduce(function(total, person){
        if(person.voted === true){
            total++
        };
        return total;
    }, 0);
    return "Total number of voters: " + result;
};
//another way to count how many people voted
function totalVotesAgain(arr) {
    const result = arr.filter(function(num){
        if(num.voted === true) {
            return num;
        };
    });
    return "Total number of voters again: " + result.length;
};
let voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters));
console.log(totalVotesAgain(voters));

//figure out how much it would cost to buy everything at once
function shoppingSpree(arr) {
    result = arr.reduce(function(total, itemCost){
        total.price += itemCost.price;
        return total;
    });
    return result.price;
};
let wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
];
console.log(shoppingSpree(wishlist));

//flatten arrays into single array
function flatten(arr) {
    const result = arr.reduce(function(flat, next){
        return flat.concat(next);
    });
    return result;
};
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

//array of potential voters, return object represent the results of the vote
function voterResults(arr) {
    const result = arr.reduce(function(final, voter){
        if(voter.age >= 18 && voter.age <= 25) {
            final.youth++
            if(voter.voted === true) {
                final.youngVotes++
            };
        } else if(voter.age >= 26 && voter.age <= 35) {
            final.mids++
            if(voter.voted === true) {
                final.midVotes++
            };
        } else if(voter.age >= 36 && voter.age <= 55) {
            final.olds++
            if(voter.voted === true) {
                final.oldVotes++
            };
        }
        return final;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
    return result;
};
console.log(voterResults(voters));

//sort array from smallest to largest
function leastToGreatest(arr) {
    result = arr.sort(function(a, b){
        return a - b;
    });
    return result;
};
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//sort array from largest to smallest
function greatestToLeast(arr) {
    result = arr.sort(function(a, b){
        return b - a;
    });
    return result;
};
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

//sort array shortest string to longest
function lengthSort(arr) {
    result = arr.sort(function(a, b){
        return a.length - b.length;
    });
    return result;
};
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//sort array alphabetically
function alphabetically(arr) {
    result = arr.sort(function(a, b){
        if(a < b) {
            return -1;
        } if(a > b) {
            return 1;
        };
    });
    return result;
};
console.log(alphabetically(["dog", "wolf", "by", "family", "eaten"]));

//sort objects in array by age
function byAge(arr){
    result = arr.sort(function(a, b){
        return a.age - b.age;
    });
    return result;
};
console.log(byAge([
    {name: "Quiet Samurai", age: 22},
    {name: "Arrogant Ambassador", age: 100},
    {name: "Misunderstood Observer", age: 2},
    {name: "Unlucky Swami", age: 77}
]));