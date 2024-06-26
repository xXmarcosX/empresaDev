document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:cyrax0043@gmail.com?subject=Contato de ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe: ${name}%0D%0AEmail: ${email}`;
    
    window.location.href = mailtoLink;

    setTimeout(function() {
        window.location.href = 'index.html';  // Redireciona para a página inicial após 3 segundos
    }, 3000);
});
