const locations = [
    { town: 'Nairobi', county: 'Nairobi' },
    { town: 'Mombasa', county: 'Mombasa' },
    { town: 'Kisumu', county: 'Kisumu' },
    { town: 'Nakuru', county: 'Nakuru' }
];

const API_URL = "https://mangi-property-xo74.vercel.app/api/properties";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('location').addEventListener('input', handleLocationInput);
    document.getElementById('addPropertyBtn').addEventListener('click', () => openForm());
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
    document.getElementById('imagePreview').style.display = 'none';
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
        if (response.ok) {
            alert('Property saved successfully!');
            closeForm();
            fetchProperties();
        } else {
            const result = await response.json();
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
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
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
        <tr>
            <td><img src="${property.imageUrl || ''}" alt="Property Image" style="width:100px; height: auto; cursor: pointer;" onclick="previewImage('${property.imageUrl || ''}')"></td>
            <td>${property.name || '-'}</td>
            <td>${property.location || '-'}</td>
            <td>${property.description || '-'}</td>
            <td>${property.price || '-'}</td>
            <td>${property.propertyType || '-'}</td>
            <td>${property.period || '-'}</td>
            <td>${property.bedrooms || '-'}</td>
            <td>${property.bathrooms || '-'}</td>
            <td>
                <button class="btn" onclick="editProperty('${property.id}')"><i class="fas fa-edit"></i>Edit</button>
                <button class="btn" onclick="deleteProperty('${property.id}')"><i class="fas fa-trash-alt"></i>Delete</button>
            </td>
        </tr>
    `).join('');
}

async function editProperty(id) {
    const url = `${API_URL}/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch property details');
        }
        const property = await response.json();

        if (property) {
            document.getElementById('propertyId').value = property.id;
            document.getElementById('name').value = property.name || '';
            document.getElementById('location').value = property.location || '';
            document.getElementById('description').value = property.description || '';
            document.getElementById('price').value = property.price || '';
            document.getElementById('propertyType').value = property.propertyType || '';
            document.getElementById('period').value = property.period || ''; // Include period field
            document.getElementById('bedrooms').value = property.bedrooms || '';
            document.getElementById('bathrooms').value = property.bathrooms || '';

            document.getElementById('propertyForm').style.display = 'block';
        } else {
            throw new Error('Property details not found');
        }
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
        console.log('Response status:', response.status); // Log the response status
    }
}


function handleLocationInput() {
    const input = this.value.toLowerCase();
    const dropdown = document.getElementById('locationDropdown');

    dropdown.innerHTML = '';

    const filteredLocations = locations.filter(location => location.town.toLowerCase().includes(input));

    filteredLocations.forEach(location => {
        const option = document.createElement('div');
        option.textContent = location.town;
        option.classList.add('dropdown-option');
        option.addEventListener('click', () => {
            document.getElementById('location').value = location.town;
            dropdown.innerHTML = '';
        });
        dropdown.appendChild(option);
    });

    if (filteredLocations.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function previewImage(imageUrl) {
    const modal = document.getElementById('imagePreviewModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
}

window.onclick = function (event) {
    const modal = document.getElementById('imagePreviewModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
