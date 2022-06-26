const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');

const but1 = document.querySelector('.but1');
const but2 = document.querySelector('.but2');
const but3 = document.querySelector('.but3');
const but4 = document.querySelector('.but4');
const but5 = document.querySelector('.but5');


let i = 0;

function changeBut() {
    if (i==0) {
        but1.classList.add('content_feature--selected');
        but2.classList.remove('content_feature--selected');
        but3.classList.remove('content_feature--selected');
        but4.classList.remove('content_feature--selected');
        but5.classList.remove('content_feature--selected');
        box1.style.display = 'block';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
    }
    if (i==1) {
        but2.classList.add('content_feature--selected');
        but1.classList.remove('content_feature--selected');
        but3.classList.remove('content_feature--selected');
        but4.classList.remove('content_feature--selected');
        but5.classList.remove('content_feature--selected');
        box1.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'none';
        box2.style.display = 'block';
    }
    if (i==2) {
        but3.classList.add('content_feature--selected');
        but2.classList.remove('content_feature--selected');
        but1.classList.remove('content_feature--selected');
        but4.classList.remove('content_feature--selected');
        but5.classList.remove('content_feature--selected');
        box4.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box5.style.display = 'none';
        box3.style.display = 'block';
    }
    if (i==3) {
        but4.classList.add('content_feature--selected');
        but1.classList.remove('content_feature--selected');
        but3.classList.remove('content_feature--selected');
        but5.classList.remove('content_feature--selected');
        but2.classList.remove('content_feature--selected');
        box5.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'block';
    }
    if (i==4) {
        but5.classList.add('content_feature--selected');
        but2.classList.remove('content_feature--selected');
        but3.classList.remove('content_feature--selected');
        but4.classList.remove('content_feature--selected');
        but1.classList.remove('content_feature--selected');
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
        box4.style.display = 'none';
        box5.style.display = 'block';
        i = 0;
        return;
    }
    i++;
}

changeBut();

setInterval(changeBut, 5000);

but1.addEventListener('click', () => {
    for (i=0; i < 5000; i++) {
        clearInterval(i);
    }
    i = 1;
    setInterval(changeBut, 5000);
    box1.style.display = 'block';
    box2.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    but1.classList.add('content_feature--selected');
    but2.classList.remove('content_feature--selected');
    but3.classList.remove('content_feature--selected');
    but4.classList.remove('content_feature--selected');
    but5.classList.remove('content_feature--selected');
})

but2.addEventListener('click', () => {
    for (i=0; i < 5000; i++) {
        clearInterval(i);
    }
    i = 2;
    setInterval(changeBut, 5000);
    box1.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box2.style.display = 'block';
    but2.classList.add('content_feature--selected');
    but1.classList.remove('content_feature--selected');
    but3.classList.remove('content_feature--selected');
    but4.classList.remove('content_feature--selected');
    but5.classList.remove('content_feature--selected');
})

but3.addEventListener('click', () => {
    for (i=0; i < 5000; i++) {
        clearInterval(i);
    }
    i = 3;
    setInterval(changeBut, 5000);
    box2.style.display = 'none';
    box1.style.display = 'none';
    box4.style.display = 'none';
    box5.style.display = 'none';
    box3.style.display = 'block';
    but3.classList.add('content_feature--selected');
    but1.classList.remove('content_feature--selected');
    but2.classList.remove('content_feature--selected');
    but4.classList.remove('content_feature--selected');
    but5.classList.remove('content_feature--selected');
})

but4.addEventListener('click', () => {
    for (i=0; i < 5000; i++) {
        clearInterval(i);
    }
    i = 4;
    setInterval(changeBut, 5000);
    box2.style.display = 'none';
    box1.style.display = 'none';
    box3.style.display = 'none';
    box5.style.display = 'none';
    box4.style.display = 'block';
    but4.classList.add('content_feature--selected');
    but1.classList.remove('content_feature--selected');
    but2.classList.remove('content_feature--selected');
    but3.classList.remove('content_feature--selected');
    but5.classList.remove('content_feature--selected');
})

but5.addEventListener('click', () => {
    for (i=0; i < 5000; i++) {
        clearInterval(i);
    }
    i = 0;
    setInterval(changeBut, 5000);
    box2.style.display = 'none';
    box1.style.display = 'none';
    box4.style.display = 'none';
    box1.style.display = 'none';
    box5.style.display = 'block';
    but5.classList.add('content_feature--selected');
    but1.classList.remove('content_feature--selected');
    but2.classList.remove('content_feature--selected');
    but4.classList.remove('content_feature--selected');
    but3.classList.remove('content_feature--selected');
})