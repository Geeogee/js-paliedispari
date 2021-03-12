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
    ]

    if (!sides.includes(userSide)) {
        errors = true;
    }

    if (userNumber < 1 || userNumber > 5) {
        errors = true;
    }

    if (!errors) {
        var rndNum = randomNumber(1,5);
        console.log(rndNum);
        var totalNum = sum(userNumber, rndNum);
        console.log(totalNum);
        var oddEven = even(totalNum); 
        console.log(oddEven);

        if (userSide == "e") {
            userEven = true;
        } else {
            userEven = false;
        }

        if (userEven == oddEven) {
            console.log("User wins!")
        } else {
            console.log("User loses!")
        }
        
    } else {
        console.log("Ops!")
    }

}

// exercise1();
exercise2();
