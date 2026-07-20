class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //Finding Max element of array
        let n = piles.length;
        let Max = -Infinity;
        let ans = Infinity;
        for(let i = 0; i < n; i++){
            Max = Math.max(Max , piles[i]);
        }

        //Binary Search on search space of [1 , Max]
        let low = 1; 
        let high = Max;
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            if(isValid(mid)){
                ans = Math.min(ans , mid);
                high = mid-1;
            } else {
                low = mid+1;
            }

        }
        function isValid(mid){
            let sum = 0;
            for(let i = 0; i < n; i++){
                sum = sum + Math.ceil((piles[i]/mid))
            }
            return sum <= h ? true : false;
        }
        return ans;
    }

}
