document.addEventListener('DOMContentLoaded', function () {
    const API_URL = "https://mangi-properties-backend.onrender.com/properties";

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
                const formattedPrice = parseFloat(property.price).toLocaleString();

                const propertyItem = document.createElement('div');
                propertyItem.classList.add('property-item');

                const propertyImage = document.createElement('img');
                propertyImage.src = property.imageUrl;
                propertyImage.alt = property.name;

                const propertyTitle = document.createElement('h2');
                propertyTitle.textContent = property.name;

                const propertyDescription = document.createElement('p');
                propertyDescription.textContent = property.description;

                const propertyLocation = document.createElement('p');
                propertyLocation.textContent = `Location: ${property.location} - Ksh ${formattedPrice}`;

                propertyItem.appendChild(propertyImage);
                propertyItem.appendChild(propertyTitle);
                propertyItem.appendChild(propertyDescription);
                propertyItem.appendChild(propertyLocation);

                // Determine which section to append the property to based on its type
                if (property.propertyType === 'Rent' || property.propertyType === 'Airbnb') {
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
                    const modalContent = document.getElementById('propertyModal');
                    modalContent.querySelector('.modal-images').innerHTML = `<img src="${property.imageUrl}" alt="${property.name}" style="width: 100%; height: auto;">`;
                    modalContent.querySelector('.modal-title').textContent = property.name;
                    modalContent.querySelector('.modal-description').textContent = `${property.description}`;
                    modalContent.querySelector('.modal-type').textContent = `Type: ${property.propertyType}`;
                    modalContent.querySelector('.modal-bedrooms').textContent = `🛏 Bedrooms: ${property.bedrooms}`;
                    modalContent.querySelector('.modal-bathrooms').textContent = `🛁 Bathrooms: ${property.bathrooms}`;
                    modalContent.querySelector('.modal-price').textContent = `Price: Ksh ${formattedPrice} - ${property.period}`;

                    // Show the modal
                    modalContent.style.display = 'block';
                });
            });
        })
        .catch(error => console.error('Error fetching properties:', error));

    // Close the modal when the user clicks on <span> (x)
    document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('propertyModal').style.display = 'none';
    });
});
