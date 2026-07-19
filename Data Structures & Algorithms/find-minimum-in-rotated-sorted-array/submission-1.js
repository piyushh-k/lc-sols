class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let left = 0;
        let right = n-1;
        let ans = Infinity;
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            if(nums[left] <= nums[mid]){
                ans = Math.min(ans , nums[left]);
                left = mid+1;
            }else if(nums[mid] < nums[right]){
                ans = Math.min(ans , nums[mid]);
                right = mid-1;
            }
        }
        return ans;
    }
}
