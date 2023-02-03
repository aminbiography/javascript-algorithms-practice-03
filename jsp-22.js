// 22-1 String comparison using toLowerCase toUpperCase/////////////////////////

// const userName = 'balckPink';
// const userInput = 'blackPinK';

// if(userName === userInput){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user')
// }

// terminal-
// invalid user

// [because blackPink/blackPinK]



// const userName = 'balckPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// if(userName === userInput){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user')
// }



// terminal-
// balckpink
// invalid user
// [althow both string change in to lower case but invalid user]



// const userName = 'blackPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// if(userName.toLowerCase() === userInput.toLowerCase()){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user');
// }


// terminal-
// blackpink
// valid user



// const userName = 'blackPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());
// if(userName.toLowerCase() === userInput.toLowerCase()){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user');
// }


// terminal-
// blackpink
// BLACKPINK 
// valid user



// const userName = 'blackPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());
// console.log(userName.toLocaleLowerCase());
// if(userName.toLowerCase() === userInput.toLowerCase()){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user');
// }


// blackpink
// BLACKPINK
// blackpink
// valid user



// 22-2 Apply Search includes, indexOf, startswith, endswith/////////////////////////////


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const doesExist = lyrics.includes('bird');
// console.log(doesExist);

// terminal-
// true


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const doesExist = lyrics.includes('birds');
// console.log(doesExist);

// terminal-
// false


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const doesExist = lyrics.includes('Bird');
// console.log(doesExist);

// terminal-
// false



// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'bird'
// const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
// console.log(doesExist);

// terminal-
// true


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'bird'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);

// terminal-
// true


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);


// terminal-
// true




// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// terminal-
// true
// true



// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(lyrics.indexOf('jam'));

// terminal-
// 21


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(lyrics.indexOf('is'));

// terminal-
// 9




// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(lyrics.indexOf('cow'));

// terminal-
// -1


// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(lyrics.indexOf('the'));


// terminal-
// 0




// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyrics.indexOf('the'));

// if(lyrics.indexOf('cow') !== -1){
//     console.log('exists inside the string')
// }
// else{
//     console.log('cannot find it');
// }


// terminal-
// 0
// cannot find it




// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyrics.indexOf('the'));

// if(lyrics.indexOf('cow') !== -1){
//     console.log('exists inside the string')
// }
// else{
//     console.log('cannot find it');
// }

// console.log(lyrics.startsWith('jam'));


// terminal-
// 0
// cannot find it
// false



// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyrics.indexOf('the'));

// if(lyrics.indexOf('cow') !== -1){
//     console.log('exists inside the string')
// }
// else{
//     console.log('cannot find it');
// }

// console.log(lyrics.endsWith('jam'));


// terminal-
// 0
// cannot find it
// false




// const lyrics = 'the bird is singing, jam is coding i am watching'

// const searchString = 'BiRd'
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(lyrics.indexOf('the'));

// if(lyrics.indexOf('cow') !== -1){
//     console.log('exists inside the string')
// }
// else{
//     console.log('cannot find it');
// }

// console.log(lyrics.endsWith('watching'));


// terminal-
// 0
// cannot find it
// true




// 22-3 How to split, slice, substr, substring, concat, join///////////////////////


// const lyrics = 'the bird is singing, jam is coding i am watching'
// console.log(lyrics);

// terminal-
// the bird is singing, jam is coding i am watching


// const lyrics = 'the bird is singing, jam is coding i am watching'
// const parts = lyrics.split(' ')
// console.log(parts);

// terminal-
// [
//     'the',    'bird',    
//     'is',     'singing,',
//     'jam',    'is',      
//     'coding', 'i',       
//     'am',     'watching' 
//   ]




// const lyrics = 'the bird is singing, jam is coding i am watching'
// const sentences = lyrics.split(',')

// console.log(sentences);

// terminal-
// [ 'the bird is singing', ' jam is coding i am watching' ]




// const lyrics = 'the bird is singing. jam is coding. i am watching'
// const sentences = lyrics.split('.')

// console.log(sentences);


// terminal-
// [ 'the bird is singing', ' jam is coding', ' i am watching' ]



// const lyrics = 'the bird is singing. jam is coding. i am watching'
// const charecters = lyrics.split('')

// console.log(charecters);

// terminal-

// [
//     't', 'h', 'e', ' ', 'b', 'i', 'r', 'd',
//     ' ', 'i', 's', ' ', 's', 'i', 'n', 'g',
//     'i', 'n', 'g', '.', ' ', 'j', 'a', 'm',
//     ' ', 'i', 's', ' ', 'c', 'o', 'd', 'i',
//     'n', 'g', '.', ' ', 'i', ' ', 'a', 'm',
//     ' ', 'w', 'a', 't', 'c', 'h', 'i', 'n',
//     'g'
//   ]




