function createFrame(number) {
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
    let container = document.querySelector('.frameOfGame');
    container.appendChild(div);
  }
}

createFrame(16);

function reset() {
  const squaresPainted = document.querySelectorAll('.hover');
  for (let i = 0; i < squaresPainted.length; i++) {
    squaresPainted[i].classList.toggle('hover');
  }
}

resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', reset);

confirm("hola")