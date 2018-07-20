module.exports = stringCompression = (string) => {

  let results = `${string[0]}`,
      count = 1,
      i = 0,
      temp = string.slice(1);

  while(temp.length){
    if(temp[i] === results[results.length-1]) {
      count++;
      temp = temp.slice(1);
    } else {
      results = results + count + temp[i];
      count = 1;
      temp = temp.slice(1);
    }
  }
  results = results + count;
  return results.length >= string.length ? string : results;
}
/*
I: string
O: string - compressed version of original string
C: linear - we would need to traverse the entirety of the string to know the counts
E: Examples are in readMe.md and in stringCompression.test.js

Strategy:
  helper function => removeFirstChar(string)
    return sliced string from 1 forward;


  define a results string `string[0]`
    remove first character from string
  define count at 1
  define i at 1
  define temp as a copy of string

  while temp has a length > 0
    if string[i] is equal to the last known character in results
      count++
      remove this character from the string
    else if the characters are different
      add the count to results
      reset count to 1
      push new character string[i] into results
      remove character from string

  return results
*/