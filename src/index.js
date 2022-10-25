import './assets/css/styles.css';

const pushButton = document.querySelector('#push');
const unshiftButton = document.querySelector('#unshift');
const insertAtButton = document.querySelector('#insertAt');
const popButton = document.querySelector('#pop');
const shiftButton = document.querySelector('#shift');
const removeAtButton = document.querySelector('#removeAt');
const arrayLabel = document.querySelector('label');
const fieldSetAdd = document.querySelector('#addItem');
const fieldSetRemove = document.querySelector('#removeItem');

const referenceArray = [];
const arrEmojis = ['💩', '👽', '🤖', '😸', '👹', '👾'];

let count = 0;

let indexAdd = document.createElement('input');
indexAdd.type = 'number';
indexAdd.min = 0;
indexAdd.max = 0;

let indexRemove = document.createElement('input');
indexRemove.type = 'number';
indexRemove.min = 0;
indexRemove.max = 0;

fieldSetAdd.appendChild(indexAdd);
fieldSetRemove.appendChild(indexRemove);

const adjustValues = (arr) => {
    indexAdd.max = arr.length - 1;
    indexRemove.max = arr.length - 1;
    indexAdd.value = 0;
    indexRemove.value = 0;
    count += 1;
}

pushButton.addEventListener('click', () => {

    (count === arrEmojis.length) ? count = 0 : '';

    referenceArray.push(arrEmojis[count]);
    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;
    adjustValues(referenceArray);
})

unshiftButton.addEventListener('click', () => {

    (count === arrEmojis.length) ? count = 0 : '';

    referenceArray.unshift(arrEmojis[count]);
    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;
    adjustValues(referenceArray);
})

popButton.addEventListener('click', () => {

    referenceArray.pop();

    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;

    adjustValues(referenceArray);
})

shiftButton.addEventListener('click', () => {

    referenceArray.shift();

    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;

    adjustValues(referenceArray);
})

insertAtButton.addEventListener('click', () => {

    (count === arrEmojis.length) ? count = 0 : '';

    referenceArray.splice(indexAdd.value, 0, ` ${(arrEmojis[count])}`);

    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;

    adjustValues(referenceArray);
})

removeAtButton.addEventListener('click', () => {
    
    referenceArray.splice(indexRemove.value, 1);

    arrayLabel.innerText = `[${referenceArray.join(', ')}]`;

    adjustValues(referenceArray);
})