function getSum1(num1: number, num2: number): number {
	return num1 + num2;
}

// console.log(getSum(1, 4));

let getSum2 = function(num1: any, num2: any): number {
	if (typeof num1 == 'string') {
		num1 = parseInt(num1);
	}

	if (typeof num2 == 'string') {
		num2 = parseInt(num2);
	}
	return num1 + num2;
};

// console.log(getSum1(3, 5));
// console.log(getSum2(3, '2'));

// We input strings, and return a string. second param is optional.
function getName(firstName: string, lastName?: string): string {
	if (lastName === undefined) {
		return firstName;
	}
	return firstName + ' ' + lastName;
}

console.log(getName('John'));

// Takes void and returns void - essentially nothing.
function myVoid(): void {
	return;
}
