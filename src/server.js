import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const port = 3000;

// Create an instance of Express
const app = express();

// Middleware for parsing JSON
app.use(bodyParser.json());

// Define the route for form submission
app.post('/submit-form', (req, res) => {
  const { name, phoneNumber, email, yourAddress, selectedService } = req.body;

  // Configure nodemailer to send the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
		user: 'kurudhiofficial@gmail.com',
		pass: 'vutf jrjw bnpc jire',
    },
  });

  const mailOptions = {
    from: 'raghavanofficials@gmail.com',
    to: `${email}`,
    subject: 'New Form Submission',
    html: `
      <p>Name: ${name}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Email: ${email}</p>
      <p>Your Address: ${yourAddress}</p>
      <p>Selected Service: ${selectedService}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error submitting form.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted successfully.');
    }
  });
});

// Apply Sapper middleware only for the root route
app.use(
  sapper.middleware({
    session: (req, res) => {
      return {}; // You can initialize session data here
    },
  })
);

// Serve static files and apply compression
app.use(
  sirv('static', {
    dev,
    single: true, // Serve single-page apps (SPA) with index.html
  })
);

// Start the combined server
app.listen(PORT || port, () => {
  console.log(`Server is running on port ${PORT || port}`);
});
