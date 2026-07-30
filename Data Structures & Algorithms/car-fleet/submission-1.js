class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    // Sort by position in descending order
    cars.sort((a, b) => b[0] - a[0]);

    let stack = [];

    for (let [pos, spd] of cars) {
        let time = (target - pos) / spd;

        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
        // else: joins the fleet ahead, so do nothing
    }

    return stack.length;
    }
}
