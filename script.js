document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.villa-glide').scrollBy({left: 300, behavior: 'smooth'});
});

document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.villa-glide').scrollBy({left: -300, behavior: 'smooth'});
});
