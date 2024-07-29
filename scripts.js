// script.js

const numberOfBubbles = 30; // Number of bubbles to create
const colors = ['#ffffff', '#f0f0f0', '#e0e0e0']; // Bubble colors

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size between 20px and 80px
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random color
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random horizontal position
    const left = Math.random() * 100;
    bubble.style.left = `${left}vw`;

    // Random animation duration between 10s and 20s
    const duration = Math.random() * 10 + 10;
    bubble.style.animationDuration = `${duration}s`;

    // Append the bubble to the body
    document.body.appendChild(bubble);

    // Remove the bubble after the animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create bubbles at regular intervals
for (let i = 0; i < numberOfBubbles; i++) {
    createBubble();
}

// Continuously create new bubbles
setInterval(createBubble, 3000);
