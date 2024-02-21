const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

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
