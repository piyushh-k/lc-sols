class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let ch of s) {
            if (ch === "(" || ch === "[" || ch === "{") {
                stack.push(ch);
            } else {

                if (
                    (ch === ")" && stack[stack.length - 1] === "(") ||
                    (ch === "]" && stack[stack.length - 1] === "[") ||
                    (ch === "}" && stack[stack.length - 1] === "{")
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}