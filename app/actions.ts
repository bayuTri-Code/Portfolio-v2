"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  body: string;
}) {
  const user = process.env.EMAIL_USER || "bayutrihardians@gmail.com";
  const pass = process.env.EMAIL_PASS;

  if (!pass) {
    console.error("EMAIL_PASS is not configured in the environment variables.");
    return { success: false, error: "Server email configuration is missing (EMAIL_PASS is empty)." };
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${formData.name}" <${user}>`,
      replyTo: formData.email,
      to: "bayutrihardians@gmail.com",
      subject: `New Portfolio Message from ${formData.name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.body}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #131e35; border-radius: 12px; background-color: #0a0f1d; color: #f8fafc;">
          <h2 style="color: #38bdf8; border-bottom: 1px solid #131e35; padding-bottom: 12px; margin-top: 0;">New Portfolio Submission</h2>
          <p style="margin: 10px 0;"><strong style="color: #94a3b8;">Name:</strong> ${formData.name}</p>
          <p style="margin: 10px 0;"><strong style="color: #94a3b8;">Email:</strong> ${formData.email}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #070a14; border: 1px solid #131e35; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #38bdf8;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #f8fafc; line-height: 1.5; font-size: 14px;">${formData.body}</p>
          </div>
          <p style="font-size: 10px; color: #64748b; margin-top: 25px; text-align: center; border-top: 1px solid #131e35; padding-top: 15px;">
            This email was sent dynamically from your portfolio app.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer SMTP Error:", error);
    return { success: false, error: error.message || "Failed to send email via SMTP." };
  }
}
