class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let res = new Array(n).fill(1)
        for(let i = 1; i < n; i++){
            res[i] = res[i-1]*nums[i-1]
        }
        let post = 1;
        
        for(let i = n-2; i >= 0; i--){
            post = post * nums[i+1];
            res[i] = res[i] * post;
        }
        return res
    }
}
