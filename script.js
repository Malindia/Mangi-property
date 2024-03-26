document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
document.querySelector('.next').addEventListener('click', function () {
    document.querySelector('.villa-glide').scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.prev').addEventListener('click', function () {
    document.querySelector('.villa-glide').scrollBy({ left: -300, behavior: 'smooth' });
});
