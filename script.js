document.getElementById('celebrateButton').addEventListener('click', function () {
    triggerConfetti();
});

function triggerConfetti() {
    let confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; 
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; 
        confettiContainer.appendChild(confettiPiece);
    }
}

const style = document.createElement('style');
style.innerHTML = `
    .confetti-piece {
        position: absolute;
        top: -10px;
        width: 10px;
        height: 10px;
        background-color: ${getRandomColor()};
        animation: fall 4s infinite;
        border-radius: 50%;
    }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;

document.head.appendChild(style);

function getRandomColor() {
    const colors = ['#FF6347', '#32CD32', '#FFD700', '#00BFFF', '#FF69B4', '#8A2BE2'];
    return colors[Math.floor(Math.random() * colors.length)];
}
