function showMessage(memory, message) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = `<strong>${memory}</strong>: ${message}`;
    messageElement.classList.add('show');
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 5000); // Hide message after 5 seconds
}