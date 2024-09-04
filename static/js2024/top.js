
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onmouseover = function () {
    menu.classList.add('active');
}

toggle.onmouseout = function () {
    menu.classList.remove('active');
}
toggle.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
    });
}
