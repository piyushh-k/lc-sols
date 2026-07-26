class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
            const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (
            stack.length &&
            stack[stack.length - 1][0] <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            ans[i] = stack[stack.length - 1][1] - i;
        }

        stack.push([temperatures[i], i]);
    }

    return ans;

    }
}
