class Solution {
    evalRPN(tokens) {
        let stack = [];

        for (let ch of tokens) {
            if (Number(ch) == ch) {
                stack.push(Number(ch));
            } else {
                const x = stack.pop();
                const y = stack.pop();

                let ans = eval(`(${y})${ch}(${x})`);

                if (ch === "/") {
                    ans = Math.trunc(ans);
                }

                stack.push(ans);
            }
        }

        return stack.pop();
    }
}