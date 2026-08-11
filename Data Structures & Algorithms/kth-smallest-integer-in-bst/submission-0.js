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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ans = 0;
        function dfs(root){
            if(!root) return;
            dfs(root.left);
            k--;
            if(k == 0) ans = root.val;
            dfs(root.right);
        }
        dfs(root);
        return ans;
    }
}
