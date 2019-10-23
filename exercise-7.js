//1. Menyusun Barisan Bintang

var rows = 3;
var count = 0;
var bintang = "*";

while(count<rows){
	console.log(bintang);
	count++;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 3;
var bintang;

for (var i = 0; i < rows2; i++){
	bintang = ""
	for (var j = 0; j < rows2; j++){
		bintang +="*";
	}
	console.log(bintang);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

 var rows3 = 4;
 var bintang = "";

    for (var i = 1; i <= rows3; i++) {
        for (var j = 1; j <= i; j++) {
            bintang+="*";
        }
        console.log(bintang);
        bintang="";
    }
