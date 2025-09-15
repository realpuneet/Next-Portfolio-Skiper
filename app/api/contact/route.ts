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
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
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