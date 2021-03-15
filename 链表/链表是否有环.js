let hashCycle = function (head) {
  try {
    JSON.stringify(head)
    return false;
  } catch {
    return true
  }
}

let hashCycle1 =function (head) {
  if(!head || !head.next) {
    return false
  }
  let slow = head;
  let fast = head.next;

  while(slow !== fast) {
    if(!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}