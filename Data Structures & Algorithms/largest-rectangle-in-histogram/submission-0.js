class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;

    const pse = new Array(n).fill(-1);
    const nse = new Array(n).fill(n);

    let stack = [];

    //pse array
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) pse[i] = stack[stack.length - 1];
        stack.push(i);
    }
    //nse array
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (
            stack.length &&
            heights[stack[stack.length - 1]] >= heights[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            nse[i] = stack[stack.length - 1];
        }

        stack.push(i);
    }

    let maxArea = 0;
    //calculate area by multiplying height with width using pse and nse
    for (let i = 0; i < n; i++) {
        const width = nse[i] - pse[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    }
}
