const changeColor = document.querySelector(`#color-box`);
console.log(changeColor);
const changeButton = document.querySelector(`#change-btn`);
console.log(changeButton);

function handleChangeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  changeColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  

}

changeButton.addEventListener(`click`, handleChangeColor);
