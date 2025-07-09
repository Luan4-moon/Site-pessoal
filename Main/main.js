document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('meuFormulario');
  const mensagem = document.getElementById('mensagem');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let valido = true;

    const nome = form.nome;
    const email = form.email;
    const tipoNegocio = form.tipoNegocio;
    const nomeNegocio = form.nomeNegocio;
    const estado = form.estado;

    // Limpa classes antigas
    [nome, email, tipoNegocio, nomeNegocio, estado].forEach(input => {
      input.classList.remove('is-invalid');
    });

    // Validações
    if (nome.value.trim().length < 3) {
      nome.classList.add('is-invalid');
      valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valido = false;
    }

    if (!tipoNegocio.value) {
      tipoNegocio.classList.add('is-invalid');
      valido = false;
    }

    if (nomeNegocio.value.trim().length < 3) {
      nomeNegocio.classList.add('is-invalid');
      valido = false;
    }

    if (!estado.value) {
      estado.classList.add('is-invalid');
      valido = false;
    }

    if (!valido) {
      mensagem.textContent = 'Por favor, corrija os campos em vermelho.';
      mensagem.className = 'alert alert-danger mt-3';
      mensagem.classList.remove('d-none');
      return;
    }

    mensagem.textContent = 'Enviando formulário...';
    mensagem.className = 'alert alert-info mt-3';
    mensagem.classList.remove('d-none');

    // Envia o formulário via método padrão
    form.submit();
  });
});
