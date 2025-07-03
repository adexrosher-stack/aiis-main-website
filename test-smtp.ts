import nodemailer from "nodemailer";
     import dotenv from "dotenv";

     // Load environment variables from .env.local
     dotenv.config({ path: ".env.local" });

     async function testSMTP() {
       // Validate environment variables
       if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
         console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
         return;
       }

       // Configure Nodemailer transporter
       const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
           user: process.env.EMAIL_USER,
           pass: process.env.EMAIL_PASS,
         },
       });

       try {
         // Verify the transporter configuration
         await transporter.verify();
         console.log("SMTP connection verified successfully");

         // Send a test email
         const mailOptions = {
           from: process.env.EMAIL_USER,
           to: "info.aiis.edu@gmail.com",
           subject: "Test Email from Nodemailer",
           text: "This is a test email sent to verify the Nodemailer configuration.",
         };

         const info = await transporter.sendMail(mailOptions);
         console.log("Test email sent successfully:", info.messageId);
       } catch (error: any) {
         console.error("Error in SMTP test:", {
           message: error.message,
           stack: error.stack,
           code: error.code,
           errno: error.errno,
         });
       }
     }

     testSMTP();