export function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function randomNumberWhithSteps(stepsNum, step, min) {
	return Math.floor(Math.random() * stepsNum) * step + min;
}