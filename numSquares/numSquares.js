const numSquares = number => {
	let squares = {};
	squares[0] = 0;
	squares[1] = 1;
	squares[2] = 2;
	squares[3] = 3;

	for (let i = 4; i <= number; i++) {
		squares[i] = i;

		for (let x = 1; x <= i; x++) {
			let temp = x * x;
			if (temp > i) { break }
			else {
				squares[i] = Math.min(squares[i], 1 + squares[i - temp])
			}
		}
	}
	return squares[number];
};

/*
I - Positive integer (number)
O - Positive integer -- represents the least number of perfect squares that sum up to total the number
C - 0(log(n))
E - look at test for examples

Approach:

  numSquares(number) {

		define all squares in a hash for o(1) look up
		set values for 0-3
		0 = 0
		1 = 1
		2 = 2
		3 = 3

		iterate from 4(i) to number
			add i to squares values set to i
			1 is a perfect square and as of now we should assume the largest amount of perfect squares

			iterate from 1(x) to i
				get square of x
				is it larger than our i at this moment?
					true: get out of here (break)
				else
					which is smaller?  the current value of squares i? or is the square calculate - i we are on smaller (if so add 1 to it for the current perfect square)

  }
*/
// console.log(numSquares(48));
module.exports = numSquares;
