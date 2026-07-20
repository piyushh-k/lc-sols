class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //concise solution , same complexity - O(nlog(max));
        let l = 1,
            r = Math.max(...piles);

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            let hours = 0;

            for (const pile of piles) {
                hours += Math.ceil(pile / m);
            }

            if (hours <= h) r = m;
            else l = m + 1;
        }

        return l;
    }
}
