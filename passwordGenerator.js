function changeVocals (str) {
  //code di sini
 var result = '';
  var setelahVocal = 'abijuvefop';
  for(var i=0;i<str.length;i++){
      if('aiueo'.indexOf(str[i])!=-1 || 'AIUEO'.indexOf(str[i])!=-1){
       for(var j=0;j<setelahVocal.length;j++){
        if(str[i]==setelahVocal[j]){
          result += setelahVocal[j+1];
        }
        if(str[i]==setelahVocal[j].toUpperCase()){
          result += setelahVocal[j+1].toUpperCase();
        }
       }
      }
      else{
       result += str[i];
      }
  }
  return result;

}

function reverseWord (str) {
  //code di sini
var result = '';
  for(var i=str.length-1;i>=0;i--){
    result += str[i];
  }
  return result;

}

function setLowerUpperCase (str) {
  //code di sini
  var result = ''
  for(var i=0;i<str.length;i++){
    if(str[i] == str[i].toUpperCase()){
      result += str[i].toLowerCase()
    }
    else{
      result += str[i].toUpperCase()
    }
  }
  return result

}

function removeSpaces (str) {
  //code di sini
var result = ''
  for(var i=0;i<str.length;i++){
    if(str[i]!=' '){
      result += str[i]
    }
  }
  return result

}

function passwordGenerator (name) {
  //code di sini

if (name.length < 5 ){
	return 'Minimal karakter yang diinputkan adalah 5 karakter';
} else {
  var newVocal = changeVocals(name);
  var reverse = reverseWord(newVocal);
  var lowerUpperCase = setLowerUpperCase(reverse);
  var noSpace = removeSpaces(lowerUpperCase);
  return noSpace;
}
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'