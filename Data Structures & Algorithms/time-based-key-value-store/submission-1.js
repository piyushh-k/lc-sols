class TimeMap {
    constructor() {
        this.keyStore = {};
    }

    set(key, value, timestamp) {
        if (!this.keyStore[key]) {
            this.keyStore[key] = [];
        }

        this.keyStore[key].push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.keyStore[key]) return "";

        const arr = this.keyStore[key];
        let left = 0;
        let right = arr.length - 1;
        let ans = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid][0] === timestamp) {
                return arr[mid][1];
            } else if (arr[mid][0] < timestamp) {
                ans = arr[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }
}