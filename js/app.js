console.log('connection successfull');

const btnRed = document.querySelector('#btnRed');

let counter = 0;
btnRed.addEventListener('click', () => {
    counter++;
    console.log(counter)
    if (counter === 9) {
        btnRed.style.backgroundColor = '#000';
    }
    else {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        btnRed.style.backgroundColor = '#' + randomColor;
    }
})