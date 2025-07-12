// Troca de fonte no título
const nomeTitulo = document.querySelector('.nome');
const fontes = [
  '"Comic Sans MS", cursive, sans-serif',
  '"Courier New", monospace',
  '"Lucida Handwriting", cursive',
  '"Impact", fantasy',
  '"Georgia", serif',
  '"Verdana", sans-serif',
  '"Times New Roman", serif'
];
let i = 0;
let intervaloFonte = null;

if (nomeTitulo) {
  function trocarFonte() {
    nomeTitulo.style.fontFamily = fontes[i];
    i = (i + 1) % fontes.length;
  }

  nomeTitulo.addEventListener('mouseenter', () => {
    trocarFonte();
    intervaloFonte = setInterval(trocarFonte, 5000);
  });

  nomeTitulo.addEventListener('mouseleave', () => {
    clearInterval(intervaloFonte);
  });
}

// Validação de formulário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('meuFormulario');
  const mensagem = document.getElementById('mensagem');

  if (form && mensagem) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let valido = true;
      const nome = form.nome;
      const email = form.email;
      const tipoNegocio = form.tipoNegocio;
      const nomeNegocio = form.nomeNegocio;
      const estado = form.estado;

      // Esconde mensagens e remove estilos de erro
      [nome, email, tipoNegocio, nomeNegocio, estado].forEach(input => {
        input.classList.remove('invalid');
        const erroMsg = input.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'none';
      });

      if (nome.value.trim().length < 3) {
        nome.classList.add('invalid');
        const erroMsg = nome.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'block';
        valido = false;
      }

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email.value.trim())) {
        email.classList.add('invalid');
        const erroMsg = email.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'block';
        valido = false;
      }

      if (!tipoNegocio.value) {
        tipoNegocio.classList.add('invalid');
        const erroMsg = tipoNegocio.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'block';
        valido = false;
      }

      if (nomeNegocio.value.trim().length < 3) {
        nomeNegocio.classList.add('invalid');
        const erroMsg = nomeNegocio.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'block';
        valido = false;
      }

      if (!estado.value) {
        estado.classList.add('invalid');
        const erroMsg = estado.parentElement.querySelector('.invalid');
        if (erroMsg) erroMsg.style.display = 'block';
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

      form.submit();
    });
  }
});
// Scroll suave em âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Brilho pulsante na imagem de perfil
const img = document.querySelector('.imagem');
if (img) {
  img.style.transition = 'box-shadow 5s ease-in-out';
  let brilhoAtivo = false;

  setInterval(() => {
    img.style.boxShadow = brilhoAtivo ? '0 0 30px 8px #a64dff' : 'none';
    brilhoAtivo = !brilhoAtivo;
  }, 5000);
}

// Botão com efeito 3D
const btn = document.querySelectorAll('.btn');
if (btn) {
  btn.style.transition = 'transform 0.5s ease';

  btn.addEventListenerAll('mouseenter', () => {
    btn.style.transform = 'translateY(-5px) rotateX(10deg)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'none';
  });
}

