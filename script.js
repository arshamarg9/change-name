const title = document.getElementById('title');
const inputBox = document.getElementById('input-box');
const colorBox = document.getElementById('color-box');
const link = document.querySelector('.btn');

link.addEventListener('click', () => {
    title.textContent = inputBox.value;
});