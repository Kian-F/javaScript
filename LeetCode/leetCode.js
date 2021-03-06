// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (extraCandies + candies[i] >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (array, target) {
  let myMap = new Map();
  let result = [];
  let indice;
  for (let i = 0; i < array.length; i++) {
    indice = target - array[i];
    if (myMap.has(indice)) {
      result.push(i);
      result.push(indice);
    } else myMap.set(array[i]);
  }
  return result;
};

//////////////////////////////////////////////////////////////////////////////////////////////

//    You're given strings J representing the types
//  of stones that are jewels, and S representing the stones you have.
//  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive,
// so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

var numJewelsInStones = function (J, S) {
  let count = 0;
  let jewel = J.split("");
  let stone = S.split("");
  let myMap = new Map();
  for (let i = 0; i < stone.length; i++) {
    if (myMap.has(stone)) {
      count++;
    } else {
      myMap.set(jewel, i);
    }
  }

  return count;
};

//Second solution
let numJewelsInStones = function (J, S) {
  let count = 0;
  for (let x of S) {
    if (J.includes(x)) {
      count++;
    }
  }
  return count;
};

////////////////////////////////////////////////////////////////////

/*Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).*/

var smallerNumbersThanCurrent = function (nums) {
  let count = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    res.push(count);
    count = 0;
  }
  return res;
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1*/

var singleNumber = function (nums) {
  let mySet = new Set();
  for (item of nums) {
    if (mySet.has(item)) {
      mySet.delete(item);
    } else {
      mySet.add(item);
    }
  }
  return Array.from(mySet)[0];
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return null;
  }
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3*/

var majorityElement = function (nums) {
  let myMap = new Map();
  let half = nums.length / 2;
  for (num in nums) {
    if (!myMap.has(num)) {
      myMap.set(num, 1);
    } else {
      myMap.set(num, myMap.get(num) + 1);
    }
    if (myMap.get(num) > half) {
      return num;
    }
  }
  return -1;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:


Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      mySet.delete(nums[i]);
    } else {
      mySet.add(nums[i]);
    }
  }

  return Array.from(mySet)[0];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which 
the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:*/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/* @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;
  let mid = Math.floor(nums.length / 2);
  let treeNode = new TreeNode(nums[mid]);
  let left = nums.slice(0, mid);
  treeNode.left = sortedArrayToBST(left);
  let right = nums.slice(mid + 1, nums.length);
  treeNode.right = sortedArrayToBST(right);
  return treeNode;
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
// For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function(n) {
   
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pointer =0;
  for(let i=0; i<nums.length; i++){
      if(nums[i] !== 0){
          let temp = nums[i]
          nums[i] = nums[pointer]
          nums[pointer] = temp
          
          pointer++
          
      }
  }
};


//////////////////////////////////////////////////////////////////////////////////////////////////
/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3*/


let romanToInt = function(s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += (nextInt - currentInt);
        i++;
      }
    } else {
      total += currentInt;
    }
  }

  return total;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let myMap = new Map();
   
   for(let i=0; i<nums.length; i++){
       if(myMap.has(nums[i])){
           return true
          
       }else {
           myMap.set(nums[i])
          
       }
   }
   
   return false
   
};

////////////////////////////////////////////////////////////////////////////////////////////////
/*The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.

Make two functions
reverse
flatten
reverse( [1, 2, 3, 4] );
// => [ 4, 3, 2, 1 ]
flatten( ["Hello", ["World", 42] ] );
// => [ "Hello", "World", 42 ]
You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]*/

const reverse = function( arr ){
  let output = [];

  // looping forwards
  // for (let i = 0; i < arr.length; i++) {
  //   const currentElem = arr[i];
  //   output.unshift(currentElem);
  // }

  for (let i = arr.length-1; i >= 0; i--) {
    const currentElem = arr[i];
    output.push(currentElem);
    console.log(output);
  }

  console.log(output)
  return output
};

reverse([1, 2, 3, 4]);


const flatten = function( arr ){
  let output = [];

  for (var i = 0; i < arr.length; i++) {
    const currentElem = arr[i];

    if(Array.isArray(currentElem)){

      // for (let j = 0; j < currentElem.length; j++) {
      //   const innerElem = currentElem[j];
      //   output.push( innerElem );
      // }

      output = output.concat(currentElem);

    } else {
      output.push( currentElem );
    }
  }


  console.log(output);
  return output;
};

flatten(["Hello", ["World", 42] ]);


//////////////////////////////////////////////////////////////////////////////////////////
/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sToA = s.split('').sort().join('')
 let tToA = t.split('').sort().join('')
 if(sToA === tToA){
   return true
 }else{
   return false
 }
};


