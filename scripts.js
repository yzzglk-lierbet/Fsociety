// Referências aos elementos
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

// Evento para enviar mensagem
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        const newMessage = document.createElement('p');
        newMessage.textContent = `Você: ${message}`;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
        messageInput.value = '';
    }
});

// Permitir envio com Enter
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

// Alternar menu lateral
hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});
