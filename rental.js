document.addEventListener('DOMContentLoaded', function () {
    // Select all property items
    var propertyItems = document.querySelectorAll('.property-item');

    propertyItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Fetch the image source, title, and price of the clicked property
            var imageSrc = item.querySelector('img').src;
            var titleText = item.querySelector('h3').textContent;
            var priceText = item.querySelector('p').textContent;

            // Define the images and descriptions for the clicked property
            var imagesHtml = '<img src="' + imageSrc + '" alt="Property Image" style="width: 100%; height: auto;">';
            var descriptionText = titleText + ' - ' + priceText;

            // Set the content of the modal
            document.getElementById('modalImages').innerHTML = imagesHtml;
            document.getElementById('modalDescription').textContent = descriptionText;

            // Show the modal
            document.getElementById('propertyModal').style.display = 'block';
        });
    });

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('propertyModal').style.display = 'none';
    });
});
