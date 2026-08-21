/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function dfs(root , sum){
            if(!root) return false;
            sum = sum + root.val;
            if(!root.left && !root.right && sum == targetSum)return true;
            return dfs(root.left , sum) || dfs(root.right , sum);
        }
        return dfs(root, 0);
    }
}
