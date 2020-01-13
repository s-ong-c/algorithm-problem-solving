/*
 * 1. Two Sum
 */

// const nums = [2, 7, 11, 15];
// const target = 9;

/* 1: Brute Force */
const twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(target - nums[i] in obj);
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};

/** 3: One-pass Hash Table */
const twoSum2 = function(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
