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

refs.btnCreat.addEventListener('click', () => {
  createBoxes(Number(refs.inputField.value))
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${refs.sizeStart}px`;
    box.style.height = `${refs.sizeStart}px`;
    array.push(box);
    refs.sizeStart += 10;
    console.dir(refs.boxesList);
  }
  refs.boxesList.append(...array);
}

refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  [...refs.boxesList.children].forEach(el => el.remove());
  array.splice(0, array.length);
  refs.sizeStart = 30;
}


// function createBoxes(amount) {
//   let markup = "";
//   for (let i = 0; i < amount; i += 1) {
//     markup += `<div style='background-color: ${getRandomHexColor()}; width: ${refs.sizeStart}px; height: ${refs.sizeStart}px'></div>`;
//     refs.sizeStart += 10;
//   }
//   refs.boxesList.insertAdjacentHTML("beforeend", markup);
//   console.log(refs.boxesList);
// }
