const openLock = function (deadends, target) {
  let q = [{
    combo: '0000',
    cost: 0
  }];
  let history = ['0000'];

  let turn = (comb, i, nations, direction, turns) => {
    let result = '';

    comb = Number(comb) + direction;
    if (comb > 9) {
      comb = 0;
    }

    if (comb < 0) {
      comb = 9
    }
    comb = '' + comb;
    result = `${nations.slice(0, i).concat((comb)).concat(nations.slice(i + 1)).join("")}`;

    if (!history.includes(result)) {
      q.push({
        combo: result,
        cost: turns
      });
      history.push(result);
    }
  }

  let findNext = (combination, turns) => {
    combination.split("").forEach((comb, i, nations) => {
      turn(comb, i, nations, 1, turns);
      turn(comb, i, nations, -1, turns);
    })
  }

  while (q.length) {
    // shift a value
    let val = q.shift();
    if (val.combo === target) {
      return val.cost;
    }
    if (!deadends.includes(val.combo) && val.combo !== target) {
      findNext(val.combo, val.cost + 1);
    }
  }
  return -1;

};
// let deadends = ["0201", "0101", "0102", "1212", "2002"]
// let target = "0202"
// console.log(openLock(deadends, target));


module.exports = openLock;