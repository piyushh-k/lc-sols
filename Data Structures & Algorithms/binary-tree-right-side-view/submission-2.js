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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        let res = [];
        let front = 0,
            rear = 0;
        let queue = [];
        queue[rear++] = root;

        function bfs() {
            while (front < rear) {
                const levelSize = rear - front;
                res.push(queue[rear - 1].val);
                for (let i = 0; i < levelSize; i++) {
                    const node = queue[front++];
                    if (node.left) queue[rear++] = node.left;
                    if (node.right) queue[rear++] = node.right;
                }
            }
        }

        bfs();
        return res;
    }
}
