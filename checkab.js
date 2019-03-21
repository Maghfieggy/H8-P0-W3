function checkAB(num) {
  // you can only write your code here!

var array = num.split('');

// console.log(array);

  for (var i = 0 ; i < array.length ; i++) {
    // console.log(array[i])
  
  if (array[i]==='a')
  if (array[i+4]==='b')
  return true;
  
  if (array[i]==='b')
  if (array[i+4]==='a')
  return true;
}

  return  false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false