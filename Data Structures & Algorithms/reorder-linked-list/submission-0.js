/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    /* solution is very simple :
first find the middle of LL and then break it in the middle

now reverse the second half

now you just have to point the first node of first half to first node of second half 

now point the second node of first half to second node of second half and so on so forth.
*/
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        second = prev;
        let first = head;
        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
