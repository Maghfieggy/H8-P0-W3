function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

if (arrPenumpang === 0 ){
	return '[]';
}

var awalnaik = 0;
var tujuan = 0;
var output = [];

for (var i = 0 ; i < arrPenumpang.length; i++){
	for (var j = 0; j < rute.length; j++){
		if (arrPenumpang [i][1] === rute[j]){
			awalnaik = j;
		}

		if (arrPenumpang [i][2] === rute[j]){
			tujuan = j;
		}

	}
		output.push( { penumpang : arrPenumpang[i][0],
			naikDari : arrPenumpang[i][1],
			tujuan :  arrPenumpang[i][2],
			bayar : (tujuan - awalnaik) * 2000

		}

			);

}
return output;


}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]