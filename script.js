document.addEventListener('DOMContentLoaded', function() {
    const salamiButton = document.getElementById('salamiButton');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const eidPopup = document.getElementById('eidPopup');
    const closePopup = document.getElementById('closePopup');
    const fireworksContainer = document.querySelector('.fireworks-container');
    const eidPopupBlur = document.getElementById('eidPopupBlur');

    // Function to create a firework
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        fireworksContainer.appendChild(firework);

        const size = Math.random() * 5 + 5;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.top = `${Math.random() * 50 + 25}%`; // Adjusted for proximity to the popup
        firework.style.left = `${Math.random() * 50 + 25}%`; // Adjusted for proximity to the popup

        // Remove the firework after the animation
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    // Function to start fireworks
    function startFireworks() {
        setInterval(createFirework, 200); // Adjust interval for firework density
    }

    // Show the popup and blur the background
    function showPopupAndBlur() {
        eidPopupBlur.style.display = "flex";
        startFireworks();
    }

    // Hide the popup and remove the blur
    function hidePopupAndRemoveBlur() {
        eidPopupBlur.style.display = "none";
        clearInterval(startFireworks);
    }

    // Show the popup on page load
    showPopupAndBlur();

    // Close the popup
    closePopup.addEventListener('click', function() {
        hidePopupAndRemoveBlur();
    });

    // Salami Button Click Event
    salamiButton.addEventListener('click', function() {
        qrCodeContainer.style.display = 'block'; // Show the QR code container
        salamiButton.style.display = 'none'; // Hide the button after clicking
    });
});