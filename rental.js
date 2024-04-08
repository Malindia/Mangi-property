document.addEventListener('DOMContentLoaded', function () {
    const API_URL = "https://mangi-properties-backend.onrender.com/properties";
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');

    let apiUrl = API_URL;

    // If location parameter is present, add it to the API URL
    if (locationParam) {
        apiUrl += `?location=${locationParam}`;
    }

    // Fetch properties from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const properties = data.properties;
            const message = data.message;

            if (message) {
                alert(message); // Display message from the backend
            }

            // Select the property sections
            const forSaleSection = document.getElementById('for-sale');
            const longTermRentalsSection = document.getElementById('rent-long-term');
            const shortTermRentalsSection = document.getElementById('rent-short-term');

            // Iterate over each property and create HTML elements to display them
            properties.forEach(property => {
                const formattedPrice = parseFloat(property.price).toLocaleString();

                const propertyItem = document.createElement('div');
                propertyItem.classList.add('property-item');

                const propertyImage = document.createElement('img');
                propertyImage.src = property.imageUrls[0]; // Use the first image for the property
                propertyImage.alt = property.name;

                const propertyTitle = document.createElement('h3');
                propertyTitle.textContent = property.name;

                const propertyDescription = document.createElement('p');
                propertyDescription.textContent = property.description;

                const propertyLocation = document.createElement('p');
                propertyLocation.textContent = `Location: ${property.location} - Ksh ${formattedPrice}`;

                propertyItem.appendChild(propertyImage);
                propertyItem.appendChild(propertyTitle);
                propertyItem.appendChild(propertyLocation);

                // Determine which section to append the property to based on its type
                if (property.propertyType === 'Rent' || property.propertyType === 'Airbnb') {
                    if (property.period === 'Per Month' || property.period === 'Per Year') {
                        longTermRentalsSection.querySelector('.property-list').appendChild(propertyItem);
                    } else {
                        shortTermRentalsSection.querySelector('.property-list').appendChild(propertyItem);
                    }
                } else {
                    forSaleSection.querySelector('.property-list').appendChild(propertyItem);
                }

                // Add click event listener to show property details in modal
                propertyItem.addEventListener('click', function () {
                    displayPropertyDetails(property);
                });
            });
        })
        .catch(error => console.error('Error fetching properties:', error));

    // Function to display property details in modal
    function displayPropertyDetails(property) {
        const modalContent = document.getElementById('propertyModal');

        // Display image slideshow
        displayPropertySlideshow(property.imageUrls, modalContent.querySelector('.modal-images'));

        // Display other property details
        modalContent.querySelector('.modal-title').textContent = property.name;
        modalContent.querySelector('.modal-description').textContent = property.description;
        modalContent.querySelector('.modal-type').textContent = `Type: ${property.propertyType}`;
        modalContent.querySelector('.modal-bedrooms').textContent = `🛏 Bedrooms: ${property.bedrooms}`;
        modalContent.querySelector('.modal-bathrooms').textContent = `🛁 Bathrooms: ${property.bathrooms}`;
        modalContent.querySelector('.modal-price').textContent = `Price: Ksh ${property.price} - ${property.period}`;

        // Show the modal
        modalContent.style.display = 'block';
    }

    // Function to display image slideshow
    function displayPropertySlideshow(imageUrls, slideshowContainer) {
        slideshowContainer.innerHTML = ''; // Clear existing slideshow content

        imageUrls.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Property Image';
            slideshowContainer.appendChild(img);
        });
    }

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('propertyModal').style.display = 'none';
    });
});
