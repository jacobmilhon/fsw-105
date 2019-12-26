//Week 3 Pause and Practice: Building JS Functions DRY

//Accept two parameters and return sum
function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(2, 16));

//Accept three parameters return the largest
function largestNumberOfThree(a, b, c) {
    var numArray = [a, b, c];
    return Math.max.apply(Math, numArray);
}
console.log(largestNumberOfThree(4, 5, 6));

//Tell if number is even or odd
function evenOrOdd(a) {
    if(a % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOrOdd(37));
console.log(evenOrOdd(22));

//Accept string, if less than or equal to twenty char. return string + string. If string more than twenty char. return first half of string
function manipulateString(str) {
    if(str.length <= 20) {
        return str + str;
    } else if(str.length > 20) {
        return str.slice(0, str.length / 2);
    }
}
console.log(manipulateString("1234567890"));
console.log(manipulateString("123456789012345678912"))

//Accept number as parameter and return Fibonacci numbers and the sum
function fibonacci(n) {
    sequence = [1];
    a = 0;
    b = sequence[0];
    f = a + b
    sum = f;
    for(i = 2; i <= n; i++) {
        sequence.push(f);
        nextNumber = f + b;
        b = f;
        f = nextNumber;
        sum += b;
    }
    return "The Fibonacci sequence is: " + sequence.toString() + "\nThe sum equals: " + sum;
    
}
console.log(fibonacci(12));