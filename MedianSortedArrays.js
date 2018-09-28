/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort(function(a,b){ return a-b });
    const resultLength = nums1.length;
    var midPoint = parseInt(resultLength / 2);
    if(resultLength % 2 === 0 ){
        return (nums1[midPoint-1] + nums1[midPoint])/2;
    }
    return nums1[midPoint];
};
