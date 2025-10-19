// Wishes array 
const wishes = [
    "Em có nụ cười rạng rỡ nhất mà anh từng thấy 😊",
    "Em là người phụ nữ tuyệt vời và đặc biệt 💕",
    "Sự hiện diện của em làm mọi thứ trở nên tươi sáng hơn ✨",
    "Em xứng đáng với tất cả những điều tốt đẹp nhất 🌟",
    "Lòng tốt của em là điều quý giá nhất 💖",
    "Em luôn tỏa sáng trong mọi hoàn cảnh 🌸",
    "Anh trân trọng mỗi khoảnh khắc được biết em 🌺",
    "Em là nguồn cảm hứng tuyệt vời 🎨",
    "Sự quan tâm của em với mọi người thật đáng quý 🤗",
    "Chúc em luôn hạnh phúc và thành công 🌈"
];

// Flower Canvas Setup
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Flower class
class Flower {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = Math.random() * 30 + 20; // 20-50px
        this.speed = Math.random() * 2 + 1; // 1-3px per frame
        this.drift = Math.random() * 2 - 1; // Left-right drift
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.opacity = Math.random() * 0.5 + 0.5; // 0.5-1
        this.wishIndex = Math.floor(Math.random() * wishes.length);
        this.emoji = this.getRandomFlower();
        this.clicked = false;
    }

    getRandomFlower() {
        const flowers = ['🌸', '🌺', '🌼', '🌻', '🌹', '💐', '🏵️', '💮'];
        return flowers[Math.floor(Math.random() * flowers.length)];
    }

    update() {
        this.y += this.speed;
        this.x += this.drift;
        this.rotation += this.rotationSpeed;

        // Reset when out of screen
        if (this.y > canvas.height + 50) {
            this.y = -50;
            this.x = Math.random() * canvas.width;
            this.clicked = false;
        }

        // Bounce off sides
        if (this.x < -50 || this.x > canvas.width + 50) {
            this.drift *= -1;
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
    }

    isClicked(mouseX, mouseY) {
        const distance = Math.sqrt(
            Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
        );
        return distance < this.size && !this.clicked;
    }
}

// Create flowers array
const flowers = [];
const flowerCount = 30; // Number of flowers

for (let i = 0; i < flowerCount; i++) {
    setTimeout(() => {
        flowers.push(new Flower());
    }, i * 200); // Stagger creation
}

// Cute Arrow Animation
class CuteArrow {
    constructor() {
        this.progress = 0;
        this.maxProgress = 1;
        this.speed = 0.005;
        this.opacity = 0;
        this.fadeInSpeed = 0.02;
        this.textOpacity = 0;
    }

    drawCurvedArrow() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Vị trí dòng chữ (bên trái)
        const textX = 50;
        const textY = centerY - 160;

        // Điểm bắt đầu (từ cuối dòng chữ bên trái)
        const startX = textX + 250;
        const startY = textY ;

        // Điểm kết thúc (giữa màn hình, chỉ vào cô ấy) - dịch sang trái 40px
        const endX = centerX - 120;
        const endY = centerY - 120;

        // Điểm điều khiển cho đường cong (tạo hình vòng cute nhưng ngắn hơn)
        const cp1X = startX + 100;
        const cp1Y = startY - 100;
        const cp2X = endX - 100;
        const cp2Y = endY - 100;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Vẽ đường cong
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        // Chỉ vẽ phần đường cong theo progress
        const currentProgress = this.progress;

        for (let t = 0; t <= currentProgress; t += 0.01) {
            const x = Math.pow(1 - t, 3) * startX +
                     3 * Math.pow(1 - t, 2) * t * cp1X +
                     3 * (1 - t) * Math.pow(t, 2) * cp2X +
                     Math.pow(t, 3) * endX;

            const y = Math.pow(1 - t, 3) * startY +
                     3 * Math.pow(1 - t, 2) * t * cp1Y +
                     3 * (1 - t) * Math.pow(t, 2) * cp2Y +
                     Math.pow(t, 3) * endY;

            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = '#881337';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.shadowBlur = 5;
        ctx.stroke();

        // Vẽ mũi tên ở cuối
        if (currentProgress >= 0.9) {
            const arrowSize = 15;
            const angle = Math.atan2(endY - cp2Y, endX - cp2X);

            ctx.fillStyle = '#881337';
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(
                endX - arrowSize * Math.cos(angle - Math.PI / 4),
                endY - arrowSize * Math.sin(angle - Math.PI / 6)
            );
            ctx.lineTo(
                endX - arrowSize * Math.cos(angle + Math.PI / 6),
                endY - arrowSize * Math.sin(angle + Math.PI / 6)
            );
            ctx.closePath();
            ctx.fill();
        }

        // Vẽ dòng chữ
        if (currentProgress >= 1) {
            ctx.globalAlpha = this.textOpacity;
            ctx.font = 'bold 24px "Segoe UI", Arial, sans-serif';
            ctx.fillStyle = '#881337';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';

            // Shadow cho text
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;

            // Vị trí bên trái màn hình
            const textX = 50;
            const textY = centerY - 140;

            ctx.fillText('Đây là bông hoa đẹp nhất', textX, textY);

            // Vẽ thêm emoji cute
            ctx.font = '30px Arial';
            ctx.shadowBlur = 5;
            ctx.fillText('✨', textX - 35, textY);
            ctx.fillText('💖', textX + 300, textY);
        }

        ctx.restore();
    }

