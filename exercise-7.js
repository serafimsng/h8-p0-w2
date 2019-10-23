//1. Menyusun Barisan Bintang

var rows = 3;
var count = 0;
var bintang = "*";

while(count<rows){
	console.log(bintang);
	count++;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 4;
var count;
var col;
var bintang;

for (count = 0; count < rows2; count++){
	bintang = ""
	for (col = 0; col < rows2; col++){
		bintang +="*";
	}
	console.log(bintang);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 3;
var count = 0;
var col = 0;
var bintang = "*";

while(count < rows3){
	while(col < rows3){
	console.log(bintang);
	bintang+='*'
	col++
	}
	count++
}