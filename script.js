function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        const chatBox = document.getElementById('chat-box');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        document.getElementById('user-input').value = '';

        // Simulate bot response
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.textContent = "Bot: " + userInput;  // Replace with bot response logic
        setTimeout(() => {
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
        }, 1000);
    }
}
