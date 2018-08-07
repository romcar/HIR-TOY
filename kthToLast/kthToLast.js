const kthToLast = (list, k = 0) => {
	// base case
	if (!list.next) {
		if (k === 0) {
			return console.log(`The k to last element in this list is ${list.value}`);
		}
		return 0;
	}

	index = kthToLast(list.next, k) + 1;

	if (index === k) {
		console.log(`The k to last element in this list is ${list.value}`);
		return index;
	}
	return index;
};
/*
I - list -- a linked list's head node,
    k -- how far away from the end we want to get to
O - the value of the node k spots from the end of the linked list.
C - if k is larger than the linked list then return undefined
  - if k is not provided return the last item in the list
  - o(n) time
  - o(1) space
E - list = [3] -> [[2] -> [[5] k >= 3    expect => undefined
  - list = [3] -> [[2] -> [[5] k = 2    expect => 3
  - list = [3] -> [[2] -> [[5] k = 1    expect => 2
  - list = [3] -> [[2] -> [[5] k = 0    expect => 5
*/
// var ll = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: {
// 					value: 5,
// 					next: {
// 						value: 6,
// 						next: {
// 							value: 7,
// 							next: {
// 								value: 8,
// 								next: null
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }; // end ll
// console.log(kthToLast(ll)); // zero based

module.exports = kthToLast;
