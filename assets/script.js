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
});
