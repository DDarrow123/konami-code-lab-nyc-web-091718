const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
let index = 0;
  function onKeyDown (e){

    if (e.key === codes[index]) {
      index++;

      if (index === codes.length) {

           alert('Hurray! You entered the right code');
           index = 0
      }
    } else {
        index = 0
      }
}
const docBody = document.querySelector('body')
  docBody.addEventListener('keydown', onKeyDown )
}
