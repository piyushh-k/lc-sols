class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let word of strs){
            let x = word.split("").sort().join("");
            if(!map.has(x)){
                map.set(x , []);
            }
            map.get(x).push(word);
        }
        return Array.from(map.values());
    }
}
