document.addEventListener('DOMContentLoaded', () => {
    alert('Deepseek might be down for maintanance. This breaks the API as well as this website');
    const chatBox = document.getElementById('chat-box');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const quickMessages = document.querySelectorAll('.quick-message');

    function appendMessage(content, className) {
        const message = document.createElement('p');
        message.textContent = content;
        message.className = className;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function sendMessage(message) {
        appendMessage(message, 'user');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            appendMessage(data.bot || "Error fetching response", 'bot');
        } catch (error) {
            appendMessage("Error: Unable to connect to API", 'bot');
        }
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = userInput.value.trim(); 

        if (message) {
            sendMessage(message);
            userInput.value = ''; 
        }
    });

    quickMessages.forEach(button => {
        button.addEventListener('click', () => {  
            sendMessage(button.textContent);
        });
    });
});
