class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let l = 0;
        let r = 0;
        let maxF = 0;
        let res = 0;
        while (r < s.length) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxF = Math.max(maxF, map.get(s[r]));
            if (r - l + 1 - maxF <= k) {
                res = Math.max(res, r - l + 1);
            } else {
                while (r - l + 1 - maxF > k) {
                    map.set(s[l], map.get(s[l]) - 1);
                    l++;
                }
            }
            r++;
        }
        return res;
    }
}
