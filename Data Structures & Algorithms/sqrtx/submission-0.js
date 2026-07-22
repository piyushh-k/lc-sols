class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let low = 1;
    let high = Math.floor(x/2);
    if(x==1) return 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(mid*mid > x){
            high = mid-1;
        } else if(mid*mid < x){
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return high;
    }
}
