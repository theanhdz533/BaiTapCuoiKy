const input_1 = document.querySelector('.input-1');
const input1 = document.querySelector('.input1');

const input_2 = document.querySelector('.input-2');
const input2 = document.querySelector('.input2');

input_1.addEventListener('click', () => {
    if (input1.type == 'password') {
        input1.type = 'text';
        input_1.style.opacity = '1';
    } else {
        input1.type = 'password';
        input_1.style.opacity = '0.1';
    }
})

input_2.addEventListener('click', () => {
    if (input2.type == 'password') {
        input2.type = 'text';
        input_2.style.opacity = '1';
    } else {
        input2.type = 'password';
        input_2.style.opacity = '0.1';
    }
})