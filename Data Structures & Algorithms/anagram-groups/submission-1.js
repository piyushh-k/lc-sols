class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let word of strs){
            let arr = new Array(26).fill(0);
            for(let ch of word){
                arr[ch.charCodeAt(0) - 97]++;
            }
            let bucket = arr.join("-");
            if(!map.has(bucket)){
                map.set(bucket , []);
            }
            map.get(bucket).push(word)
        }
        return Array.from(map.values())
    }
}
