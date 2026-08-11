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
     * @return {boolean}
     */
    isValidBST(root) {
        function dfs(root , minVal , maxVal){
            if(!root) return true;
            if(root.val >= maxVal || root.val <= minVal) return false;
            return dfs(root.left , minVal , root.val) && 
            dfs(root.right , root.val , maxVal)
        }
       return dfs(root , -Infinity , Infinity);
    }
}
