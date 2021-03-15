// Function find a palindrome
// Versione 1
function palindromeWord(word) {

    var reverseWord = "";
    for (var i=word.length-1; i>=0; i--) {

        reverseWord += word[i];
    }

    if(word == reverseWord) {

        return true;
    } else {

        return false;
    }
}

// Versione 2

// function palindromeWord(word) {

//     var lng = word.length;
//     var palLng = Math.floor(lng / 2);

//     for (var i=0;i<palLng;i++) {

//         var finalI = lng - i - 1; 
//         var charI = word[i];
//         var charFinalI = word[finalI];

//         if (charI != charFinalI) {

//             return false;
//         }
//     }
//     return true;
// }

//Function check
function checkValues() {

}

// Function random number
function randomNumber(min,max) {
    var rndMin = min;
    var rndMax = max - min + 1;
    var rndNum = Math.floor(Math.random() * rndMax) + rndMin;

    return rndNum;
}

// Function sum 
function sum(value1, value2) {

    return value1 + value2;
}

// Function for even number 
function even(value) {
    if(value % 2 == 0) {
        return true
    } else {
        return false
    }
}




// Una funzione per capire se la parola è
// palindroma
function exercise1() {

    var word = prompt("Please, insert a word");
    var isPalindrome = palindromeWord(word);

    if(isPalindrome) {

        console.log("The word you choosed is a palindrome word!")
    } else {

        console.log("The word is not a palindrome word!")
    }
}


// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

function exercise2() {

    var userSide = prompt("Odds or evens?");
    var userNumber = parseInt(prompt("Choose a number between 1 and 5"));
    var errors = false;

    var sides = [
        "e",
        "o",
    ];

    if (!sides.includes(userSide)) {

        errors = true;
    }

    if (userNumber < 1 || userNumber > 5) {

        errors = true;
    }

    if (!errors) {

        var rndNum = randomNumber(1,5);
        var totalNum = sum(userNumber, rndNum);
        var oddEven = even(totalNum); 

        if (userSide == "e") {

            userEven = true;
            var evenString = "Even";
        } else {

            userEven = false;
            evenString = "Odd";
        }

        console.log("You choosed " + evenString);
        console.log("You choosed " + userNumber);
        console.log("Pc number " + rndNum);
        console.log("The sum is " + totalNum);

        if (userEven == oddEven) {

            console.log("You win!")
        } else {

            console.log("You lose!")
        }

    } else {

        console.log("One or more values are invalid. Please check and insert valid values!")
    }

}


// Versione 2
// function exercise2() {
//     var userPair = prompt('Dimmi pari o dispari');
//     var userValue = parseInt(prompt('Dimmi un valore'));
//     var rndValue = getRandomValue(1, 5);
//     var finalValue = userValue + rndValue;
//     var finalIsPair = finalValue % 2 == 0;
//     var finalIsOdd = finalValue % 2 > 0;
//     // if (userPair == 'pari' && finalIsPair) {
//     //     console.log('Hai vinto!!');
//     // } else if (userPair == 'dispari' && !finalIsPair) {
//     //     console.log('Hai vinto!!');
//     // } else {
//     //     console.log('Hai perso :-(');
//     // }
//     if ((userPair == 'pari' && finalIsPair)
//        || (userPair == 'dispari' && finalIsOdd)) {
//         console.log('Hai vinto!!');
//     } else  {
//         console.log('Hai perso :-(');
//     }
//     console.log(finalValue);
// }

// exercise1();
exercise2();
