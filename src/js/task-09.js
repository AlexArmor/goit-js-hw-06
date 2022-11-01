function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyVariable: document.querySelector('body'),
  btnColor: document.querySelector('.change-color'),
  colorInfo: document.querySelector('.color'),
}

refs.btnColor.addEventListener('click', () => {
  refs.bodyVariable.style.backgroundColor = getRandomHexColor();
  refs.colorInfo.textContent = refs.bodyVariable.style.backgroundColor;
});