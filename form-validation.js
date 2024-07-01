function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário se houver erros

    const form = document.getElementById('Abertura de Empresa');
    const nome = form['name'].value.trim();
    const whatsapp = form['phone'].value.trim();
    const email = form['email'].value.trim();
    const empresa = form['company'].value.trim();
    const descricao = form['descricao'].value.trim();
    const comunicacoes = form['comunicacoes'].checked;

    if (!nome || !whatsapp || !email || !empresa || !descricao || !comunicacoes) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Verifica se o WhatsApp é um número válido
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(whatsapp)) {
        alert('Por favor, insira um número de WhatsApp válido.');
        return;
    }

    // Verifica se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Se passar por todas as validações, envia o formulário
    form.submit();
}

document.addEventListener('DOMContentLoaded', function () {
    $('#phone').inputmask('(99) 99999-9999');
});
