function xo(str) {
var i;
var j;
i=0;
j=0;
	for (var a = str.length-1; a >= 0; a-- ){
		if(str[a] == 'x'){
		i += 1
			}else{
		j += 1
		}
	}
if (i == j) {
	return true
}else{
	return false
}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
