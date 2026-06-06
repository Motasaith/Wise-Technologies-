import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * Contact form API route
 * Sends emails via Hostinger SMTP using Nodemailer
 * Requires SMTP credentials in environment variables
 */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, website } = body

    // Honeypot check
    if (website) {
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Validation
    const errors: string[] = []
    if (!name?.trim()) errors.push('Name is required')
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Valid email is required')
    }
    if (!message?.trim()) errors.push('Message is required')
    if (message?.length > 5000) errors.push('Message is too long')

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured. Please contact us directly at info@wisetechnologiesryk.com' },
        { status: 503 }
      )
    }

    // Send email
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: `"Wise Technologies Contact Form" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from wisetechnologiesryk.com contact form
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will contact you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    // Return specific error messages based on error type
    let errorMessage = 'Failed to send message. Please try again later.'

    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Cannot connect to email server. Please contact us directly at info@wisetechnologiesryk.com'
      } else if (error.message.includes('Invalid login')) {
        errorMessage = 'Email service authentication failed. Please contact us directly at info@wisetechnologiesryk.com'
      } else if (error.message.includes('No recipients')) {
        errorMessage = 'Email configuration error. Please contact us directly.'
      }
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
