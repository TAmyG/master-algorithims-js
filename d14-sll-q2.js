/**
 * Question 2:Cycle Detection - You are given the head of a linked list.
 * Check if there is a cycle and if yes,  return the node where the cycle begins.
 * If there is no cycle, return null. There is a cycle in a linked list
 * if there is some node in the list that can be reached again by continuously following the next pointer.
 * Do not modify the linked list.
 */

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const head = new Node(1);
const node3 = new Node(3);
const node9 = new Node(9);
head.next = new Node(2);
head.next.next = node3;
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = node9;

node9.next = node3;

function findLoop(head) {
  if (!head) return null;
  if (!head.next) return null;

  let hare = head;
  let tortoise = head;
  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      break;
    }
  }
  if (hare !== tortoise) return null;
  let point = head;
  while (point !== tortoise) {
    point = point.next;
    tortoise = tortoise.next;
  }
  return tortoise;
}

console.log(findLoop(head));
