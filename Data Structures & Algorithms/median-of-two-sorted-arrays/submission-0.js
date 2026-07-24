class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let p1 = 0;
        let p2 = 0;
        let arr = [];
        // Merge while both arrays have elements
        while (p1 < nums1.length && p2 < nums2.length) {
            if (nums1[p1] <= nums2[p2]) {
                arr.push(nums1[p1]);
                p1++;
            } else {
                arr.push(nums2[p2]);
                p2++;
            }
        }
        while (p1 < nums1.length) {
            arr.push(nums1[p1]);
            p1++;
        }
        while (p2 < nums2.length) {
            arr.push(nums2[p2]);
            p2++;
        }
        let n = arr.length;

        if (n % 2 === 1) {
            return arr[Math.floor(n / 2)];
        } 
        return (arr[n/2 - 1] + arr[n/2])/2 
    }
}
