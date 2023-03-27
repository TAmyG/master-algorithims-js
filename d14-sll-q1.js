/**
 * Question 1:Reverse SLL- You are given the head of a Singly Linked list.
 * Write a function that will take the given head as input,
 * reverse the Linked List and return the new head of the reversed Linked List.
 */

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node("a");

function reverseSLL(head) {
  let cur = head;
  let prev = null;
  let newHead = cur;
  while (cur) {
    let nextNode = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextNode;
  }

  return prev;
}

console.log(reverseSLL(head));