// const lyrics = 'the bird is singing. jam is coding. i am watching'
// const partial = lyrics.slice(21, 35);

// console.log(partial);

// terminal-
// jam is coding.


// const lyrics = 'the bird is singing. jam is coding. i am watching'
// const partial = lyrics.substring(21, 35);

// console.log(partial);

// terminal-
// jam is coding.


// const lines = [
//                 'the bird is singing', 
//                 'jam is coding', 
//                 'i am watching'
//             ];
// const sentence = lines.join('.')
// console.log(sentence)

// terminal-
// the bird is singing.jam is coding.i am watching





// const lines = [
//     'the bird is singing', 
//     'jam is coding', 
//     'i am watching'
// ];
// const sentence = lines.join(':')
// console.log(sentence)


// terminal-
// the bird is singing:jam is coding:i am watching



// const lines = [
//     'The bird is singing', 
//     'Jam is coding', 
//     'I am watching.'
// ];
// const sentence = lines.join('. ')
// console.log(sentence)


// terminal-
// The bird is singing. Jam is coding. I am watching.



// 22-4 Math, abs, pow, round, ceil, floor, and random number//////////////////////////


// const result = Math.pow(3, 8);
// console.log(result);


// terminal-
// 6561 
// this result from js autometically 


// const num1 = 25;
// const num2 = 45;

// const gap = num1 - num2;

// if(gap < 5){
//     console.log('accepted')
// }
// else{
//     console.log('not accepted')
// }

// terminal-
// accepted
// [because of 25-45=-20 that means -20 < 5;
// so in that case we should write greater one at first] 




// const num1 = 75;
// const num2 = 45;

// const gap = num1 - num2;

// if(gap < 5){
//     console.log('accepted')
// }
// else{
//     console.log('not accepted')
// }


// terminal-
// not accepted





// const num1 = 25;
// const num2 = 45;

// const gap = Math.abs(num1 - num2);

// if(gap < 5){
//     console.log('accepted')
// }
// else{
//     console.log('not accepted')
// }

// terminal-
// not accepted



// const number = 2.4598;
// const fullNumber = Math.round(number);
// console.log(fullNumber);

// terminal-
// 2



// const number = 2.5198;
// const fullNumber = Math.round(number);
// console.log(fullNumber);

// terminal-
// 3


// const number =2.451245;
// const fullNumber = Math.round(number);
// const result = Math.ceil(2.00001);
// console.log(result);


// terminal-
// 3



// const number =2.451245;
// const fullNumber = Math.round(number);
// const result = Math.floor(2.00001);
// console.log(result);


// terminal-
// 2



// console.log(Math.random());


// terminal-
// 0.628465440539105
// 0.2528218926978665
// 0.15451788537223865
// [terminal will show different time different value]



// const random = Math.random()*100;
// console.log(random);


// terminal-
// 45.47941508347741
// 81.34559121207732
// 33.601688131035345


// const random = Math.round(Math.random()*100);
// console.log(random);

// terminal-
// 1
// 67
// 79



// for(let i= 0; i < 10; i++){
//     const random = Math.round(Math.random()*6);
//     console.log(random);
// }



// terminal-
// 1
// 3
// 5
// 2
// 0
// 6
// 3
// 5
// 6
// 1




// 22-5 Swap variable, swap without temp, destructing------------------------------


// let first = 5;
// let second = 7;
// console.log(first, second);


// terminal-
// 5 7


// let first = 5;
// let second = 7;
// console.log(first, second);
// first = second
// second = first
// console.log(first, second);


// terminal-
// 5 7
// 7 7
// [wrong approch]



// let first = 5;
// let second = 7;
// console.log(first, second);
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// terminal-
// 5 7
// 7 5
// [approch first]



// let first = 5;
// let second = 7;
// [first, second] = [second, first];
// console.log(first, second);

// terminal-
// 7 5
// [this is right approch]



// 22-6 Can you find out who will get the delicious cake?--------------------------------



// const jam = 88;
// const kari = 75;
// if(jam > kari){
//     console.log('jam will lead');
// }
// else{
//     console.log('kari will lead');
// }

// terminal-
// jam will lead



// const jam = 75;
// const kari = 88;
// if(jam > kari){
//     console.log('jam will lead');
// }
// else{
//     console.log('kari will lead');
// }


// terminal-
// kari will lead



