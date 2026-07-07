class Solution {
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        let low = 0;
        let high = s.length - 1;

        while (low < high) {
            if (s[low] !== s[high]) return false;
            low++;
            high--;
        }
        return true;
    }
}
