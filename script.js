/* ===============================
   MENU - SCROLL SUAVE (ÂNCORAS)
================================ */
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Apenas âncoras da mesma página
    if (href && href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/* ===============================
   ANIMAÇÃO REVEAL AO SCROLL
================================ */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===============================
   NAVBAR ESCONDE / MOSTRA
================================ */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!navbar) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Evita bug de scroll negativo (mobile)
  if (scrollTop < 0) return;

  // Tolerância mínima
  if (Math.abs(scrollTop - lastScrollTop) < 10) return;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
});

/* ===============================
   FORMULÁRIO → WHATSAPP
================================ */
const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const telefone = document.getElementById('telefone')?.value || '';
    const servico = document.getElementById('servico')?.value || '';
    const mensagem = document.getElementById('mensagem')?.value || '';

    const texto = `
Olá! Me chamo ${nome}.

📧 Email: ${email}
📱 WhatsApp: ${telefone}
💼 Serviço: ${servico}

📝 Detalhes do projeto:
${mensagem}
    `.trim();

    const url = `https://wa.me/5553999751058?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}
