document.addEventListener("DOMContentLoaded", function() {
    const numberOfStars = 100; // 星星的数量
    const body = document.body;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 2; // 随机延迟时间，0到2秒
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${delay}s`;
        
        body.appendChild(star);
    }
});
