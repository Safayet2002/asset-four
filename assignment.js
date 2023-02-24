// Problem 1: Let’s play a mind game
function mindGame(number){

    const threeMultiply = 3;
    const tenAddition = 10;
    const twoDivided = 2;
    const fiveMinus = 5;

    const firstMath = number * threeMultiply;
    const secondMath = firstMath + tenAddition;
    const thirdMath = secondMath / twoDivided;
    const forthMath = thirdMath - fiveMinus;

    return forthMath;
} 

const resultOfProblemOne = mindGame(5);
console.log(resultOfProblemOne);



//Problem 1: Let’s play a mind game
// function mindGame(number){

//     const firstMath = number * 3;
//     const secondMath = firstMath + 10;
//     const thirdMath = secondMath / 2;
//     const forthMath = thirdMath - 5;

//     return forthMath;
// } 

// const resultOfProblemOne = mindGame(33);
// console.log(resultOfProblemOne);






// Problem 2: Finding even or odd
const myArray = ['Phero'];
function evenOdd(stringOfAnArray) {
    for (let i = 0; i < stringOfAnArray.length; i++) {
        if (stringOfAnArray[i].length % 2 === 0) {
            console.log('even');
        }
        else{
            console.log('odd');
        } 
    }
}

const resultOfProblemTwo = evenOdd(myArray);






// Problem 3: Is Less or Greater than seven
function isLGSeven(number) {
    
    const myNumber = number - 7;
    if (myNumber < 7) {
        console.log(myNumber);
    }
    else{
        if (myNumber >= 7) {
            console.log(number * 2);
        }
    }
    return myNumber;
}

const resultOfProblemThree = isLGSeven(6);





// Problem 4: Finding Bad data
const arrOne = [ 1,2,5 ];
function findingBadData(ourArray) {

    const badData = [];

    for (let i = 0; i < ourArray.length; i++) {
        const dataCheck = ourArray[i];
        if (dataCheck < 0) {
            badData.push(dataCheck);
        }
    }

    const badDataLength = badData.length;
    
    return badDataLength;
}

const resultOfProblemFour = findingBadData(arrOne);
console.log(resultOfProblemFour);





// Problem 5: Convert your gems into diamond
function gemsToDiamond(gemsOne, gemsTwo, gemsThree) {

    const gemsOnePower = gemsOne * 21;
    const gemsTwoPower = gemsTwo * 32;
    const gemsThreePower = gemsThree * 43;

    const totalGemsPower = gemsOnePower + gemsTwoPower + gemsThreePower;

    if (totalGemsPower > 1000 * 2)
    {console.log(totalGemsPower - 2000);}

    else{console.log(totalGemsPower);}

    return totalGemsPower;
}

const resultOfProblemFive = gemsToDiamond(1, 1, 1);