const Node = (val) => {
  let obj = {};
  obj.value = val;
  obj.next = null;
  return obj;
}
const sumListsReverse = (list1, list2) => {
  const extractNumber = (list) => {
    let number = ''; // could do an array, but this is simpler
    while (list) {
      number = list.value + number;
      list = list.next;
    }
    return Number(number);
  }; // end extractNumber

  const transformIntoLinkedList = (n) => {
    n = '' + n;
    n = n.split('');

    let temp = Node(Number(n.pop()));
    const results = temp;
    while (n.length) {
      temp.next = Node(Number(n.pop()));
      temp = temp.next;
    };
    return results;
  };

  const x = extractNumber(list1);
  const y = extractNumber(list2);
  const z = transformIntoLinkedList(x + y);

  return z;
};

module.exports = sumListsReverse;