////////////////////////////////////////////////////////////////////////////////////////////////////
/*Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.*/
  /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit =0;
  for(let i=1; i< prices.length; i++){
      if(prices[i]> prices[i-1]){
          maxProfit += prices[i] - prices[i-1]
      }
  }
  return maxProfit;
};


////////////////////////////////////////////////////////////////////////////////////////////////////

/*The Sieve of Eratosthenes
The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

Create your range, starting at two and ending at the given limit.

The algorithm consists of repeating the following over and over:

take the next available unmarked number in your list (it is prime)
remove all the multiples of that number for your list (they are not prime if they have factors other than themselves and 1) Repeat until you don't have any possible primes left in your range.
When the algorithm terminates, all the numbers in the list that have not been removed are prime.

Do this in Javascript!*/
const sieve = {
  list: [],
  primes: [],
  calcPrime: function(max){

    // begin with all numbers as being unmarked
    this.list = new Array(max).fill(true);

    // Initially, we use i < max but if we use j = Math.pow(currentNum, 2)
    // in the inner loop then there's no need to iterate until max
    // For example, if your max was 100, there's no need to interate past 10,
    // becuase the 10^2 is 100 and your inner loop won't run because j(100) is NOT < max(100)
    for (let i = 2; i < Math.sqrt(max); i++) {
      let currentNum = i;

      // Initially, we started with j = currentNUm + 1
      // BUT we can actually start at the square of currentNum
      // For example, when we look at 3, 6 is ready FALSE because
      // it is a multiple of 2, therefore we can start from 9 (which is the square of 3)
      for (let j = Math.pow(currentNum, 2); j < max; j++) {
        if (this.list[j] === true && j % currentNum === 0) {
          this.list[j] = false;
        }
      } // inner loop
    } // outer loop

    // console.log(this.list);

    // for (let i = 2; i < max; i++) {
    //   if(this.list[i] === true){
    //     this.primes.push(i);
    //   }
    // }

    this.primes = this.list.reduce(function(array, elem, index){
      if(index > 1 && elem === true){
        array.push(index);
      }
      return array;
    }, []); // set initial value as empty array


    return this.primes;
  }
};

///////////////////////////////////////////
const sieve2 = function(limit) {
  let nums = [...Array(limit + 1 ).keys()].slice(2);
  let primes = [];

  while (nums.length) {
    let n = nums.shift(); //take out first element
    primes.push(n) //push to list of primes
    nums = nums.filter(m => m % n); //remove multiples from remaining nums
  }
  return primes;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let myMap = new Map();
   
   for(let i=0; i<nums.length; i++){
       if(myMap.has(nums[i])){
           return true
          
       }else {
           myMap.set(nums[i])
          
       }
   }
   
   return false
   
};

/////////////////////////////////////////////////
/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sToA = s.split('').sort().join('')
 let tToA = t.split('').sort().join('')
 if(sToA === tToA){
   return true
 }else{
   return false
 }
};

////////////////////////////////////////////////////////////////////////
/*Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4*/

if (!l1 && !l2) return null;
if (!l1) return l2;
if (!l2) return l1;

let resultList = new ListNode();
let start = resultList;
while (l1 || l2) {
    if (l1 && l2) {
        if (l1.val < l2.val) {
            resultList.next = l1;
            l1 = l1.next;
        }
        else {
            resultList.next = l2;
            l2 = l2.next;
        }

    }
    else if (l1) {
        resultList.next = l1;
        l1 = l1.next;
    }
    else {
        resultList.next = l2;
        l2 = l2.next;
    }
    resultList = resultList.next;
}

const tmp = start.next;
start = null;
start = tmp;

return start;

////////////////////////////////////////////////////////////////////////////////
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

var firstUniqChar = function(s) {
  let map = new Map();
  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  for (let char of s) {
    if (map.get(char) === 1) {
      return s.indexOf(char)
    } 
  }
  return -1;  
};

