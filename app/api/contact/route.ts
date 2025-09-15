import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Debug logs for environment variables
        console.log("EMAIL_USER set:", !!process.env.EMAILUSER);
        console.log("EMAIL_PASS set:", !!process.env.EMAILPASS);
        console.log("EMAIL_TO set:", !!process.env.EMAILTO);

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAILUSER,
                pass: process.env.EMAILPASS,
            },
        });

        // Define email options
        const mailOptions = {
  from: process.env.EMAILUSER,
  to: process.env.EMAILTO,
  subject: `New Contact Form Submission from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
    <h2 style="color: #111827; text-align: center; margin-bottom: 20px;">📩 New Contact Form Submission</h2>
    
    <div style="background: #ffffff; border-radius: 6px; padding: 16px; border: 1px solid #e5e7eb;">
      
      <p style="margin: 0 0 12px;">
        <strong style="color: #374151;">Name:</strong><br/>
        <span style="color: #111827;">${name}</span>
      </p>
      
      <p style="margin: 0 0 12px;">
        <strong style="color: #374151;">Email:</strong><br/>
        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
      </p>
      
      <p style="margin: 0 0 12px;">
        <strong style="color: #374151;">Message:</strong><br/>
        <span style="color: #111827; white-space: pre-line;">${message}</span>
      </p>
    </div>
    
    <p style="text-align: center; font-size: 12px; color: #6b7280; margin-top: 20px;">
      This message was sent from your website’s contact form.
    </p>
  </div>
  `
};


        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}