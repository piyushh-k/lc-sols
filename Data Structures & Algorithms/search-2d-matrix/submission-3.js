class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;

        for (let i = 0; i < m; i++) {
            let left = 0;
            let right = matrix[i].length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                } else if (matrix[i][mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return false;
    }
}