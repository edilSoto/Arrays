import './assets/css/styles.css';

const pushButton = document.querySelector('#push');
const unshiftButton = document.querySelector('#unshift');
const insertAtButton = document.querySelector('#insertAt');
const popButton = document.querySelector('#pop');
const shiftButton = document.querySelector('#shift');
const removeAtButton = document.querySelector('#removeAt');
const arrayLabel = document.querySelector('label');

const arrEmojis = [`0x1F480`, '0x1F383', '0x1F47B', '0x2B50', '0x1F525']; 
let count = 0;

pushButton.addEventListener('click', () => {

    (count === arrEmojis.length) ? count = 0 : '';

    arrayLabel.innerText
    arrayLabel.innerText = String.fromCodePoint(arrEmojis[count]);
    
    count += 1;
})