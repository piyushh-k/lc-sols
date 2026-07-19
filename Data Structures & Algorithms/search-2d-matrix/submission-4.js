class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let left = 0;
        let right = m*n-1;
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            let row = Math.floor(mid/n);
            let col = (mid%n);
            
            let value = matrix[row][col];
            if(value === target){
                return true;
            } else if(value < target){
                left = mid+1;
            } else {
                right = mid - 1;

            }
        }
        return false;
    }
}
