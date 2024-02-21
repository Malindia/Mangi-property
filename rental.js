document.addEventListener('DOMContentLoaded', function() {
    // Assuming each property item has a class 'property-item'
    var propertyItems = document.querySelectorAll('.property-item');

    propertyItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Here you should fetch or define the images and descriptions for each property
            var imagesHtml = '<img src="your-image-source.jpg" alt="Property Image">';
            var descriptionText = 'This is a detailed description of the property.';

            // Set the content of the modal
            document.getElementById('modalImages').innerHTML = imagesHtml;
            document.getElementById('modalDescription').textContent = descriptionText;

            // Show the modal
            document.getElementById('propertyModal').style.display = 'block';
        });
    });

    // When the user clicks on <span> (x), close the modal
    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('propertyModal').style.display = 'none';
    });
});
