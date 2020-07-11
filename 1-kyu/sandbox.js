function iqTest(numbers) {
	let x = numbers.split(' ');
	let bob = [],
		others = [],
		i,
		differs = numbers.length;

	for (i = 0; i < differs; i++) {
		if (x[i] % 2 === 0) {
			bob.push(i);
		} else {
			others.push(i);
		}

		if (i > 1 && bob.length > others.length && others.length > 0) {
			return others[0] + 1;
		}
		if (i > 1 && others.length > bob.length && bob.length > 0) {
			return bob[0] + 1;
		}
	}
}

console.log(iqTest('2 4 7 8 10'));
