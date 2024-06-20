document.addEventListener('DOMContentLoaded', function() {
    var showMessageButton = document.getElementById('showMessageButton');
    var messageContainer = document.getElementById('messageContainer');

    showMessageButton.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        messageContainer.classList.add('show');

        // Create confetti effect
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    });

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    document.addEventListener('DOMContentLoaded', function() {
        const surveyForm = document.getElementById('surveyForm');
        const gifContainer = document.getElementById('gifContainer');
    
        surveyForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Show the GIF image
            const gifImage = document.createElement('img');
            gifImage.src = 'https://i.pinimg.com/originals/fd/6c/07/fd6c079e840fb1fe34e91856bb5d2b0d.gif'; // Replace with your GIF URL
            gifImage.alt = 'Cat Kiss GIF';
    
            // Clear existing content and show the GIF image
            gifContainer.innerHTML = '';
            gifContainer.appendChild(gifImage);
        });
    });
});