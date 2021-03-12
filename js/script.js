// Function find a palindrome
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
        "o"
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

// exercise1();
exercise2();
