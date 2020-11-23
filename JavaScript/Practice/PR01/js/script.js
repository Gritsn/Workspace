//Choose a random color
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['green', 'blue', 'red', 'purple', 'yellow'];
body.style.backgroundColor = 'green';
button.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
