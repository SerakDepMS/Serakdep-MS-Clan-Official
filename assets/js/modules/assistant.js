export function getAssistantReply() {
  return new Promise((resolve) => {
    resolve(`El asistente IA estará disponible próximamente.
    
Estamos trabajando para ofrecerte una experiencia increíble con inteligencia artificial real.

Mientras tanto, consulta nuestra <strong>enciclopedia</strong> o los <strong>retos</strong>.

¡Gracias por tu paciencia! `);
  });
}

export function addAssistantMessage(text, sender = 'user', assistantChat) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `assistant-message ${sender}`;
  msgDiv.innerHTML = text;
  assistantChat.appendChild(msgDiv);
  assistantChat.scrollTop = assistantChat.scrollHeight;
}