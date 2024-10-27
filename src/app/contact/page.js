// src/app/contact/page.js
import Contact from '@/components/Contact';
import nodemailer from 'nodemailer';

export async function sendContactEmail({ name, email, message }) {
   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: process.env.GMAIL_USER,
           pass: process.env.GMAIL_PASS,
       },
   });

   const mailOptions = {
       from: process.env.GMAIL_USER,
       to: process.env.GMAIL_USER,
       subject: `Contact Form Submission from ${name}`,
       text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
   };

   await transporter.sendMail(mailOptions);
}

export default function ContactPage() {
   return (
       <div>
           <Contact/>
       </div>
   );
}
