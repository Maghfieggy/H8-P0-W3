function digitPerkalianMinimum(angka) {
  // you can only write your code here!

var arr = [];

for (var i = angka; i >= 0; i--){
	if (angka % i === 0){
		arr.push(i);
	}
}

var length1  = arr.length-1;
var arr1 = [];

for (var j = 0; j <= arr.length; j++){

	arr1.push('' + arr[j] +arr[length1]);
	length1 --;
}

var shortlength = 0;

for (var k = 0; k <= arr1.length-1; k++){
	if ( k === 0){
		shortlength = arr1[k].length;
	}else {
		if (arr1[k].length < shortlength){
			shortlength = arr1[k].length;


		}
	}
}

if (angka === 1) {
	shortlength = 2;

}

return shortlength;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2