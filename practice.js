/* Declared 3 types of Variable In JavaScript */
var numbers = [1, 2, 3, 4];
var string = ['Safayet', 'Hossain', "It's me"];
var boolean = [true, false];



/* A loop for 1-100 numbers */

// Using while loop
var numbers = 1;
while(numbers <= 100){
    // console.log(numbers);
    numbers++;
}

// Using for loop
for(let i = 1; i <= 100; i++){
    // console.log(i);
}




/* Find odd numbers 50-80 */
// Using while loop
var numbers = 51;
while(numbers <= 80){
    // console.log(numbers);
    numbers += 2;
}

// Using for loop
for(let i = 51; i <=80; i += 2){
    // console.log(i);
}


/* sum of 3 numbers by function */
// function getSum(sumOf3Numbers){
//     let sum = 0;
//     for (let i = 0; i < sumOf3Numbers.length; i++) {
//         const index = i;
//         const element = sumOf3Numbers[index];
//         sum = sum + element;
//         console.log(sum);
//     }
//     return sum;
// }
// const myNumbers = [10, 20, 30];
// getSum(myNumbers);


const myArray = ['Hello! This Safayet Hossain.'];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length % 2 === 0) {
        console.log('This is Safayet');
    }
    else{
        console.log('Good Bye');
    }
}
