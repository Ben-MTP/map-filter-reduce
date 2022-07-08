/**
 * Sử dụng Map() trong Javascript:
 */
const myArrayMap = [1,2,3,4,5,6,7,8,9];
const myArrayTimesTwo = myArrayMap.map((value, index, array) => {
	return "value: " + value * 2 + " index: " + index + " array: " + array;
});

console.log(myArrayMap);
console.log(myArrayTimesTwo);




/**
 * Sử dụng Filter trong Javascript:
 */
const myArray = [1,2,3,4,5];

const myEvenArray = myArray.filter((value, index, array) => {
	return value % 2 ===0;
});

console.log(myArray);
console.log(myEvenArray);


