function sorting(arrNumber) {
  // code di sini
 var length = arrNumber.length;
  
    for (var i = 0; i < length; i++) { 
       
        for (var j = 0; j < (length - i - 1); j++) { 
            
            if(arrNumber[j] > arrNumber[j+1]) {
                
                var tmp = arrNumber[j];  
                arrNumber[j] = arrNumber[j+1]; 
                arrNumber[j+1] = tmp;
            }
        }        
    }return arrNumber;


}

function getTotal(arrNumber) {
  // code di sini

var angka = arrNumber[arrNumber.length - 1];
var total = 0;

if(arrNumber.length === 0){
			return '';
		}
	for (var i = 0; i < arrNumber.length; i++ ){
		if (angka === arrNumber[i]){
			
			var total = total + 1;
		}

	}

return  'angka paling besar adalah ' + angka +  ' dan jumlah kemunculan sebanyak ' + total + ' kali'
;


}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''