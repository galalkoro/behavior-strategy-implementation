function nbYear(p0, percent, aug, p) {
	let i = 0;
	while (Boolean) {
		if (p0 >= p) return i;
		p0 = p0 * (1 + percent / 100) + aug;
		i++;
	}
}
console.log(nbYear(1000, 2, 50, 1200));
