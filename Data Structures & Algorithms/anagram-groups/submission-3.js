class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let word of strs){
            let arr = new Array(26).fill(0);
            for(let c of word){
                arr[c.charCodeAt(0)-97]++;
            }
            let code = arr.join("-");
            if(!map.has(code)){
                map.set(code , []);
            }
            map.get(code).push(word);
        }
        return Array.from(map.values());
    }
}
