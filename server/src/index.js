import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigin = 'https://pod-a-landing-page-dc5q.vercel.app';

const corsOptions = {
  origin: allowedOrigin,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wasiusikiru7@gmail.com',
    pass: 'uswx dyrl xzey vhre',
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email } = req.body;

  try {
    // Read the HTML template using async/await
    const __dirname = path.resolve();
    const templatePath = path.join(__dirname, './src/email.html');
    const emailBody = await fs.readFile(templatePath, 'utf8');

    // Replace placeholders in the template with actual data
    const formattedEmailBody = emailBody.replace(/{name}/g, name);

    const mailOptions = {
      from: 'podapodcastnew@gmail.com',
      to: ['wasiusikiru7@gmail.com', email],
      subject: 'Waitlist Confirmation',
      html: formattedEmailBody,
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
