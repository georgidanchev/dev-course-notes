{
    var myString = void 0;
    var myNumber = void 0;
    var myBool = void 0;
    var myVar = void 0;
    /*
    let strArr: String[];
    let numArr: Number[];
  let boolArr: boolean[];
  */
    var strArr = void 0;
    var numArr = void 0;
    var boolArr = void 0;
    var strNumTuple = void 0;
    var myVoid = undefined;
    var myNull = null;
    var myUndefined = null;
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
