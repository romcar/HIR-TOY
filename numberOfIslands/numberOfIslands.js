const numIslands = function (map) {

  const depthFirstSearch = function (i, j, iLength, jLength) {
    if( i < 0 || j < 0 || j >= jLength || i >= iLength) return;
    if(map[i][j] === 1) {
      map[i][j] = 0;
      depthFirstSearch(i-1, j, iLength, jLength); // Top
      depthFirstSearch(i+1, j, iLength, jLength); // Bottom
      depthFirstSearch(i, j-1, iLength, jLength); // Left
      depthFirstSearch(i, j+1, iLength, jLength); // Right
    }

  };

  const iLength = map.length;
  if(!iLength) return 0;

  const jLength = map[0].length;
  if(!jLength) return 0;

  let islands = 0;

  for(let i = 0; i < iLength; i++){
    for (let j = 0; j < jLength; j++) {
      if(map[i][j] !== 1) {
        continue;
      }

      ++islands;
      depthFirstSearch(i,j,iLength,jLength);
    }
  }
  return islands;
};
// for testing
module.exports = numIslands;