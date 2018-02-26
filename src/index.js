module.exports = function getZerosCount(number) {
	let pow = 2;
	let zerosCount = 0;
	for (let i = 1; i < pow; i++) {
		let currNum = Math.floor(number / Math.pow(5, [i]));
		zerosCount += currNum;
		if (currNum <= 1) {
			return zerosCount;
		} else {
			pow += i;
		}
	}
};
