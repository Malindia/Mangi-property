const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const StormDB = require("stormdb");
const cors = require("cors"); // Import CORS module
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Initialize StormDB
const engine = new StormDB.localFileEngine("./db.stormdb");
const db = new StormDB(engine);
db.default({ properties: [] });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this to parse JSON bodies
app.use(fileUpload());
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Property Management Endpoints

// Add property
app.post("/api/properties", (req, res) => {
  const { name, location, description } = req.body;
  const files = req.files;
  if (!files || Object.keys(files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const image = files.image;
  const imagePath = `uploads/${Date.now()}_${image.name}`; // Prevent name conflicts
  image.mv(imagePath, err => {
    if (err) return res.status(500).send(err);
    const property = { id: Date.now(), name, location, description, imagePath };
    db.get("properties").push(property).save();
    res.send({ message: "Property added successfully", propertyId: property.id, imagePath: `http://${req.headers.host}/${imagePath}` });
  });
});

// Get properties
app.get("/api/properties", (req, res) => {
  const properties = db.get("properties").value().map(p => ({
    ...p,
    imagePath: `http://${req.headers.host}/${p.imagePath}`
  }));
  res.send(properties);
});

// Edit property
app.put("/api/properties/:id", (req, res) => {
  const { id } = req.params;
  const { name, location, description } = req.body;
  const properties = db.get("properties");
  const index = properties.value().findIndex(p => p.id.toString() === id);
  if (index === -1) return res.status(404).send("Property not found.");
  properties.get(index).assign({ name, location, description }).save();
  res.send("Property updated successfully.");
});

// Delete property
app.delete("/api/properties/:id", (req, res) => {
  const { id } = req.params;
  const properties = db.get("properties");
  const index = properties.value().findIndex(p => p.id.toString() === id);
  if (index === -1) return res.status(404).send("Property not found.");
  properties.get(index).delete().save();
  res.send("Property deleted successfully.");
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
