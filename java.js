// const ages = [20, 40, 10, 11, 50, 100, 9, 23, 51, 1, 25, 15, 18, 22, 27, 7, 8]

//loops

// const ages21 = []

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         ages21.push(ages[i]);
//     }
// }
// console.log(ages21);

//FOR EACH LOOP

// ages.forEach(function (n) {
//     if (n >= 21) {
//         ages21.push(n)
//     }
// });
// console.log(ages21);


//CALLBACK FUNTION EXAMPLE

// function sum(num1, num2) {
//     return num1 + num2
// }

// function multiplySums(x, y, callback) {
//     return callback(x, y) * callback(2, 3);
// }


// console.log(multiplySums(3, 4, sum));


//CLASSES 

// const karen = {
//     firstName: "Karen",
//     lastName: "Perfect",
//     age: "21"
// }

// const ali = {
//     firstName: "ali",
//     lastName: "jandro",
//     age: "26"
// }
// const mat = {
//     firstName: "mat",
//     lastName: "dress",
//     age: "30"
// }

//DEFAULT METHOD THAT THE CLASS MUST HAVE 
// class User {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName
//         this.age = age;
//     }



//     changeLastName() {
//         this.lastName = 'Uzimaki';
//     }
// }
// const karen = new User("Karen", "Perfect");
// console.log(karen);

//PRINT ALL EVEN NUMBERS FROM 0-10

// for (let i = 0; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




//CALCUALTE THE SUM OF NUMBERS WITHIN AN ARRAY!!!!!!!!!!!!!!!!!!!

// const arr = [2, 4, 6, 7, 4, 5, 7, 5, 4]
// const sum = arr.reduce((a, b) => a + b, 0)
// console.log(sum);


// const arr = ['a', 'b', 'c', 'd', 'e', 'f']
// const reverseArr = arr.reverse()
// console.log(reverseArr);

//CREATE A FUNCTION THAT REVERSES AN ARRAY!!!!!!!!!!!!!!!!!
// const arr = ['evelyn', 'Abdiel', 'Leilai', 'Darian']
// const reverse = arr.reverse()
// console.log(reverse);


//SORT AN AARAY FROM LOWEST TO HIGHEST!!!!!!!!!!!!!!!!!!!!!!!

// const arr = [44, 3, 0, 213, 5, 45]
// const ascendingArr = arr.sort((a, b) => a - b)
// console.log(ascendingArr);


//CREATE A FUNCTION THAT FILTERS OUT NEGATIVE NUMBERS!!!!!!!!!!!!!!!!

// const arr = [4, 5, -6, 3, 6, -7, 44, 3, -434, 5]


// function no_negative_number(arr) {
//     const new_arr = arr.filter(v => v > 0)
//     console.log(new_arr);
// }
// no_negative_number(arr)

//ANOTHER WAY TO FILTER OUT NEGATIVE NUMBERS IN ARRAY!!!!!!!!!!!!!!!!!!!!!!!
// var array = [4, 5, -6, 3, 6, -7, 44, 3, -434, 5]
// array = array.filter(function (x) {
//     return x > -1
// });
// console.log(array);


// var array = [3, 4, 15, -3, -123, -9, -3, 12, 34, 54, -54, 6, -6]
// array = array.filter(function (x) {
//     return x > -1
// })
// console.log(array);




// const arr = [2, 3, 4, 5]
// const sum = arr.reduce((a, b) => a + b)
// console.log(sum);


//SORT AN ARRAY FROM LOWEEST TO HIGHEST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const arr = [1234545, 3, 2, 1, 7, 665, 23434]
// const ascend = arr.sort((a, b) => a - b)
// console.log(ascend);

//REVERSED SEQUENCE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const reverseSeq = n => {
//     let arr = [];
//     for (let i = n; i > 0; i--) {
//         arr.push(i);
//     } return arr;
// }


// const numbers = [2, 3, 4, 5, 6,]
// const sum = numbers.reduce((a, b) => a + b)
// console.log(sum);


// const arr = [4, 5, -6, 3, 6, -7, 44, 3, -434, 5]

// noNeg(arr)

// function noNeg(arr) {
//     const newArr = arr.filter(v => v > 0)
//     console.log(newArr);
// }

//REMOVE SPACES FOUND IN A STRING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const str = 'vish     al ji'
// const noSpace = str.replace(/\s+/g, '');
// console.log(noSpace);


//RETURN A BOOLEAN IF A NUMBER IS DIVISBLE BY 10!!!!!!!!!!!!!!!!!!


// function divisible_by_ten(num) {
//     console.log(num);
//     if (num % 10 === 0) {
//         return true
//     }
//     return false
// }

// console.log(num);


//PRINT ALL NUMBERS 1-10 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// for (let i = 0; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//CALUCALTE SUM OF ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = [5, 7, 63, 1]
// const sum = arr.reduce((a, b) => a + b)
// console.log(sum);

//FUNCTION THAT REVERSES AN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = ['eve', 'lyn', 'dog']
// const reverse = arr.reverse();
// console.log(reverse);

