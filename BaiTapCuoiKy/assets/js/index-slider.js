const slider_movement = document.querySelectorAll('.slider-movement');
const slider_movement3d = document.querySelectorAll('.slider-movement3d');
const slider_down = document.querySelectorAll('.slider-down');
const slider_size = document.querySelector('.slider-size');
const cumeReveal = document.querySelector('.cumeReveal');
const textReveal = document.querySelectorAll('.textReveal');
const content_game = document.querySelector('.content_game');
const content_what = document.querySelector('.content_what');
const content_new = document.querySelector('.content_news');
const slider_com = document.querySelectorAll('.slide-com');
const content_icon = document.querySelectorAll('.content_icon');
const content_circle = document.querySelector('.content_commnunity-circle');
const content_text_pop = document.querySelector('.content_community-text');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    // console.log(scroll);
    console.log(window.innerHeight);

    content_circle.style.transform = `scale(${scroll - 1650}%)`;

    if (scroll >= 1700) {
        slider_com.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateX(${scroll * - speed}px)`;
            element.style.color = 'var(--white-color)'
            element.style.textShadow = 'none';
        })
    }

    if (scroll < 2300) {
        slider_com.forEach(element => {
        element.style.animation = 'none ';
        })
        
        content_icon.forEach(element => {
            let delay = element.dataset.delay;
            element.style.animation = `fadeOut ease-out 0.2s forwards`;
        })
    }

    if (scroll >= 2300) {
        slider_com.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateX(${2300 * - speed}px)`;
            element.style.color = 'var(--yellow-color)';
            element.style.animation = 'textPop ease 0.3s forwards';
        })

        content_icon.forEach(element => {
            let delay = element.dataset.delay;
            element.style.animation = `fadeInIcon ease-out 0.3s forwards ${delay}s`;
        })
    }

    slider_movement.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * - speed}px)`;
    })

    slider_movement3d.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translate3d(${scroll * - speed}px)`;
    })

    slider_down.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    if (scroll >= 170 && scroll < 230) {
        slider_size.style.animation = 'colorChange ease 0.5s forwards';
    }

    if (scroll < 700) {
        content_what.style.opacity = '1';
    }

    if (scroll >= 700) {
        textReveal.forEach (element => {
            let delay = element.dataset.delay;
            element.style.animation = `textReveal linear 0.3s forwards ${delay}s`;
        })
        content_what.style.opacity = '0';
    }

    if (window.matchMedia("(max-width: 700px)").matches) {
        if (scroll < 1480) {
            content_game.style.opacity = '1';
        }
    
        if (scroll >= 1480) {   
            content_game.style.opacity = '0';
        }  
    } else {
        if (scroll < 1550) {
            content_game.style.opacity = '1';
        }
    
        if (scroll >= 1550) {
            content_game.style.opacity = '0';
        }       
    }
})