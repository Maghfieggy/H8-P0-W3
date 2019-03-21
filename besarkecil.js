function tukarBesarKecil(kalimat) {
  // you can only write your code here!

var abjad = 'abcdefghijklmnopqrstuvwxyz ';
var abjadCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
var output = '';
	


	for (var i = 0; i < kalimat.length; i++){
		for( var j = 0; j < abjadCaps.length; j++){

			if (kalimat [i] === abjadCaps[j]){
				output += abjad[j];
			} else if (kalimat [i] === abjad[j]){
				output += abjadCaps[j];
			}   
	}

}
return output;


}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"