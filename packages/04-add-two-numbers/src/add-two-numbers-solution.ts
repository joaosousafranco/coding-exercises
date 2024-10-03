export class ListNode {
  public val: number;

  // eslint-disable-next-line no-use-before-define
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function listToArray(head: ListNode | null): Array<number> {
  if (head === null) {
    return [];
  }

  return [head.val].concat(listToArray(head.next));
}

export function arrayToLinkedList(array: Array<number>): ListNode | null {
  if (!array.length) {
    return null;
  }

  const nextNode = arrayToLinkedList(array.slice(1, array.length));

  const node = new ListNode(array[0], nextNode);

  return node;
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const first = parseInt(listToArray(l1).reverse().join(''), 10);
  const second = parseInt(listToArray(l2).reverse().join(''), 10);

  const result = `${first + second}`
    .split('')
    .reverse()
    .map((n) => parseInt(n, 10));

  return arrayToLinkedList(result);
}
