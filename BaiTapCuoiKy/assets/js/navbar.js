const search_btn = document.querySelector('.search-btn');
const nonsearch = document.querySelector('.nonsearch');
const nonsearch2 = document.querySelector('.nonsearch2');
const nonsearch3 = document.querySelector('.nonsearch3');
const nonsearch4 = document.querySelector('.nonsearch4');
const nonsearch5 = document.querySelector('.nonsearch5');
const search_bar = document.querySelector('.login-email');

const list_btn = document.getElementById("menu-button");
const list_content = document.querySelector('.nav-list-mobile');
const modal = document.querySelector('.modal');

const mq = window.matchMedia("(min-width: 700px)")
mq.addListener(() =>{
    if (mq.matches) {
        list_btn.classList.remove('is-opened');
        modal.style.display = 'none';
        list_content.classList.add('growUp');
        setTimeout(() => {
            list_content.style.display = 'none';
        }, 200);
    }
})

// search_btn.addEventListener('click', () => {
//     if (nonsearch.style.display == 'none') {
//         nonsearch.style.display = 'block';
//         nonsearch2.style.display = 'block';
//         nonsearch3.style.display = 'block';
//         nonsearch4.style.display = 'block';
//         nonsearch5.style.display = 'block';
//         search_bar.style.display = 'none';
//     } else {
//         nonsearch.style.display = 'none';
//         nonsearch2.style.display = 'none';
//         nonsearch3.style.display = 'none';
//         nonsearch4.style.display = 'none';
//         nonsearch5.style.display = 'none';
//         search_bar.style.display = 'block';
//     }
// })

list_btn.addEventListener('click', () => {
    if (list_btn.classList.contains('is-opened')) {
        list_btn.classList.remove('is-opened');
        modal.style.display = 'none';
        list_content.classList.add('growUp');
        setTimeout(() => {
            list_content.style.display = 'none';
        }, 200);
    } 
    else {
        list_content.classList.remove('growUp');
        list_content.style.display = 'flex';
        list_btn.classList.add('is-opened');
        modal.style.display = 'block';
    }
})
