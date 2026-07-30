class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let maxL = -Infinity;
        let maxR = -Infinity;
        let leftMax = new Array(n);
        let rightMax = new Array(n);
        let trapWater = 0;
        for (let i = 0; i < n; i++) {
            maxL = Math.max(maxL, height[i]);
            leftMax[i] = maxL;
        }
        for (let i = n - 1; i >= 0; i--) {
            maxR = Math.max(maxR, height[i]);
            rightMax[i] = maxR;
        }
        for (let i = 0; i < n; i++) {
            let water = Math.min(leftMax[i], rightMax[i]);
            if (water - height[i] > 0) {
                trapWater += water - height[i];
            }
        }
        return trapWater;
    }
}
