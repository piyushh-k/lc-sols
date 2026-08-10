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
     * @return {number[][]}
     */

    //VERY FIRST BFS QUESTION
    levelOrder(root) {
        if (!root) return [];

        let res = []; // OUTPUT ARRAY
        let front = 0,
            rear = 0;
        let queue = [];

        queue[rear++] = root; //Enqueue Root first

        function bfs() {
            while (front < rear) {
                const levelSize = rear - front; //this is to calculate the level size
                let level = []; //put the elements of same level in this array

                for (let i = 0; i < levelSize; i++) {
                    const node = queue[front++]; //Retrieve first node from front

                    level.push(node.val); //Push the node

                    if (node.left) queue[rear++] = node.left; //process its L & R if it has any
                    if (node.right) queue[rear++] = node.right;
                }

                res.push(level); //push the level
            }
        }

        bfs();
        return res;
    }
}
