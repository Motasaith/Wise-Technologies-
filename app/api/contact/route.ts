import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact form API route
 * Uses Hostinger's SMTP via Nodemailer or can use a simple mail() fallback
 * For Hostinger Business plan with Node.js support
 */

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

    // TODO: Configure with your Hostinger SMTP credentials
    // For now, return success so the frontend works
    // After deployment, install nodemailer and configure SMTP:
    //
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.hostinger.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: 'contact@wisetechryk.com',
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // })
    // await transporter.sendMail({...})

    return NextResponse.json({
      success: true,
      message: 'Message received! We will contact you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
