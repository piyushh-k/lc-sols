
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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "#";

        let s = "";
        let queue = [];
        let front = 0;
        let rear = 0;

        queue[rear++] = root;

        while (front < rear) {
            const node = queue[front++];

            if (!node) {
                s += "#,";
                continue;
            }

            s += node.val + ",";

            queue[rear++] = node.left;
            queue[rear++] = node.right;
        }

        return s;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data || data === "#") return null;

        const nodes = data.split(",");
        let index = 0;

        const root = new TreeNode(Number(nodes[index++]));

        let queue = [];
        let front = 0;
        let rear = 0;

        queue[rear++] = root;

        while (front < rear) {
            const parent = queue[front++];

            // Left child
            if (nodes[index] !== "#") {
                parent.left = new TreeNode(Number(nodes[index]));
                queue[rear++] = parent.left;
            }
            index++;

            // Right child
            if (nodes[index] !== "#") {
                parent.right = new TreeNode(Number(nodes[index]));
                queue[rear++] = parent.right;
            }
            index++;
        }

        return root;
    }
}
