document.addEventListener('DOMContentLoaded', function () {
    const API_URL = "https://mangi-property-xo74.vercel.app/api/properties";

    // Fetch properties from the API
    fetch(API_URL)
        .then(response => response.json())
        .then(properties => {
            // Select the property sections
            const forSaleSection = document.getElementById('for-sale');
            const longTermRentalsSection = document.getElementById('rent-long-term');
            const shortTermRentalsSection = document.getElementById('rent-short-term');

            // Iterate over each property and create HTML elements to display them
            properties.forEach(property => {
                const propertyItem = document.createElement('div');
                propertyItem.classList.add('property-item');

                const propertyImage = document.createElement('img');
                propertyImage.src = property.imagePath;
                propertyImage.alt = property.name;

                const propertyTitle = document.createElement('h3');
                propertyTitle.textContent = property.name;

                const propertyLocation = document.createElement('p');
                propertyLocation.textContent = `${property.price} - ${property.location}`;

                propertyItem.appendChild(propertyImage);
                propertyItem.appendChild(propertyTitle);
                propertyItem.appendChild(propertyLocation);

                // Determine which section to append the property to based on its type
                if (property.type === 'Rent' || property.type === 'Airbnb') {
                    if (property.period === 'Per Month') {
                        longTermRentalsSection.querySelector('.property-list').appendChild(propertyItem);
                    } else {
                        shortTermRentalsSection.querySelector('.property-list').appendChild(propertyItem);
                    }
                } else {
                    forSaleSection.querySelector('.property-list').appendChild(propertyItem);
                }

                // Add click event listener to show property details in modal
                propertyItem.addEventListener('click', function () {
                    const modalImages = document.getElementById('modalImages');
                    const modalDescription = document.getElementById('modalDescription');

                    // Set modal content with property details
                    modalImages.innerHTML = `<img src="${property.imagePath}" alt="Property Image" style="width: 100%; height: auto;">`;
                    modalDescription.textContent = `${property.name} - ${property.price} - ${property.location}`;

                    // Show the modal
                    document.getElementById('propertyModal').style.display = 'block';
                });
            });
        })
        .catch(error => console.error('Error fetching properties:', error));

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('propertyModal').style.display = 'none';
    });
});
