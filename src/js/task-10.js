function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputField: document.querySelector('input'),
  btnCreat: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesList: document.querySelector('#boxes'),
  sizeStart: 30,
}

const array = [];

refs.btnCreat.addEventListener('click', creatElements);

function creatElements() {
  console.log(refs.sizeStart);
  const box = document.createElement('div');
  box.style.backgroundColor = 
}

// function creatElements() {
//   let markup = "";
//   let size = 30;
//   const amount = Number(refs.inputField.value);
//   for (let i = 0; i < amount; i += 1) {
//     size += 10;
//     markup += `<div bgcolor="${getRandomHexColor()}" width="${size}" height="${size}"></div>`;
//   }
//   refs.boxesList.insertAdjacentHTML("beforeend", markup);
//   console.log(refs.boxesList);
// }


// refs.inputField.addEventListener('input', (event) => {
//   const amount = event.currentTarget.value;
//   console.log(amount);
//   console.dir(refs.inputField);
//   refs.btnCreat.addEventListener('click', (amount) => {
//     createBoxes(amount);
//   })
// });

// function createBoxes(amount) {
//   let markup = "";
//   let size = 30;
//   for (let i = 0; i < Number(amount); i += 1) {
//     size += 10;
//     markup += `<div bgcolor="${getRandomHexColor()}" width="${size}" height="${size}"></div>`;
//   }
//   refs.boxesList.insertAdjacentHTML("beforeend", markup);
//   console.log(refs.boxesList);
// }