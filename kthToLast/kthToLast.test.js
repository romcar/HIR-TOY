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
		console.log = jest.fn();
		kthToLast(ll, 10);
		expect(console.log).toHaveBeenCalledTimes(0);
	});

	it('should return the first item in the list if the correct length is provided', () => {
		console.log = jest.fn();
		kthToLast(ll, 7);
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith(`The k to last element in this list is 1`);
	});

	it('Should return the last item in the list if k is not provided', () => {
		console.log = jest.fn();
		kthToLast(ll);
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('The k to last element in this list is 8');
	});

	it('Should return the correct value in the middle of the list', () => {
		console.log = jest.fn();
		kthToLast(ll, 4);
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('The k to last element in this list is 4');
	});
});
