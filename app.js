// Smooth scrolling for "Learn More" button
function learnMore() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add any custom hover animations here
document.addEventListener('DOMContentLoaded', function () {
    // QR Code hover effect
    const qrCodes = document.querySelectorAll('#contact img');

    qrCodes.forEach(qr => {
        qr.addEventListener('mouseover', function () {
            qr.style.transform = 'scale(1.1)'; // Zoom in on hover
        });

        qr.addEventListener('mouseout', function () {
            qr.style.transform = 'scale(1)'; // Reset zoom out
        });
    });

    // Game grid hover effect
    const gameItems = document.querySelectorAll('.game-item');

    gameItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.transform = 'translateY(-10px)'; // Move up on hover
        });

        item.addEventListener('mouseout', function () {
            item.style.transform = 'translateY(0)'; // Reset position
        });
    });

    // Dynamic button color change on hover
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#e68900'; // Change color on hover
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#ff9800'; // Reset color
        });
    });
});
