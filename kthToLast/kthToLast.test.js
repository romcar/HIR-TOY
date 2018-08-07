const kthToLast = require('./kthToLast');

describe('kthToLast', () => {
	var ll = {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: {
						value: 5,
						next: {
							value: 6,
							next: {
								value: 7,
								next: {
									value: 8,
									next: null
								}
							}
						}
					}
				}
			}
		}
	}; // end ll
	it('should return nothing if k is larger than the list', () => {
		expect(kthToLast(ll, 10)).toBe(undefined);
	});

	it('should return the first item in the list if the correct length is provided', () => {
		expect(kthToLast(ll, 8)).toEqual(1);
	});

	it('Should return the last item in the list if k is not provided', () => {
		expect(kthToLast(ll)).toBe(8);
	});

	it('Should return the correct value in the middle of the list', () => {
		expect(kthToLast(ll, 5)).to(4);
	});
});
