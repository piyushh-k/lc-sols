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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
    while (lists.length > 1) {
        const list1 = lists.shift();
        const list2 = lists.shift();
        const merged = mergeList(list1, list2);
        lists.push(merged);
    }
    return lists[0];

    function mergeList(list1, list2) {
        const dummy = new ListNode();
        let curr = dummy;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = list1 || list2;
        return dummy.next;
    }
    }
}
