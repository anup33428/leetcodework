/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var num1 = [], num2 = [];
    var result = [];
    var val1 = 0, val2 = 0, rem = 0;
    while(l1.next !== null){
        num1.push(l1.val)
        l1 = l1.next;
    }
    num1.push(l1.val);
    while(l2.next !== null){
        num2.push(l2.val)
        l2 = l2.next;
    }
    num2.push(l2.val);
    const bigLen = num1.length > num2.length ? num1.length : num2.length;
    for(i=0; i < bigLen; i++){
         val1 =  num1[i] ? num1[i] : 0;
         val2 =  num2[i] ? num2[i] : 0;
         result.push(parseInt((val1+val2+rem)%10));
         rem = parseInt((val1+val2+rem) /10);
    }
    if (rem > 0){
        result.push(rem);
    }
    return result;
};
