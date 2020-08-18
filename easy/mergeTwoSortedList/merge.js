/**
 * definition for single-node-list
 */

function listNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 const mergeTwoLists = function (l1, l2) {
     if (l1 == null) {
         return l2;
     }
     if (l2 == null) {
         return l1;
     }
     if (l1.val < l2.val) {
         l1.next = mergeTwoLists(l1.next, l2);
         return l1;
     } else {
         l2.next = mergeTwoLists(l1, l2.next);
         return l2;
     }
 }

 //我的第二种方法 
 //比较繁琐一点
  const mergeTwoLists2 = function (l1, l2) {
      const node = new listNode(null);
      const pointer = node;
      if (l1 == null) {
          return l2;
      }
      if (l2 == null) {
          return l1;
      }
      if (l1.val < l2.val) {
          pointer.next = new listNode(l1.val);
          pointer = pointer.next;
          l1 = l1.next;
      } else if (l1.val > l2.val) {
          pointer.next = new listNode(l2.val);
          pointer = pointer.next;
          l2 = l2.next;
      } else {
          node.next = new listNode(l1.val);
          pointer = pointer.next;
          l1 = l1.next;
          l2 = l2.next;
      }
  }