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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if (!p || !q || p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }

        function dfs(root) {
            if (!root) return false;
            if (root.val == subRoot.val && isSameTree(root, subRoot)) {
                return true;
            }
            return dfs(root.left) || dfs(root.right);
        }
        return dfs(root);
    }
}
