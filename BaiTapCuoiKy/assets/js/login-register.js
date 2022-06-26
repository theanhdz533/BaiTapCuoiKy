const register_switch = document.querySelector('.register-switch');
const login_switch = document.querySelector('.login-switch');
const non_reg = document.querySelector('.non_reg');
const reg_box = document.querySelector('.reg_box');

register_switch.addEventListener('click', () => {
        non_reg.style.display = 'none';
        reg_box.style.display = 'flex';
})

login_switch.addEventListener('click', () => {
    non_reg.style.display = 'flex';
    reg_box.style.display = 'none';
})