class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let result = new Array(n).fill(0);
        let stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }

        return result;
    }
}
