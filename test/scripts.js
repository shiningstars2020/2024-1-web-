//function ToMain() {
//  window.location.href = '/web开发实训/main.html';
//}
//function ToHome() {
//  window.location.href = '/web开发实训/index.html';
//}


function ToMain() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = '/web开发实训/main.html'; 
    }, 500); 
}

function ToHome() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = '/web开发实训/index.html'; 
    }, 500); 
}

function ToMain() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = '/web开发实训/main.html'; 
    }, 500); 
}
function ToPG1() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage1.html'; 
    }, 500); 
}
function ToPG2() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage2.html'; 
    }, 500); 
}
function ToPG3() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage3.html'; 
    }, 500); 
}
function ToPG4() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage4.html'; 
    }, 500); 
}
function ToPG5() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage5.html'; 
    }, 500); 
}
function ToPG6() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage6.html'; 
    }, 500); 
}
function ToPG7() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage7.html'; 
    }, 500); 
}
function ToPG8() {
    const body = document.querySelector('body');
    body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'subpage/subpage8.html'; 
    }, 500); 
}

document.addEventListener("DOMContentLoaded", function() {
    const welcomeImg = document.getElementById('welcome-img');
    if (welcomeImg) {
        welcomeImg.style.filter = 'blur(10px)';
        welcomeImg.style.opacity = '0';
        setTimeout(() => {
            welcomeImg.style.transition = 'filter 2s ease-in-out, opacity 2s ease-in-out';
            welcomeImg.style.filter = 'blur(0)';
            welcomeImg.style.opacity = '1';
        }, 100); // 延迟100毫秒后开始渐显
    }

    const starImg = document.getElementById('star-img');
    if (starImg) {
        setTimeout(() => {
            starImg.classList.add('star-visible');
            starImg.classList.remove('star-hidden');
        }, 2000); // 延迟2秒后开始星光闪入
    }
});
