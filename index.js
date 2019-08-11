// // сперд оператор

// const obj1 = { foo: 'bar', samekey: '1'};
// const obj2 = { foo: 'bar2' ,samekey:'2'};
// const obj3 = {
//     samekey: '3',
//     ...obj1,
//     ...obj2,
//     customkey : 'customValue',
// };
// //console.log(obj3);

// //
// const { samekey } = obj3;
// const nextObj3 = {...obj3};
// delete nextObj3.samekey;

// const[first, second, ...nextArr] = [1,2,3,4,5,6,7];

// //console.log(first, second, ...nextArr);

// function helloUser ({firstName , lastName}) {
//    // console.log ('Hello' + ' ' + firstName + ' ' + lastName + '!');
// }
// helloUser({
//     firstName: 'Max',
//     lastName: 'Demidov',
// });



const a = 'lolkek'
const obj = {
    a,
};

function getUserInput(type, inputFunc = prompt) {
    const input = inputFunc();

    if (input === null) {
        return null;
    }

    switch (type) {
        case 'string':
            return input;
        case 'number':
            if (input === '') {
                return null;
            }
            const number = +input;
            return isNaN(number) ? null : number;
    }

    return null;
}
// console.log(getUserInput('string'));
// console.log(getUserInput('number'));

// test
function test(func, inputArgs = [], expectedResult) {
    const result = func(...inputArgs);

    // console.log ('--------/n')

    if (result === expectedResult) {
        // console.log('%c Test pass!', 'color: #45A163');
        return true;
    }
    // console.log('%c Test fail!', 'color: red');
    // console.log({func, inputArg, result, expectedResult});
}

// test(getUserInput, ['number', () => 123], 123);
// test(getUserInput, ['number', () => null], null);
// test(getUserInput, ['number', () => '345'], 345);
// test(getUserInput, ['number', () => 'asdfg'], null);
// test(getUserInput, ['number', () => ''], null);

function checkIfNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}

function checkIfTriangle(a = 0, b = 0 , c = 0) {

    if(![a,b,c].every(checkIfNumber)) {
        return false;
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    } 
    return true;
}

function getTriangleSquare(a = 0, b = 0 , c = 0) {
    if (!checkIfTriangle(a, b, c)) {
        return null;
    }

    const p = (a + b + c) / 2;
    const square = Math.sqrt (
        p * (p - a) * (p - b) * (p - c)
    );
    return square;
}
test(getTriangleSquare, [3 , 4 , 5], 6);
test(getTriangleSquare, [1 , 2 , 3], null);
test(getTriangleSquare, [-3 , -4 , -5], null);