//////////////////////////////////////////////////////////////////////////////////  
/*Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minBuy = Infinity;
  let maxProf = 0;
  for(let i=0; i<prices.length; i++){
      if(prices[i] < minBuy){
      minBuy = prices[i]
    }else if(prices[i] - minBuy > maxProf)
      maxProf  = prices[i] - minBuy
  }
  return maxProf   
};

/////////////////////////////////////////////////////////////////////////////////////////
/*Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = nums.reduce(function(acc, cur){
      return acc + cur
})
  let expectedSum = nums.length * (nums.length+1)/2
      return expectedSum - sum
};


/////////////////////////////////////////////////////////////
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
var intersect = function(nums1, nums2) {
  let map = {}
  let res = []
  for(let i=0;i<nums1.length; i++){
    if(map[nums1[i]]){
      map[nums1[i]]++
    }else{
      map[nums1[i]] = 1
    }
  }
  for(let j of nums2){
     if(map[j]){
       res.push(j)
       map[j]--
     }
  }
  return res
};

////////////////////////////////////////////////////////////////////////
  // Share
  // Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  // Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

  

  // Example 1:

  // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  // Output: 6
  // Explanation: [4,-1,2,1] has the largest sum = 6.
  // Example 2:

  // Input: nums = [1]
  // Output: 1
  var maxSubArray = function(nums) {
    let a1 = 0
     let a2 = nums[0]
     nums.forEach((i,a) => {
       a1 = Math.max(i, a1 + i)
       a2 = Math.max(a2, a1)
     })
     return a2
   };
   
   /////////////////////////////////////////////////////////////////////////////////////
//    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
  let myMap = new Map();
     let result =[]
     let indice;
     for(let i=0;i<array.length; i++){
         indice = target - array[i] 
        if( myMap.has(indice)){
            result.push(i)
            result.push(indice)
        } else  
          (myMap.set(array[i]))  
     } 
     return result
 };

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  let pascalTre = new Array(numRows);
  
  for(let i = 0; i<numRows; i++ ){
      let row = new Array(i+1);
      row[0] = 1;
      row[row.length -1] = 1;
      for(let j = 1; j < row.length -1; j++){
          let aboveRow = pascalTre[i-1];
          row[j] = aboveRow[j] + aboveRow[j-1]
      }
      pascalTre[i] = row
  }
  return pascalTre
};

////////////////////////////////////////////////////////////
// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

var maxProfit = function(prices) {
  let maxProfit =0;
  for(let i=1; i< prices.length; i++){
      if(prices[i]> prices[i-1]){
          maxProfit += prices[i] - prices[i-1]
      }
  }
  return maxProfit;
};

/////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above, the input represents the signed integer. -3.
// Follow up: If this function is called many times, how would you optimize it?


var hammingWeight = function(n) {
  let arr = n.toString(2);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "1") {
          count++
      }
  }
  return count;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
/*Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1 */

var isHappy = function(n) {
  let arr = [], sum = sumOfDigits(n);
  while (!arr.includes(sum)) {
      if (sum === 1) return true;
      arr.push(sum);
      sum = sumOfDigits(sum);
  }
  return false;
};

var sumOfDigits = function(num) {
  let sum = 0;
  while (num > 0) {
      sum += Math.pow((num % 10), 2);
      num = Math.floor(num / 10);
  }
  return sum;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
/*Merge two sorted linked lists and return it as a new sorted list. The new list 
should be made by splicing together the nodes of the first two lists.
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]*/


let mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  return head.next;
};

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

///////////////////////////////////////////////////////////////
/*Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1*/

/*getDigits(num):
The gist here is that if we have, for example, the number 219, we can split it mathematically using % and /, like so:

Math.floor(219 / 10) --> 21
219 % 10 --> 9
Specifically:

Use num % 10 to extract number in the ones position and push it to the digits array
Overwrite num with Math.floor(num /10) to give us the rest of the number
Return digits
getSquaredTotal(numbers):
We can take advantage of the reduce() array method here to iterate over numbers and additively square each digit.

isHappy(n):
After defining the previous two helper functions, isHappy()'s main job is to do two things:

Return true if n becomes equal to 1
Return false if we're in a loop, AKA, if we see the same number twice
#2 works because we know that getSquaredTotal() will produce the same result each time it receives a given input (this is known as a Pure Function), so we know we're stuck in a loop if we see a result from this function twice.

There are a number of ways to track duplicates, and here we use Javascript's Set() object to take advantage of Set.has(). As soon as seen.has() returns true, we can return false.

Otherwise, we'll eventually return true when n === 1.*/

var getDigits = (num) => {
  const digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
};

var getSquaredTotal = (digits) => {
  return digits.reduce((total, digit) => total + digit * digit, 0);
};

var isHappy = function(n) {
  const seen = new Set();
  while (n !== 1) {
    let digits = getDigits(n);
    n = getSquaredTotal(digits);
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
  }
  return true;
};

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2,
//  with the first two elements of nums being 1 and 2 respectively. 
//  It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, 
//and 4 respectively. It doesn't matter what values are set beyond the returned length.

var removeDuplicates = function(nums) {
  for (i = 0; i < nums.length; i++) {
      //Next number is identical to current one
      if (nums[i] == nums[i+1]) {
          nums.splice(i, 1);
          i--;
      }
  }
};