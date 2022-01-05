let N = 13;
for (let i = 0; i < 10000; i++) {
	if (i != 0 && i % N === 2) console.log(`${i}`);
}