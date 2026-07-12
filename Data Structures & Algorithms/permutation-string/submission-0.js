class Solution {
    checkInclusion(s1, s2) {
        const m = s1.length;
        const n = s2.length;

        if (m > n) return false;
        const map1 = new Map();
        for (const ch of s1) {
            map1.set(ch, (map1.get(ch) || 0) + 1);
        }
        for (let i = 0; i <= n - m; i++) {
            const map2 = new Map();
            for (let j = i; j < i + m; j++) {
                map2.set(s2[j], (map2.get(s2[j]) || 0) + 1);
            }
            if (isEqual(map1, map2)) {
                return true;
            }
        }

        return false;
    }
}

function isEqual(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}
