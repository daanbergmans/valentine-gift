const words = [
	'No', 
	'Are you sure?', 
	'Really sure?', 
	'Think again!', 
	'Last chance!', 
	'Ok one more!', 
	'I forgive you for misclicking',
	'You might regret this',
	'Are you certain?',
	'Don\'t be hasty!',
	'Second thoughts?',
	'Still deciding?',
	'Reflect a bit.',
	'Pause for thought.',
	'Any doubts left?',
	'Double-checking?',
	'Sleep on it?',
	'Final answer?',
	'No turning back?',
	'Last call!',
	'Convinced, huh?',
	'Still not convinced?',
	'Absolutely no way?',
	'100% sure?',
	'Final decision?',
	'Forever saying no?',
	'Unchangeable verdict?',
];

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
	hide('div_Yes');
	hide('img_bear_yes');

	getElement('btn_Yes').addEventListener('click', () => handleYes());
	getElement('btn_No').addEventListener('click', () => handleNo());

	getElement('btn_No').innerHTML = words[currentIndex];
});

const handleYes = () => {
	hide('div_InputContainer');
	show('div_Yes');
	hide('img_bear');
	show('img_bear_yes');
}

const handleNo = () => {
	currentIndex++;

	if (currentIndex >= words.length) {
		console.log(currentIndex - words.length)
		getElement('btn_No').innerHTML = `I\'ll be ${'very '.repeat(currentIndex - words.length + 1)} sad`;
	} else {
		getElement('btn_No').innerHTML = words[currentIndex];
	}

	getElement('btn_Yes').style.height = `${(currentIndex + 1) * 2}rem`;
	getElement('btn_Yes').style.fontSize = `${(currentIndex + 1) * 0.5}rem`;
}

const show = (id) => getElement(id).style.display = 'block';
const hide = (id) => getElement(id).style.display = 'none';

const getElement = (id) => document.querySelector(`#${id}`);
