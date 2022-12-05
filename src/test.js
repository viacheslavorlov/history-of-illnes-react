const operationTimeEnd = '12:30'


const afterOperation = (Number.parseInt(operationTimeEnd.substring(0, 3)) + 1) + ':' + operationTimeEnd.substring(3);
console.log(afterOperation)