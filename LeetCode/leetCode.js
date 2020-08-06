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
