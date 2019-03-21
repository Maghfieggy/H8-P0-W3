function ubahHuruf(kata) {
  // you can only write your code here!

var abjad = 'abcdefghijklmnopqrstuvwxyz';
var a = 0;
var nextword = '';

for (var i = 0; i < kata.length; i++){
	a = abjad.indexOf(kata[i]);

	nextword += abjad[a+1];
}

return nextword;

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu