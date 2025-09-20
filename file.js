document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const title = document.getElementById('title').value;
            const message = document.getElementById('message').value;
            console.log('Form Submitted:', { name, title, message });
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    const featureProducts = document.querySelectorAll('.feature-card button');
    featureProducts.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.textContent.trim().toLowerCase();
            if (action === 'add') {
                console.log('Added to cart');
                alert('Product added to cart!');
            } else if (action === 'remove') {
                console.log('Removed from cart');
                alert('Product removed from cart!');
            }
        });
    });
});