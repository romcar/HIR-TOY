const numIslands = require('./numberOfIslands');

describe('Number of Islands', () => {
  it('Should return the number of islands', ()=> {
    let map = [
      [1,1,1,1,0],
      [1,1,0,1,0],
      [1,1,0,0,0],
      [0,0,0,0,0]
    ];

    expect(numIslands(map)).toBe(1);

    map = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1]
    ];

    expect(numIslands(map)).toBe(3);

    map = [
      [1, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
    ];

    expect(numIslands(map)).toBe(4);
  });
});

/*
  Approach:

  I: array matrix [][]
  O: number
  C: linear
  E: are given in test



  define iLength as the length of map
  define jLength as the length of map[0]
  define i, j, and islands

  if iLength or jLength === 0
    return 0

  iterate through map until iLength
    iterate through map[] jLength
      if the current element is not 1
        keep going

      add one to islands
      use dfs on i, j

      // dfs makes the island disappear. This allows the for loops to ignore an island after it is found

  dfs()
  check top, bottom, left, right of current
  change any touching 1 to 0
*/