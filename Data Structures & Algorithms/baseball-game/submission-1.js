class Solution {
    /*Most optimal
Just maintain a stack , do operations as per instructions and keep one variable sum.

Update sum as per the operation so you don't have to do another o(n) itertaion of stack to calculate the sum.
*/
    calPoints(operations) {
        let stack = [];
        let sum = 0;
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "C") {
                sum = sum - stack[stack.length - 1];
                stack.pop();
            } else if (operations[i] === "D") {
                const double = stack[stack.length - 1] * 2;
                stack.push(double);
                sum = sum + stack[stack.length - 1];
            } else if (operations[i] === "+") {
                const add = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(add);
                sum = sum + stack[stack.length - 1];
            } else {
                stack.push(Number(operations[i]));
                sum = sum + stack[stack.length - 1];
            }
        }
        return sum;
    }
}
