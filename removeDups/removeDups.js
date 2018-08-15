const removeDups = list => {
  if (!Object.keys(list).length) {
    return -1;
  }

  var values = {};
  let head = list;
  while (list && list.next) {
    // start off with the first item
    values[list.value] = true;
    // initialize runner (the next item)
    let runner = list.next;
    while (runner && runner.next) {
      // checks to see if the list runner value is inside of the hash
      // if the value is in the hash
      if (values[runner.value]) {
        // set the lists next value to the value of runner.next
        list.next = runner.next;
        if (runner.next) {
          runner = runner.next;
        } else {
          if (values[runner.value]) {
            list.next = null;
          }
        }
      } else {
        values[runner.value] = true;
        list = runner;
        runner = runner.next;
      }
    }

    if (list.next) {
      if (!values[list.value]) {
        list = list.next;
      } else {
        list.next = null;
      }
    }
  }
  return head;
};

module.exports = removeDups;
