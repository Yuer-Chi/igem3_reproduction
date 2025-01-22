// //Loading页面
// document.onreadystatechange=function () {
//     if (document.readyState=="complete"){
//          loadingFade();
//     }
// }
// function loadingFade() {
// var opacity=1;
// var loadingPage=document.getElementById('loading');
// var loadingBackground=document.getElementById('loading_bg');
// var time=setInterval(function () {
//     if (opacity<=0){
//          clearInterval(time);
//          loadingPage.remove();
//         //  ('#loading').remove();
//     }

//     // loadingBackground.style.opacity=opacity;
//     opacity-=0.4;
// },100);
// }

document.addEventListener("DOMContentLoaded", function () {
    loadingFade();
});




function loadingFade() {
    var opacity = 1;
    var loadingPage = document.getElementById('loader-wrapper');
    
    if (!loadingPage) {
        console.error('Element with id "loader-wrapper" not found.');
        return;  // 如果没有找到元素，直接返回
    }

    var time = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(time);
            loadingPage.remove();
        } else {
            loadingPage.style.opacity = opacity;
            opacity -= 0.05;
        }
    }, 50);
}
