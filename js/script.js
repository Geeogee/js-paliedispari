
// Una funzione per capire se la parola è
// palindroma
// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

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


function exercise1() {
    
    var word = prompt("Please, insert a word");
    var isPalindrome = palindromeWord(word);

    if(isPalindrome) {

        console.log("The word you choosed is a palindrome word!")
    } else {

        console.log("The word is not a palindrome word!")
    }
}

exercise1();