//SORT ARRAY FROM LOW TO HIGH !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = [6, 5, -3, 675, 2, 1, 454]
// const ascend = arr.sort((a, b) => a - b)
// console.log(ascend);

//FIND ONLY NEG NUMBERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const arr = [-5, 4, -3, 23]
// const neg = arr.filter(v => v > 0)
// console.log(neg);

//REMOVE SPACES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const str = 'eve ajfjd'
// const newStr = str.replace(/\s+/g, '')
// console.log(newStr);

//FIND A FUNCTION TO REVERESE A NUMBER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function reverseNum(num) {
//     var reverse = 0;
//     while (num != 0) {
//         reverse
//     }
// }

// REVERSE An ARRAY WITH FOR LOOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let arr = [5, 4, 32, 1]
// let newArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);


// let arr = [5, 32, 5, 1, 5, 6, 9, 0, 4234321]
// let newArr = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);

//FIND THE SMALLEST AND BIGGES NUMBERS IN AN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var arr = [5, 1, 9, 5, 7];
// var smallest = arr[0];

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// console.log(smallest);

// var arr = [70, 65, 3, 21, 58, 93, 12]
// var max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i]
//     }
// }

// console.log(max);

//CREATE A FUNCTION THAT TAKES IN AN ARRAY OF NAMES AND HAS TWO PARAMS AND CHECKS TO SEE IF NAME APPEARS IN THE ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function findName(arr, b) {
//     let i = 0
//     while (b !== arr[i]) {
//         i++
//     }
//     return i
// }
// var arr = ['a', 'b', 'c']
// var b = 'b'

// findName(arr, b);

// function findName(arr, name) {
//     let i = 0
//     while (name !== arr[i]) {
//         i++
//     }
//     return i
// }

// var arr = ['eve', 'eve', 'abdiel', 'jack']

// console.log(findName(arr, 'abdiel'));

//FIND HIGHEST NUMBER IN AN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// var arr = [70, 65, 3, 21, 58, 93, 12]
// var max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i]
//     }
// }

// console.log(max);
// var arr = [3, 4, 6, 0, 9]
// var max = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// var arr = [4, 5, 63, 1,]
// var max = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// function stringToArray(string) {
//     return string.split(' ');
// }

// console.log(stringToArray('evelyn'))

//CONVERT A STRING TO AN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function convertString(string) {
//     return string.split(' ')
// }
// console.log(convertString('it about to rain.'));



// Take an array and remove every second element from the array.
//  Always keep the first element and start removing with the next element.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function removeEveryOther(arr) {
//     return arr.filter(function (elem, index) {
//         return index % 2 === 0;
//     });
// }

// function removeEveryOther(arr) {
//     return arr.filter(function (ele, index) {
//         return index % 2 === 0;
//     })
// }

// console.log(removeEveryOther(['eve', 'lol', 6,]));

// function removeEveryOther(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(removeEveryOther(['eve', 'lol', 6,]));

// function removeEveryOther(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i]);
//     }
//     return newArr
// }

// console.log(removeEveryOther(['eve', 'lyn', 'cat']))

//WRITE A FUNCTION THAT RETURNS A STRING WHERE FIRSTNAME IS SWAPPED WITH LAST NAME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function nameSuffle(str) {
//     return str.split(' ').reverse().join(' ')
// }

// console.log(nameSuffle('evelyn langarica'))
// Filter out Strings from an Array


// Create a function that takes an array of non-negative 
// integers and strings and return a new array without the strings.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function filterArray(arr) {
//     return arr.filter(x => typeof x === "number");
// }

// function filterArray(arr){
//     return arr.filter(x => typeof x === "number")
// }

// const ages = [20, 40, 10, 11, 50, 100, 9, 23, 51, 1, 25, 15, 18, 22, 27, 7, 8]

// const ages21 = []

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         ages21.push(ages[i]);
//     }
// }

// const ages21 = []
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         ages21.push(ages[i]);
//     }
// }

// Solve using For Loop and Filter How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length


//RETURN A BOOLEAN IF A NUMBER IS DIVISIBLE BY 10!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function divisible_by_ten(num){
//     console.log(num);
//     if(num % 10 === 0){
//         return true
//     }
//     return false
// }


//remove every second element from the array.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function removeSec(arr) {
//     var newArr = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }


//GIVEN A STRING RETURN A STRING WHERE CHARACTER IS REPEATED AT LEASAT ONCE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function doubleChar(str) {
//     var word = '';
//     for (var i = 0; i < str.length; i++) {
//         word = word + str[i] + str[i];
//     };
//     return word;
// };

//Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return 'Even';

//     }
//     else {
//         return 'odd'
//     }
// }
// console.log(evenOrOdd(9))



//CREATE A FUNCTION TO COUNT HOW MANY VOWELS IN A STRING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function vowels(str) {
//     let vs = str.match(/[aeiou]/gi)
//     return `Total vowels are ${vs.length}`
// }
// console.log(vowels('evelyn'))
