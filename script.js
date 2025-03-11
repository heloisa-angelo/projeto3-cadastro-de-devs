const addTec = document.getElementById('novasTecnologias')
const localForm = document.getElementById('localForm')
addTec.addEventListener("click", () => {
    // Criar um novo formulário
    const formulario = document.createElement("form");
    formulario.action = "#";
    formulario.method = "POST";

    // Criar um campo de entrada de texto
    const inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.name = "nome";
    inputTexto.placeholder = "Nome da tecnologia";

    // Criar um botão de envio
    const botaoEnviar = document.createElement("button");
    botaoEnviar.type = "submit";
    botaoEnviar.textContent = "Enviar";

    // Adicionar os elementos ao formulário
    formulario.appendChild(inputTexto);
    formulario.appendChild(botaoEnviar);

    // Adicionar o formulário ao contêiner
    localForm.appendChild(localForm);
});

