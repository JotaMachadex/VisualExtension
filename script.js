document.getElementById('contactForm').addEventListener('submit', sendContactMessage);

function sendContactMessage(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // Substitua 'seu-email@dominio.com' pelo endereço de e-mail que você configurou no Formspree
    const formAction = 'https://formspree.io/f/xleyyoge';

    fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => response.json())
        .then(responseData => {
            console.log('E-mail enviado com sucesso:', responseData);

            // Limpar os campos do formulário
            form.reset();

            // Adicionar aqui qualquer manipulação adicional que desejar, como mostrar uma mensagem de sucesso.
        })
        .catch(error => {
            console.error('Erro ao enviar e-mail:', error);
            // Adicionar aqui qualquer manipulação adicional que desejar, como mostrar uma mensagem de erro.
        });
}