// const jam = 75;
// const kari = 88;
// const baby = 90;
// if(baby > kari && kari > jam){
//     console.log('baby will lead');
// }
// else{
//     console.log('kari will lead');
// }


// terminal-
// baby will lead




// 22-7 Who is the tallest? Find the max number in an array--------------------------------



// function maxInArray(numbers){
//     console.log('array inside the array', numbers);
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);

// terminal-
// array inside the array [ 167, 190, 120, 165, 137 ]
// tallest person is: undefined



// function maxInArray(numbers){
//     for(let i = 0; i< numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(element);
//     }
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);



// terminal-
// 167
// 190
// 120
// 165
// 137
// tallest person is: undefined


//     function maxInArray(numbers){
//         for(let i = 0; i< numbers.length; i++){
//             let largest = numbers[0];
//             const index = i;
//             const element = numbers[index];
//             console.log(element);{
//                 largest = element;
//             }
//             return largest;
//         }
//     }
    
//     const heights = [167, 190, 120, 165, 137];
//     const tallest = maxInArray(heights);
//     console.log('tallest person is:', tallest);
    
    
//     terminal-
//     167
//     tallest person is: 167 




// function maxInArray(numbers){
// let largest = numbers[0];
// for(let i = 0; i< numbers.length; i++){
// let largest = numbers[0];
// const index = i;
// const element = numbers[index];
// if(element > largest){
// largest = element;
// }
// }
// return largest;
// }  
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);


// terminal-
// tallest person is: 167




// 22-8 Reverse a string and Reverse words in a sentence-------------------------------



// function reverseString(text){
//     for(let i = 0; i< text.length; i++){
//         const element = text[i];
//         console.log(element);
//     }
// }
// const myString = 'Jam is a good man';
// const reversed = reverseString(myString);


// terminal-
// J
// a
// m
 
// i
// s

// a

// g
// o
// o
// d

// m
// a
// n




// function reverseString(text){
//     for(let i = text.length; i>= 0; i--){
//         const element = text[i];
//         console.log(element);
//     } }
// const myString = 'Jam is a good man';
// const reversed = reverseString(myString);


// terminal-
// undefined
// n
// a
// m

// d
// o
// o
// g

// a

// s
// i

// m
// a
// J



// function reverseString(text){
//     for(let i = text.length-1; i>= 0; i--){
//         const element = text[i];
//         console.log(element);
//     } }
// const myString = 'Jam is a good man';
// const reversed = reverseString(myString);


// terminal-
// n
// a
// m
 
// d
// o
// o
// g
 
// a
 
// s
// i
 
// m
// a
// J



// function reverseString(text){
//     let reversed = '';
//     for(let i = text.length-1; i>= 0; i--){
//         const element = text[i];
//         reversed = reversed + element;
//         console.log(element, reversed); 
//     } 
//     return reversed;
// }
// const myString = 'Jam is a good man';
// const reversed = reverseString(myString);
// console.log('reversed output', reversed)



// terminal-
// n n
// a na
// m nam
//   nam 
// d nam d        
// o nam do
// o nam doo
// g nam doog
//   nam doog
// a nam doog a
//   nam doog a
// s nam doog a s
// i nam doog a si
//   nam doog a si
// m nam doog a si m
// a nam doog a si ma
// J nam doog a si maJ



// function reverseWords(str){
//     const words = str.split(' ');
//     console.log(words);
// }

// const myString = 'jam is a good boy';
// reverseWords(myString);


// terminal-
// [ 'jam', 'is', 'a', 'good', 'boy' ]


// function reverseWords(str){
//     const words = str.split(' ');
//     const result = [];
//     for(let i = words.length - 1; i>=0; i--){
//     const element = words[i];
//     result.push(element);
// }
// console.log(result);
// }

// const myString = 'jam is a good man';
// reverseWords(myString);


// terminal-
// [ 'man', 'good', 'a', 'is', 'jam' ]




// 22-9 (advanced) Create a Fibonacci Series using a for loop--------------------------


// Fibonacci number:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 


// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

// fibo[3] = fibo[2] = fibo[1]
// fibo[4] = fibo[3] = fibo[2]
// fibo[5] = fibo[4] = fibo[3]
// fibo[5] = fibo[4] = fibo[3]
// fibo[50] = fibo[49] = fibo[48]
// fibo[487] = fibo[486] = fibo[485]
// fibo[n] = fibo[n-1] = fibo[n-2]
// fibo[i] = fibo[i-1] = fibo[i-2]

// Fibonacci number:


// const fibo = [0, 1];
// for(let i =2; i <= 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


// terminal-
// [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34,
//    55
//  ]




// 22-10 Module Summary and where you need to focus------------------------------


// recap


