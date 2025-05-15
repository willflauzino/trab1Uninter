{
  let visivel = false;

  function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const botao = document.getElementById("botaointerativo");

    if (!visivel) {
      mensagem.textContent = "\"O sucesso é a soma de pequenos esforços repetidos dia após dia.\" – Robert Collier";
      botao.textContent = "Clique para esconder a mensagem";
      visivel = true;
    } else {
      mensagem.textContent = "";
      botao.textContent = "Clique para ver uma mensagem!";
      visivel = false;
    }
  }
}