// Função para gerar mensagem para cada canal
function generateMessage(channel) {
    // Array de mensagens para cada canal
    const messages = {
        // mensagens para cada canal...
    };

    const messageArray = messages[channel];
    return messageArray[Math.floor(Math.random() * messageArray.length)];
}

// Função para enviar mensagens periodicamente
function sendMessage(channel, webhookURL) {
    const message = generateMessage(channel);

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        })
    }).then(response => {
        if (response.ok) {
            console.log(`Mensagem enviada para ${channel}: ${message}`);
        } else {
            console.error(`Erro ao enviar mensagem para ${channel}`);
        }
    }).catch(error => {
        console.error(`Erro ao enviar mensagem para ${channel}:`, error);
    });
}

// URLs dos webhooks
const webhooks = {
    // URLs dos webhooks...
};

// Intervalo para enviar mensagens (3 horas = 10800000 ms)
const interval = 10800000;

// Enviar mensagens periodicamente
setInterval(() => {
    sendMessage('anuncios', webhooks.anuncios);
    sendMessage('vips', webhooks.vips);
    sendMessage('chatGeral', webhooks.chatGeral);
    sendMessage('olx', webhooks.olx);
    sendMessage('instagram', webhooks.instagram);
    sendMessage('clips', webhooks.clips);
}, interval);
