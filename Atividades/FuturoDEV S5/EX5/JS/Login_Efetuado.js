const dadosDosSetores = {
    comercial: { usuario: "CMCL12", senha: "Com&c1@l" },
    rh: { usuario: "98HR", senha: "RH!@2025" },
    ti: { usuario: "DEV456TI", senha: "IT&&||==2025" }
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o formulário de recarregar

    const setorSelecionado = document.querySelector('input[name="setor"]:checked').value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("Senha").value;
    const mensagem = document.getElementById("mensagem");

    if (dadosDosSetores[setorSelecionado]) {
        mensagem.textContent = `Selecione um setor válido.`;
        mensagem.style.color = "red";
        return;
    }

    const dados = dadosDosSetores[setorSelecionado];

    // Verificando se o login é válido
    if (usuario === dados.usuario && senha === dados.senha) {
        mensagem.innerHTML = `Login realizado com sucesso!`;
        mensagem.style.color = "green";
        setTimeout(() => {
            window.location.href = "Setor_Comercial.html"; // Redireciona após 1 segundo
        }, 1000);
    } else {
        mensagem.innerHTML = `Login ou senha incorretos.`;
        mensagem.style.color = "red";
    }
});