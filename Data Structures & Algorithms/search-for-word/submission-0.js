class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length;
        const n = board[0].length;

        function backTrack(i, j, k) {
            if (k === word.length) return true;
            if (i >= m || j >= n || i < 0 || j < 0 || board[i][j] != word[k]) return false;

            const temp = board[i][j];
            board[i][j] = "#"; 
            const result =
                backTrack(i - 1, j, k + 1) ||
                backTrack(i + 1, j, k + 1) ||
                backTrack(i, j - 1, k + 1) ||
                backTrack(i, j + 1, k + 1);

            board[i][j] = temp;
            return result;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (backTrack(i, j, 0)) return true;
            }
        }
        return false;
    }
}
