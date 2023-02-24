// const safayet = 50;
// const hossain = 99;
// const shipu = 99;

// if( safayet >hossain && safayet > shipu){
//     console.log("Safayet Will get the Job.");
// }
// else if(hossain > safayet && hossain > shipu){
//     console.log("Hossain Will get the Job.");
// }
// else{
//     console.log("Shipu Will get the Job.");
// }


/* Max Number from Array */
// function maxInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if( element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137, 125, 350, 950, 1200]
// const tallest = maxInArray(heights);
// console.log("Tallest person is:", tallest);


/* Max Number from Array */
// function maxInArray(numbers){
//     let minNum = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if( element < minNum){
//             minNum = element;
//         }
//     }
//     return minNum;
// }

// const heights = [167, 190, 120, 165, 137, 125, 350, 950, 1200]
// const lowest = maxInArray(heights);
// console.log("Lowest person is:", lowest);


/* A function for Reverse String */
// function reverseString(text){
//     for(let i = 0; i < text.length; i++){
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);

/* ++++++++++++++++++++++++++++++++ */
// function reverseString(text){
//     for(let i = text.length - 1; i >= 0; i--){
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);

// function reverseWords(str){
//     const words = str.split(' ');
//     const result = [];
//     for(let i = words.length -1; i>=0; i--){
//         const element = words[i];
//         result.push(element);
//     }
//     console.log(result);
//     const reversed = result.join(' ');
//     console.log(reversed);
// }
// const myString = 'I am a good boy';
// reverseWords(myString);


/* Fibo
    const fibo = [0, 1, 1, 2, 3, 5, 8....]
*/

const fibo = [0, 1];
for(let i = 2; i <= 25; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
// console.log(fibo);


// Math.random()*100;
function add(a, b){
    return a + b;
  }
//   console.log(add("adam" + "eve"))





/* Array + Array */
// Using concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = arr1.concat(arr2);
// console.log(newArray);


/* Slice An Array */
const array1 = [12, 22, 34, 45, 49, 62, 29, 69, 87];

const partial = array1.slice(2,6);
// console.log(partial);
// console.log(array1);



/* Splice An Array */
const array2 = [12, 22, 34, 45, 49, 62, 29, 69, 87];

const partial2 = array2.splice(0, 5, 9, 99, 999, 9999, 99999);
// console.log(partial2);
// console.log(array2);


/* Remove Duplicate Names of An Array */
const names = ['safayet', 'fokhrul', 'rasel', 'rishad', 'shipu', 'rasel', 'fokhrul', 'rishad', 'safayet', 'shipu'];

function removeDuplication(names){
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}

const uniqueNames = removeDuplication(names);
// console.log(uniqueNames);




/* Showing numbers & replace with foo, bar & foobar */
for (let i = 1; i <=50; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        // console.log('FooBar');
    }
    else if(i % 3 === 0){
        // console.log('foo');
    }
    else if(i % 5 === 0){
        // console.log('bar');
    }
    else{
        // console.log(i);
    }
}





/* WoodCalculate */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 10;
    const perTableWood = 25;
    const perBedWood = 105;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(5, 3, 2);
// console.log('I need total Wood:', totalWood);



/* Find the cheapest Phone */
// const phones = [
//     {name:'Samsung', camera: 12, Storage:'32gb', price:'32000', color:'Silver'},
//     {name:'Vivo', camera: 12, Storage:'32gb', price:'42000', color:'Silver'},
//     {name:'Walton', camera: 12, Storage:'32gb', price:'52000', color:'Silver'},
//     {name:'Iphone', camera: 12, Storage:'32gb', price:'62000', color:'Silver'},
//     {name:'Nokia', camera: 12, Storage:'32gb', price:'2000', color:'Silver'},
// ];

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const myCheapest = cheapestPhone(phones);
// console.log(myCheapest);





/* Find the highestCamera Phone */
// const cameras = [
//     {name:'Samsung', camera: 12, Storage:'32gb', price:'32000', color:'Silver'},
//     {name:'Vivo', camera: 102, Storage:'32gb', price:'42000', color:'Silver'},
//     {name:'Walton', camera: 112, Storage:'32gb', price:'52000', color:'Silver'},
//     {name:'Iphone', camera: 132, Storage:'32gb', price:'62000', color:'Silver'},
//     {name:'Nokia', camera: 120, Storage:'32gb', price:'2000', color:'Silver'},
// ];

// function highCamera(cameras){
//     let highCam = cameras[0];
//     for (let i = 0; i < cameras.length; i++) {
//         const cameraXam = cameras[i];
//         if (cameraXam.camera > highCam.camera){
//             highCam = cameraXam;
//         }
//     }
//     return highCam;
// }

// const myHigh = highCamera(cameras);
// console.log(myHigh);








/* shoppingCart */
// const shoppingCart = [
//     {name:'shoe', price: 5200},
//     {name:'shirt', price: 2550},
//     {name:'pant', price: 4500},
//     {name:'belt', price: 650}
// ]
// function totalCost(products){
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }

// const payCost = totalCost(shoppingCart);
// console.log(payCost);




/* shoppingCart With Quantity */
// const shoppingCart = [
//     {name:'shoe', price: 5200, quantity: 2},
//     {name:'shirt', price: 2550, quantity: 2},
//     {name:'pant', price: 4500, quantity: 2},
//     {name:'belt', price: 650, quantity: 2}
// ]
// function totalCost(products){
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         const totalProduct = product.price * product.quantity;
//         sum = sum + totalProduct;
//     }
//     return sum;
// }

// const payCost = totalCost(shoppingCart);
// console.log(payCost);






/* ticket Price Functions */
// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const third100Rate = 70;
//     if(ticketQuantity <= 100){
//         const price100 = ticketQuantity * first100Rate;
//         return price100;
//     }
//     else if(ticketQuantity <= 200){
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity -100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
//     } 
//     else{
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100* second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * third100Rate;
//         const totalTicketPrice = first100Price + second100Price + restTicketPrice;
//         return totalTicketPrice;
//     }
// }

// const price = ticketPrice(300);
// console.log(price);











/* error js */
// function add(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return "Please enter a number, Sir"
//     }
//     return num1 + num2;
// }

// const result = add(12, 45);
// console.log(result);





let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
    console.log(sum);
    
}