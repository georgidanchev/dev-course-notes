{
	let myString: string;
	let myNumber: number;
	let myBool: boolean;
	let myVar: any;

	/*
	let strArr: String[];
	let numArr: Number[];
  let boolArr: boolean[];
  */

	let strArr: Array<string>;
	let numArr: Array<number>;
	let boolArr: Array<boolean>;
	let strNumTuple: [string, number];

	let myVoid: void = undefined;
	let myNull: null = null;
	let myUndefined: undefined = null;

	myString = 'Hello World'.slice(0, 3);
	myNumber = 22;
	myBool = false;
	myVar = true;

	// Array of strings - int rejected
	strArr = ['hello', 'world', 1];

	// Array of numbers - string rejected
	numArr = [1, 2, 1, 'string'];

	// Array of booleans - int rejected
	boolArr = [true, true, true, 0];

	// Type defined array
	strNumTuple = ['Hello', 4];

	console.log(myVoid);
}
