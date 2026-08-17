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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let sum = 0;
        function dfs(root) {
            if (!root) return;
            dfs(root.left);
            dfs(root.right);
            if (low <= root.val && root.val <= high) sum += root.val;
        }
        dfs(root);
        return sum;
    }
}
