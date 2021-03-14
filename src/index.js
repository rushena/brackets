module.exports = function check(str, bracketsConfig) {
	const strToArr = str.split('');
	const leftBrackets = [];
	const rightBrackets = [];
	const sameBrackets = [];
	let checkStr = '';
	
	bracketsConfig.forEach(([left, right]) => {
		if (left === right) {
			sameBrackets.push(left)
		} else {
			leftBrackets.push(left);
			rightBrackets.push(right);
		}
	});

	strToArr.forEach(item => {
		if (checkStr === null) return;

		if (leftBrackets.includes(item)) {
			checkStr += item;
		} else if (rightBrackets.includes(item)) {
			if (checkStr.slice(-1) === leftBrackets[rightBrackets.indexOf(item)]) {
				checkStr = checkStr.slice(0, -1);
			} else {
				checkStr = null
			}
		} else if (checkStr.includes(item)) {
			if (checkStr.slice(-1) === item) {
				checkStr = checkStr.slice(0, -1);
			} else {
				checkStr = null
			}
		} else {
			checkStr += item;
		}
	});

	return checkStr === "";
}
