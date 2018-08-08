const numSquares = require('./numSquares');

describe('Number of Squares', () => {
	it('Given a positive integer n, find the least number of perfect square numbers which should sum to n', () => {
		expect(numSquares(144)).toBe(1); // 144
		expect(numSquares(36)).toBe(1); // 36
		expect(numSquares(1156)).toBe(1); // 1156 => 34^2
		expect(numSquares(145)).toBe(2); // 1 + 144
		expect(numSquares(13)).toBe(2); // 4 + 9
		expect(numSquares(841)).toBe(2); // 400 + 441
		expect(numSquares(14)).toBe(3); // 1 + 4 + 9
		expect(numSquares(62)).toBe(3); // 49 + 9 + 4
		expect(numSquares(12)).toBe(3); // 4 + 4 + 4
		expect(numSquares(76)).toBe(5); // 64 + 9 + 1 + 1 + 1
	});
});
