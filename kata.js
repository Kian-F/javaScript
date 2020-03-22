// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function(str) {
  return this.split(" ")
    .map(function(item) {
      return item.replace(item[0], item[0].toUpperCase());
    })
    .join(" ");
};

///////////////////////////////////////////////////////////////////////////////

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter(letter => {
      console.log(letter);
      let index = alphabet.indexOf(letter);
      console.log(index);
      return index > -1;
    })
    .map(letter => alphabet.indexOf(letter) + 1)
    .join(" ");
}
alphabetPosition("kk kjkj mka kkakmagh");

//// Second solution
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaNum = [];

  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let indx = alphabet.indexOf(text[i]);
    if (indx === -1) {
      continue;
    } else {
      alphaNum.push(indx + 1);
    }
  }

  return alphaNum.join(" ");
}
alphabetPosition("kk kjkj mka kkakmagh");



///////////////////////////////////////////////////////////

// Calculate average


function find_average(array) {
    var total = 0;
    var avg=0;
    for(var i=0; i< array.length; i++){
      var len = array.length
      console.log(len)
      total += array[i];
      console.log(total)
    
    }
    
    return avg = total/len
  }

  ///Second solution

  function find_average(array) {

    let sum = array.reduce(function(acc, cur){
        acc + cur
    },0)
     const avg = sum/array.length
     return avg
    
  }



  /////////////////////////////////////////////////