// Example JavaScript if needed for interactivity (e.g., adding smooth scroll or other dynamic features)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
  

  <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
  