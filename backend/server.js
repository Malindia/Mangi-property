const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const StormDB = require("stormdb");
const cors = require("cors");
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize StormDB
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);
db.default({ properties: [] });

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Utility function to update image path for outgoing responses
const updateImagePath = (property, req) => {
  if (!property || !property.imagePath) return property;
  return {
    ...property,
    imagePath: `http://${req.headers.host}/${property.imagePath}`
  };
};


// Add property with new fields
app.post("/api/properties", async (req, res) => {
  const { name, location, description, price, bedrooms, bathrooms, propertyType } = req.body;
  const files = req.files;

  if (!files || Object.keys(files).length === 0 || !files.image) {
    return res.status(400).send('No image file was uploaded.');
  }

  const image = files.image;
  const imagePath = `uploads/${Date.now()}_${image.name}`;

  try {
    await image.mv(imagePath);
    const property = {
      id: Date.now(),
      name,
      location,
      description,
      price,
      bedrooms,
      bathrooms,
      propertyType,
      imagePath
    };
    db.get("properties").push(property).save();
    res.send({
      message: "Property added successfully",
      property: updateImagePath(property, req)
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Failed to upload the image.');
  }
});

// Get properties
app.get("/api/properties", (req, res) => {
  const properties = db.get("properties").value().map(property => updateImagePath(property, req));
  if (!properties) {
    return res.status(500).send('Failed to fetch properties.');
  }
  res.send(properties);
});
// Fetch a single property by ID
app.get("/api/properties/:id", (req, res) => {
  const { id } = req.params; // Extracting ID from request parameters
  const properties = db.get("properties").value(); // Fetch all properties
  const property = properties.find(p => p.id.toString() === id); // Find the property by ID

  if (!property) {
    return res.status(404).send("Property not found."); // Property not found response
  }

  // Send the found property with updated image path
  res.send(updateImagePath(property, req));
});

// Edit property

// Edit property with new fields and image handling
app.put("/api/properties/:id", async (req, res) => {
  const { id } = req.params;
  let updates = { ...req.body };

  const properties = db.get("properties").value();
  const propertyIndex = properties.findIndex(p => p.id.toString() === id);

  if (propertyIndex === -1) {
    return res.status(404).send("Property not found.");
  }

  const files = req.files;
  let imagePath = properties[propertyIndex].imagePath;

  if (files && files.image) {
    const image = files.image;
    imagePath = `uploads/${Date.now()}_${image.name}`;
    await image.mv(imagePath);
    updates = { ...updates, imagePath };
  } else if (updates.deleteImage === 'true') {
    // Attempt to delete the current image file if it exists
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    imagePath = ""; // Clear imagePath in the property
    updates = { ...updates, imagePath: "" };
    delete updates.deleteImage; // Remove deleteImage flag from updates
  }

  const updatedProperty = { ...properties[propertyIndex], ...updates };
  db.get("properties").get(propertyIndex).set(updatedProperty).save();

  res.send({
    message: "Property updated successfully.",
    property: updateImagePath(updatedProperty, req)
  });
});

// Delete property
app.delete("/api/properties/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = db.get("properties").value().length;

  db.get("properties").set(db.get("properties").value().filter(p => p.id.toString() !== id));
  db.save();

  const newLength = db.get("properties").value().length;

  if (newLength === initialLength) {
    return res.status(404).send("Property not found.");
  }

  res.send({ message: "Property deleted successfully." });
});


// Handle form submission
app.post("/api/submit", (req, res) => {
  console.log(req.body);
  const formData = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "emmanuel4cheru@gmail.com",
      pass: "dhjrvflxdhfjsdwq",
    },
  });

  // Create the HTML email template
  const emailHTML = `
<html>
<head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            padding: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #0056b3;
            color: #ffffff;
            padding: 20px 40px;
            text-align: center;
        }
        .header img {
            max-height: 50px;
            margin-bottom: 10px;
        }
        .body {
            padding: 20px 40px;
            background-color: #ffffff;
            line-height: 1.5;
        }
        h2 {
            color: #0056b3;
            margin-top: 0;
        }
        p {
            margin: 10px 0;
            color: #555;
        }
        .footer {
            font-size: 12px;
            text-align: center;
            padding: 20px;
            background-color: #f0f0f0;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">

            <h2>Contact Submission Details</h2>
        </div>
        <div class="body">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Telephone:</strong> ${formData.telephone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Interest Date:</strong> ${formData.travelDate}</p>
            <p><strong>Interested City:</strong> ${formData.city}</p>
            <p><strong>Number of Guests:</strong> ${formData.guests}</p>
            <p><strong>Preferred Number of Rooms:</strong> ${formData.rooms}</p>
            <p><strong>Desired House Type:</strong> ${formData.houseType}</p>
        </div>
        <div class="footer">
            Contact Form Submitted Successfully
        </div>
    </div>
</body>
</html>
`;

  // Note: Ensure you replace 'https://example.com/logo.png' with the actual URL of your company's logo.
  // Setup email data
  const mailOptions = {
    from: "emmanuel4cheru@gmail.com",
    to: "ally@tlink.dk,emmanuel4cheru@gmail.com",
    subject: "New Contact Form Submission",
    html: emailHTML,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.sendFile(__dirname + '/error.html'); // Make sure the path is correct
    } else {
      console.log("Email sent:", info.response);
      return res.sendFile(__dirname + '/success.html'); // Make sure the path is correct
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
