// Assign document variables

const body = document.querySelector('body');
const button = document.querySelector('#btn');
const hexVale = document.querySelector('#hex-value');

//Creat an hex construct array
const hexArray = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];

/**
 * ** Add an event listener button click
 */
button.addEventListener('click', hexChange);

//Hex change function
function hexChange() {
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexArray.length);
    hex += hexArray[index];
  }
  hexVale.textContent = hex;
  body.style.backgroundColor = hex;
}
