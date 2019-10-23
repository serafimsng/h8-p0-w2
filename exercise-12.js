

function konversiMenit(mnt){
	var jam = Math.floor(mnt/60)
	var menit = mnt%60
	if(menit<=9){
		return `${jam}:0${menit}`
	}
	return `${jam}:${menit}`

}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00