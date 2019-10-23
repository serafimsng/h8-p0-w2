//1. Melakukan Looping Menggunakan While

var sentence = 'I love coding';
var number = 20;
var i = 0;

console.log('LOOPING PERTAMA');
while(i <= number){
	i++;
	if (i%2 == 0) {
		console.log(i + ' - ' + sentence);
	}
}
number = 1
sentence = 'I will become fullstack developer';

console.log('LOOPING KEDUA');
while(i > number){
	i--;
	if (i%2 == 0) {
		console.log(i + ' - ' + sentence);
	}
}

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
number = 20;
sentence = 'I love coding'

for (var i = 1; i <= number; i++ ) {
	console.log(i + ' - ' + sentence);
}

console.log('LOOPING KEDUA');
sentence = 'I will become fullstack developer'
number = 1;
for (var i = 20; i >= number; i--){
	console.log(i + ' - ' + sentence);
}

//3. Angka Ganjil dan Genap

//pertambahan counter 1
var counter = 1;
var ganjil = 'Ganjil';
var genap = 'Genap';

while(counter <=100){
	if (counter % 2 === 0) {
		console.log('counter sekarang: '+ counter);
		console.log(genap);
	}else{
		console.log('counter sekarang: '+ counter);
		console.log(ganjil);
	}
	counter++
}

// pertambahan counter 2
counter = 1;
var nol = '" "';
var kelipatan = 'KELIPATAN 3';

while(counter <=100){
	if (counter % 3 === 0) {
		console.log('counter sekarang: '+ counter);
		console.log(counter+ " "+ kelipatan);
	}else{
		console.log('counter sekarang: '+ counter);
		console.log(nol);
	}
	counter++
}

// pertambahan counter 5
counter = 1;
var nol = '" "';
var kelipatan = 'KELIPATAN 6';

while(counter <=100){
	if (counter % 6 === 0) {
		console.log('counter sekarang: '+ counter);
		console.log(counter+ " "+ kelipatan);
	}else{
		console.log('counter sekarang: '+ counter);
		console.log(nol);
	}
	counter++
}

// pertambahan counter 9
counter = 1;
var nol = '" "';
var kelipatan = 'KELIPATAN 10';

while(counter <=100){
	if (counter % 10 === 0) {
		console.log('counter sekarang: '+ counter);
		console.log(counter+ " "+ kelipatan);
	}else{
		console.log('counter sekarang: '+ counter);
		console.log(nol);
	}
	counter++
}