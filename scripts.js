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
});