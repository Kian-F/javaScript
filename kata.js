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
//   Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n){
    debugger
    if (n%2 === 0 || n < 0) return null
    let diamCountArr = [];
    diamCountArr.push(n)
    
    for (var i = n-2; i >= 1; i = i - 2) {
      diamCountArr.unshift(i)
      
      diamCountArr.push(i)
      
    }
    for (var i = 0; i < diamCountArr.length; i++) {
      let currentIndexVal = diamCountArr[i]
      
      diamCountArr[i] = ""
      for (var j = 0; j < currentIndexVal; j++) {
       
        diamCountArr[i] += "*"
    
      }
    }
    for (var k = 0; k < diamCountArr.length; k++) {
        if (diamCountArr[k].length !== n) {
          let spaces = (n - diamCountArr[k].length)/2
          for (var i = 1; i <= spaces; i++) {
            diamCountArr[k] = " " + diamCountArr[k]
          }
        }
      }
    return diamCountArr.join('\n')+'\n'
  }

  // Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n)
{
  if(n === 0){
    return '0.00'
  }
 var denominator = 1;
 var sum = 0; 
 for(let i= 1; i<=n; i++){
   sum += (1/denominator)
   console.log('sum: '+sum)
   denominator +=3
   console.log('denominator'+ denominator)
 }
return sum.toFixed(2) 
}
SeriesSum(10)

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
 }

 function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }

function count (string) {  
    return string.split('').reduce((acc, ch)=>{
      acc[ch] = (acc[ch] || 0) + 1
      return acc;
    },{})
   }


   function count(string){
    return string.split('').reduce((string, char) => {
        if(char in string ){
            string[char]++ 
        }else{
          string[char] = 1
        }
        return string
    }, {})
}
