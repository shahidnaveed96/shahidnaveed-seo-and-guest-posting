// Small client-side script for interactions
document.addEventListener('DOMContentLoaded', function(){
  // set year in footer
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  // Basic contact form handler — replace with your backend endpoint
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = {
        name: form.name.value,
        email: form.email.value,
        website: form.website.value,
        message: form.message.value
      };
      // naive validation
      if(!data.email || !data.name){
        alert('Please provide your name and email.');
        return;
      }
      // Show a simple success message — integrate with a real API or Netlify forms
      alert('Thanks! Your audit request has been received. I will reply to ' + data.email);
      form.reset();
    });
  }

  // Mobile nav toggle
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  if(menuToggle && mobileNav){
    function openMenu(){
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded','true');
      mobileNav.hidden = false;
      mobileNav.focus && mobileNav.focus();
      document.documentElement.style.overflow = 'hidden'; // prevent background scroll
    }
    function closeMenu(){
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
      mobileNav.hidden = true;
      document.documentElement.style.overflow = '';
    }
    menuToggle.addEventListener('click', function(){
      if(menuToggle.classList.contains('open')) closeMenu(); else openMenu();
    });
    // close when a link inside the mobile nav is clicked
    mobileNav.addEventListener('click', function(e){
      if(e.target.tagName === 'A') closeMenu();
    });
    // close on escape
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    });
  }
});
