class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let copy = nums.map((val, idx) => [val, idx]);
        copy.sort((a, b) => a[0] - b[0]);
        let left = 0;
        let right = n - 1;
        while (left < right) {
            let curr = (copy[left][0] + copy[right][0]);
            if (curr < target) {
                left++;
            }
            else if (curr > target) {
                right--;
            }
            else {
                return [copy[left][1], copy[right][1]]
            }
        }
        return [];
    }
}
