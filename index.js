function updateMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'The message has been updated by JavaScript!';
}

document.getElementById('updateMessageButton').addEventListener('click', updateMessage);
