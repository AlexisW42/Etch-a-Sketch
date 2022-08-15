function createCanvas(number) {
  const parent = document.querySelector('.canvasOfGame');
  parent.innerHTML = '';

  for (let i = 0; i < number; i++) {
    const div = document.createElement('div');
    div.classList.toggle('column'); 

    for (let j = 0; j < number; j++) {
      let square = document.createElement('div');
      square.classList.toggle('square'); 
      square.addEventListener('mouseover', () => {
        square.classList.add('hover');
      });
      div.appendChild(square);
    }
    let container = document.querySelector('.canvasOfGame');
    container.appendChild(div);
  }
}

createCanvas(16);

function reset() {
  if(confirm("are you sure?")){
    const squaresPainted = document.querySelectorAll('.hover');
    for (let i = 0; i < squaresPainted.length; i++) {
      squaresPainted[i].classList.toggle('hover');
    }
  }
}

function changeGridSize() {
  let size = prompt("Enter your preferred size, it must be equal or less than 100");
  if (size<=100 && size >=1)
    createCanvas(size);
  else
    alert("You must enter a valid value");
}

const changeGrid = document.querySelector('#changeGrid');
changeGrid.addEventListener('click', changeGridSize);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);