class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let bucket = Array.from({ length: n + 1 }, () => []);
        let map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (let [key, value] of map) {
            bucket[value].push(key);
        }

        let ans = [];

        for (let i = n; i >= 0; i--) {
            if (bucket[i].length) {
                for (let num of bucket[i]) {
                    ans.push(num);
                    if (ans.length === k) return ans;
                }
            }
        }
    }
}
