const API_URL = "http://192.168.100.3:3000/api/properties";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addPropertyBtn').addEventListener('click', openForm);
    document.getElementById('propertyFormInner').addEventListener('submit', submitPropertyForm);
    fetchProperties();
});

function openForm() {
    document.getElementById('propertyForm').style.display = 'block';
    clearFormFields();
}

function closeForm() {
    document.getElementById('propertyForm').style.display = 'none';
}

function clearFormFields() {
    document.getElementById('propertyFormInner').reset();
    document.getElementById('propertyId').value = '';
}

async function submitPropertyForm(event) {
    event.preventDefault();
    const propertyId = document.getElementById('propertyId').value;
    const formData = new FormData(document.getElementById('propertyFormInner'));
    const url = propertyId ? `${API_URL}/${propertyId}` : API_URL;

    try {
        const response = await fetch(url, {
            method: propertyId ? 'PUT' : 'POST',
            body: formData,
        });
        const result = await response.json();
        if (response.ok) {
            alert('Property saved successfully!');
            closeForm();
            fetchProperties();
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Save property failed:', error);
        alert(`Error: ${error.message}`);
    }
}

async function fetchProperties() {
    try {
        const response = await fetch(API_URL);
        const properties = await response.json();
        displayProperties(properties);
    } catch (error) {
        console.error('Failed to fetch properties:', error);
        alert('Failed to fetch properties. Please try again later.');
    }
}

function displayProperties(properties) {
    const display = document.getElementById('propertiesDisplay');
    display.innerHTML = properties.map(property => `
        <div class="property-item">
            <h3>${property.name}</h3>
            <p>Location: ${property.location}</p>
            <p>Description: ${property.description}</p>
            <img src="${property.imagePath}" alt="${property.name}" style="width:100px;">
            <button onclick="editProperty('${property.id}')">Edit</button>
            <button onclick="deleteProperty('${property.id}')">Delete</button>
        </div>
    `).join('');
}

async function editProperty(id) {
    // Construct the URL for fetching the property details
    const url = `${API_URL}/${id}`;
    console.log(url)

    try {
        console.log(url)

        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            // If the server responds with a non-2xx status, throw an error
            throw new Error('Failed to fetch property details');
        }

        const property = await response.json();

        // Populate the form with the property details
        document.getElementById('propertyId').value = property.id;
        document.getElementById('name').value = property.name || '';
        document.getElementById('location').value = property.location || '';
        document.getElementById('description').value = property.description || '';
        // Note: Handling the image in the form might require additional logic for preview

        // Open the form modal
        document.getElementById('propertyForm').style.display = 'block';
    } catch (error) {
        console.error('Edit property failed:', error);
        alert(`Error: ${error.message}`);
    }
}


async function deleteProperty(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
            alert('Property deleted successfully!');
            fetchProperties();
        } else {
            throw new Error('Failed to delete property');
        }
    } catch (error) {
        console.error('Delete property failed:', error);
        alert(`Error: ${error.message}`);
    }
}
