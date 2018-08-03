const openLock = function (deadends, target) {
  let q = [ {combo:'0000', cost: 0} ];
  let history = ['0000'];
  let turns = 0;
  let i = 0;

  let findNext = (combination, turns) => {
    combination = typeof combination === 'string' ? combination : combination.combo;
    combination.split("").forEach((comb, i, nations) => {
      let temp = comb,
          result = '';

      // positive direction
      comb = Number(comb) + 1;
      if(comb > 9){
        comb = 0;
      }
      result = `${nations.slice(0, i).concat((`${comb}`)).concat(nations.slice(i + 1)).join("")}`

      if (!history.includes(result)) {
        q.push({
          combo: result,
          cost: turns
        });
        history.push(result);
      }

      //reset
      comb = temp;
      result = '';

      //negative direction
      comb = Number(comb) - 1;
      if(comb < 0 ) {
        comb = 9
      }
      result = `${nations.slice(0, i).concat((`${comb}`)).concat(nations.slice(i + 1)).join("")}`
      if (!history.includes(result)) {
        q.push({
          combo: result,
          cost: turns
        });
        history.push(result);
      }
    })
  }

  while(q.length) {
    debugger;
    // shift a value
    let val = q.shift();
    if(!deadends.includes(val.combo || val) && (val.combo || val) !== target){
      turns = val.cost || turns;
      findNext( (typeof val === 'string' ? val : val.combo), turns+1);

    } else if( val.combo === target) {
      return val.cost;
    }
  }
  return -1;

};
let deadends = ["0201", "0101", "0102", "1212", "2002"];
let target = "0202";

console.log(openLock(deadends, target));


// module.exports = openLock;