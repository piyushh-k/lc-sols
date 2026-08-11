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
     * @return {number}
     */
    goodNodes(root) {
        let goodNodes = 0;
        function dfs(root , max){
            if(!root) return;
            max = Math.max(max , root.val);
            if(root.val >= max) goodNodes++;
            dfs(root.left , max);
            dfs(root.right , max);
        }
        dfs(root , root.val)
        return goodNodes;
    }
}
