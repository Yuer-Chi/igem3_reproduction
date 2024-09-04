document.addEventListener('DOMContentLoaded', function() {
    let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');  // 别忘了同时获取 menu 元素
    if (toggle && menu) {
        toggle.onmouseover = function() {
            menu.classList.add('active');
        };

        toggle.onmouseout = function() {
            menu.classList.remove('active');
        };

        toggle.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  // 平滑滚动效果
            });
        };
    }
});

// let toggle = document.querySelector('.toggle');
// let menu = document.querySelector('.menu');

// toggle.onmouseover = function () {
//     menu.classList.add('active');
// }

// toggle.onmouseout = function () {
//     menu.classList.remove('active');
// }
// toggle.onclick = function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // 平滑滚动效果
//     });
// }
// 失效力