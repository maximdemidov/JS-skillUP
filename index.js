function checkIfString(input) {
    return typeof input === 'string';
  }
  
  function parseAndCheckIfString(input) {
    return checkIfString(input) ? input : null;
  }
  
  function checkIfNumber(input) {
    return typeof input === 'number' && !isNaN(input);
  }
  
  function parseAndCheckIfNumber(input) {
    const number1 = +input;
    const number2 = parseFloat(input);
  
    if (number1 === number2) {
      return number1;
    }
  
    return null;
  }
  
  
  function getUserInput(type, inputFunc = prompt) {
    const input = inputFunc();
  
    if (input === null) {
      return null;
    }
  
    switch (type) {
      case 'string':
        return parseAndCheckIfString(input);
      case 'number':
        return parseAndCheckIfNumber(input);
    }
  
    if (typeof type === 'function') {
      return type(input);
    }
  
    return null;
  }
  
  console.log(getUserInput('string'));
  console.log(getUserInput('number'));
  
  function test(func, inputArgs = [], expectedResult) {
    const result = func(...inputArgs);
  
    console.log('---------------\n');
  
    if (result === expectedResult) {
      console.log('%cTest pass!', 'color: #45A163; font-weight: bold;');
      return true;
    }
  
    console.log('%cTest fail!', 'color: red; font-weight: bold;');
    console.log({ func, inputArgs, result, expectedResult });
  
    return false;
  }
  
//   test(getUserInput, ['number', () => 123], 123);
//   test(getUserInput, ['number', () => null], null);
//   test(getUserInput, ['number', () => '345'], 345);
//   test(getUserInput, ['number', () => 'asdfsadf'], null);
//   test(getUserInput, ['number', () => ''], null);
//   test(getUserInput, ['number', () => '345asdfasdf'], null);
  
  function checkIfTriangle(a = 0, b = 0, c = 0) {
    if (![a,b,c].every(checkIfNumber)) {
      return false;
    }
  
    if (a + b <= c || a + c <= b || b + c <= a) {
      return false;
    }
  
    return true;
  }
  
  function getTriangleSquare(a = 0, b = 0, c = 0) {
    if (!checkIfTriangle(a, b, c)) {
      return null;
    }
  
    const p = (a + b + c) / 2;
    const square = Math.sqrt(
      p * (p - a) * (p - b) * (p - c)
    );
  
    return square;
  }
  
  // test(getTriangleSquare, [3,4,5], 6);
  // test(getTriangleSquare, [1,2,3], null);
  // test(getTriangleSquare, [-3,-4,-5], null);
  // test(getTriangleSquare, ['3','4','5'], null);
  // test(getTriangleSquare, [3.1,4.1,5.1], 6.354173333329834);
  // test(getTriangleSquare, [], null);
  // test(getTriangleSquare, [null, null, null], null);
  // test(getTriangleSquare, [{}, {}, {}], null);
  // test(getTriangleSquare, [NaN, NaN, NaN], null);
  
  // const a = getUserInput('number');
  // const b = getUserInput('number');
  // const c = getUserInput('number');
  
  // console.log(getTriangleSquare(a, b, c));