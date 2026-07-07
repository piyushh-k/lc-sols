class Solution {
    /**
     * @param {number[]} copy
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let copy = nums.map((val , idx) => [val , idx]);
        copy.sort((a , b) => (a[0] - b[0]));
        let left = 0
        let right = n-1;
        while(left < right){
            if(copy[left][0] + copy[right][0] > target){
                right--;
            } else if(copy[left][0] + copy[right][0] < target){
                left++
            } else{
                return [copy[left][1] , copy[right][1]]
            }
        }
    }
}
