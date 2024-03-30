document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Simulate form submission
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      let valid = true;
  }
});