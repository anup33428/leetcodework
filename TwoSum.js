/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0;
    var len = nums.length
    while(i < len){
        for(j = i+1 ; j <= len-1; j++ ){
            if (nums[i]+nums[j] === target){
                return [i, j];
            }
        }
        i++;
    }
};
