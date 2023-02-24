const String = ['Safayet', 'Hossain', 'Shipu'];
const Boolean = [true, false];
const Number = [01, 05, 08];



let changeAble1 = [12, 22, 32, 42];
changeAble1[3] = 52;
// console.log(changeAble1);

const changeAble2 = ['Safayet', 'Hossain', 'Shipu'];
changeAble2[2] = 'Fokhrul';
// console.log(changeAble2);


// const safayetPoint = 10;
// const fokhrulPoint = 10;
// const sumFirst = fokhrulPoint % safayetPoint;
// console.log(sumFirst);
// if (safayetPoint > fokhrulPoint) {
//     console.log('Safayet Is GOOD Boy');
// }
// else if( safayetPoint === fokhrulPoint){
//     console.log('Both are good boy');
// }
// else if(safayetPoint < fokhrulPoint){
//     console.log('Fokhrul Is good Boy');
// }
// else{
//     console.log('Ami Kisu Jani Nah! Vai');
// }



// let i = 7;
// while (i <= 19) {
//     console.log(i);
//     i +=2;
// }


// const arrayOne = [10, 12, 20, 25, 32, 40, 42, 48, 50];
// console.log(arrayOne.length);
// arrayOne[4] = 92;
// const addTwoNumber = arrayOne.push(102, 105);
// const removeOneNumber = arrayOne.pop();
// console.log(arrayOne);



// const arrayNumber = [10, 100, 25, 85, 60, 45, 105, 300, 54, 65, 75, 90];
// function beNumber(numbers) {
// const upNumber =[];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     // console.log(number);
//     if (number >= 80) {
//         upNumber.push(number);
//     }
//     }
//     return upNumber;
// }
// const myNumber = beNumber(arrayNumber);
// console.log(myNumber);


// function threeNumber(gunon) {
//     const numberOne = 50;
//     const numberTwo = 1;
//     const numberThree = 1;

//     const totalThreeNumber = numberOne * numberTwo * numberThree;
//     return totalThreeNumber;
// }

// const totalThreeNumber = threeNumber(1, 100, 1);
// console.log(totalThreeNumber);



// const iLike = { name: 'phone', camera: 120, price: 12000 };
// iLike.name = 'Iphone';
// console.log(iLike);

/* feet to inch covert */
// function feetToInch(feets) {
//     const inch = feets * 12;
//     return inch;
// }
// const myFeet = feetToInch(12);
// console.log(myFeet);


/* centimeter to Meter covert */
// function centimeterToMeter(centimeters) {
//     const meter = centimeters / 100;
//     return meter;
// }
// const myCentimeter = centimeterToMeter(500);
// console.log(myCentimeter);


/* Find the largest string of an array */
// const friends = ['safayet', 'hossainss', 'shipushipu', 'fokhrul', 'rishad', 'rasel'];
// function bestFriend(largeName) {
//     let largestName = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length > largestName.length) {
//             largestName = friends[i];
//         }
//     }
//     return largestName;
// }
// const myBestFriend = bestFriend(friends);
// console.log(myBestFriend);


// const friends = ['amir', 'hossain', 'bablu', 'bulbul', 'karim'];
// function findBestFriend(friends) {
// let bestFriend = friends[0];
// for (let i = 0; i < friends.length; i++) {
// if (friends[i].length > bestFriend.length) {
// bestFriend = friends[i];
// }
// }
// return bestFriend;
// }
// const betsFriend = findBestFriend(friends);
// console.log(betsFriend);




/* Find the positive numbers */
// const arrayNumbers = [10, 12, 20, 25, 32, 35, -42, 48, 60];
// function positiveNumbers(numbers) {
//     const newArray = [];
//     for (let i = 0; i < arrayNumbers.length; i++) {
//         const ourNumbers = arrayNumbers[i];
//         if (ourNumbers >= 0) {
//             newArray.push(ourNumbers);
//         }
//         else if (ourNumbers < 0){
//             break;
//         }
//     }
//     return newArray;
// }

// const myResult = positiveNumbers(arrayNumbers);
// console.log(myResult);






/* Make function for paperRequirements */
// function paperRequirements(firstBook, secondBook, thirdBook) {
//     const printFirstBook = 100;
//     const printSecondBook = 200;
//     const printThirdBook = 300;

//     const forBookOne = firstBook * printFirstBook;
//     const forBookTwo = secondBook * printSecondBook;
//     const forBookThree = thirdBook * printThirdBook;

//     const totalPage = forBookOne + forBookTwo + forBookThree;
//     return totalPage;
// }
// const totalBookPage = paperRequirements(1, 2, 3);
// console.log(totalBookPage);




/* Make function for paperRequirements */
// function paperRequirements(firstBook, secondBook, thirdBook) {

//     // const printFirstBook = 100;
//     // const printSecondBook = 200;
//     // const printThirdBook = 300;

//     const forBookOne = firstBook * 100;
//     const forBookTwo = secondBook * 200;
//     const forBookThree = thirdBook * 300;

//     const totalPage = forBookOne + forBookTwo + forBookThree;
//     return totalPage;
// }
// const totalBookPage = paperRequirements(1, 2, 3);
// console.log(totalBookPage);