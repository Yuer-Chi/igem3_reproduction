// 获取元素
const sidebar = document.querySelector('.myScrollspy');
const mainContent = document.querySelector('.myPage-main-content');
const scrollBar = document.querySelector('.scroll-bar');

// 更新滚动条高度的函数
function updateScrollBar() {
    const sidebarHeight = sidebar.clientHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const contentHeight = mainContent.scrollHeight;
    const viewportHeight = window.innerHeight;

    // 计算滚动条的高度
    const scrollBarHeight = (scrollPosition / (contentHeight - viewportHeight)) * sidebarHeight;
    
    // 设置滚动条的高度
    scrollBar.style.height = `${scrollBarHeight}px`;

    // 显示或隐藏滚动条
    if (scrollPosition > 0) {
        scrollBar.classList.add('visible');
    } else {
        scrollBar.classList.remove('visible');
    }
}

// 侧边栏滚动效果开始
const sidebarLinks = document.querySelectorAll('.sidebar-link');

function updateSidebarLinks() {
    const scrollPosition = window.scrollY;

    sidebarLinks.forEach((link) => {
        // 获取目标内容区块的 ID
        const targetSectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop - 90; // 上移
            const sectionHeight = targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                sidebarLinks.forEach((link) => link.classList.remove('current'));
                link.classList.add('current');
            }
        }
    });
}

// 为每个侧边栏链接添加点击事件监听器
sidebarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认的链接行为

        const targetSectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        const targetOffset = targetSection.offsetTop - 30;

        window.scrollTo({ top: targetOffset, left: 0, behavior: 'smooth' });

        sidebarLinks.forEach((sidebarLink) => sidebarLink.classList.remove('current'));
        link.classList.add('current');
    });
});

// 页面首次加载时更新侧边栏链接状态
document.addEventListener('DOMContentLoaded', function () {
    updateSidebarLinks();
});

// 滚动事件监听器
window.addEventListener('scroll', function () {
    updateSidebarLinks();
    updateScrollBar();
});

// 加载完成后更新滚动条和侧边栏链接状态
window.addEventListener('load', function () {
    updateSidebarLinks();
    updateScrollBar();
});

// 监听窗口大小变化以更新滚动条
window.addEventListener('resize', function () {
    updateScrollBar();
});

// 页面首次加载时更新滚动条
document.addEventListener('DOMContentLoaded', function () {
    updateScrollBar();
});

// 滚动事件监听器
window.addEventListener('scroll', function () {
    updateScrollBar();
});

// 加载完成后更新滚动条
window.addEventListener('load', function () {
    updateScrollBar();
});

// 监听窗口大小变化以更新滚动条
window.addEventListener('resize', function () {
    updateScrollBar();
});
