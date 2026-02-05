// Einfaches Skript: Nav-Toggle und Formular-Handling
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });

    // close mobile nav when a link is clicked
    const links = mainNav.querySelectorAll('a');
    links.forEach(a=>a.addEventListener('click', ()=>{
      if(mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false');
      }
    }));
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Einfaches Feedback: in echten Projekten per fetch an Backend senden
      alert('Danke! Deine Nachricht wurde (lokal) empfangen.');
      form.reset();
    });
  }
});