    update() {
        // Fade in
        if (this.opacity < 1) {
            this.opacity += this.fadeInSpeed;
        }

        // Animate progress
        if (this.progress < this.maxProgress) {
            this.progress += this.speed;
        }

        // Fade in text sau khi arrow vẽ xong
        if (this.progress >= 1 && this.textOpacity < 1) {
            this.textOpacity += 0.03;
        }
    }
}

const cuteArrow = new CuteArrow();

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ mũi tên cute
    cuteArrow.update();
    cuteArrow.drawCurvedArrow();

    flowers.forEach(flower => {
        flower.update();
        flower.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Click detection on flowers
let wishesOpened = new Set();
const wishCountElement = document.getElementById('wishCount');
const wishPopup = document.getElementById('wishPopup');
const wishText = document.querySelector('.wish-text');
const wishClose = document.querySelector('.wish-close');

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    flowers.forEach(flower => {
        if (flower.isClicked(mouseX, mouseY)) {
            flower.clicked = true;
            wishesOpened.add(flower.wishIndex);
            wishCountElement.textContent = wishesOpened.size;
            showWish(wishes[flower.wishIndex]);

            // Create sparkle effect
            createSparkles(e.clientX, e.clientY);
        }
    });
});

// Show wish popup
function showWish(wish) {
    wishText.textContent = wish;
    wishPopup.classList.add('show');

    // Auto-close after 4 seconds
    setTimeout(() => {
        wishPopup.classList.remove('show');
    }, 4000);
}

// Close wish popup
wishClose.addEventListener('click', () => {
    wishPopup.classList.remove('show');
});

// Create sparkle effect
function createSparkles(x, y) {
    const sparkleCount = 10;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.boxShadow = '0 0 10px currentColor';

        document.body.appendChild(sparkle);

        const angle = (Math.PI * 2 * i) / sparkleCount;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let opacity = 1;
        let posX = x;
        let posY = y;

        function animateSparkle() {
            opacity -= 0.02;
            posX += vx * 0.016;
            posY += vy * 0.016;

            sparkle.style.opacity = opacity;
            sparkle.style.left = posX + 'px';
            sparkle.style.top = posY + 'px';

            if (opacity > 0) {
                requestAnimationFrame(animateSparkle);
            } else {
                sparkle.remove();
            }
        }

        animateSparkle();
    }
}

// Special Message Modal
const specialMessageBtn = document.getElementById('specialMessageBtn');
const messageModal = document.getElementById('messageModal');
const closeModal = document.querySelector('.close-modal');

specialMessageBtn.addEventListener('click', () => {
    messageModal.classList.add('show');
});

closeModal.addEventListener('click', () => {
    messageModal.classList.remove('show');
});

// Close modal when clicking outside
messageModal.addEventListener('click', (e) => {
    if (e.target === messageModal) {
        messageModal.classList.remove('show');
    }
});

// Music Player
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<span class="icon-music">🎵</span>';
    } else {
        // Note: Music will only work if you add a music file
        bgMusic.play().catch(err => {
            console.log('No music file loaded or autoplay prevented:', err);
            alert('Vui lòng thêm file nhạc vào thư mục để bật nhạc nền!');
        });
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<span class="icon-music">🔊</span>';
    }
    isPlaying = !isPlaying;
});

// Easter Egg: Double click on image
const mainImage = document.querySelector('.main-image');
let clickCount = 0;

mainImage.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 2) {
        // Secret message or animation
        createHeartRain();
        clickCount = 0;
    }

    setTimeout(() => {
        clickCount = 0;
    }, 500);
});

// Heart Rain Effect (Easter Egg)
function createHeartRain() {
    const heartCount = 50;
    const duration = 3000;

    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 3s ease-out';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.top = '120vh';
                heart.style.opacity = '0';
                heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 100);

            setTimeout(() => {
                heart.remove();
            }, 3100);
        }, i * 60);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle music
    if (e.key === 'm' || e.key === 'M') {
        musicToggle.click();
    }

    // Press 'Space' or 'Enter' to open special message
    if (e.key === ' ' || e.key === 'Enter') {
        if (!messageModal.classList.contains('show')) {
            e.preventDefault();
            specialMessageBtn.click();
        }
    }

    // Press 'Escape' to close modals
    if (e.key === 'Escape') {
        messageModal.classList.remove('show');
        wishPopup.classList.remove('show');
    }
});

// Preload animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message for developer
console.log('%c💖 Made with Love 💖', 'font-size: 20px; color: #f5576c; font-weight: bold;');
console.log('%cTip: Double click on the image for a surprise! 🎉', 'font-size: 14px; color: #667eea;');
console.log('%cKeyboard shortcuts:\n- M: Toggle music\n- Space/Enter: Open special message\n- Escape: Close modals', 'font-size: 12px; color: #764ba2;');
