class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let freqArr = new Array(n+1);
        for(let i = 0; i <= n; i++){
            freqArr[i] = [];
        }
        let map = new Map();
        for(let num of nums){
            map.set(num , (map.get(num) || 0) + 1);
        }
        for(let [key , val] of map){
            freqArr[val].push(key);
        }
        let result = [];
        for(let i = n; i >= 0 && result.length <=k; i--){
            if(freqArr[i].length === 0) continue;
            else result.push(...freqArr[i]);
        }
        return result.slice(0,k);
    }
}
