let formulario = document.getElementById("formContato");

function enviarFormulario(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");

    if (nome == "") {
        mensagem.textContent = "Digite seu nome primeiro.";
    } else {
        mensagem.textContent = "Obrigado pelo contato, " + nome + "!";
    }
}

formulario.addEventListener("submit", enviarFormulario);