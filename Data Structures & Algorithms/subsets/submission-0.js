class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let cur = [];
        function solve(i) {
            if (i === nums.length) {
                res.push([...cur]);
                return;
            }
            cur.push(nums[i]);
            solve(i + 1);
            cur.pop();
            solve(i + 1);
        }
        solve(0);
        return res;
    }
}
