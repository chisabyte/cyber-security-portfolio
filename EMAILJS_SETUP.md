# EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form can send emails directly to your inbox.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Create an account using your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail is recommended)
4. Follow the instructions to connect your email account
5. **Save your Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** Contact Form

**Subject:** New Message from Portfolio Contact Form

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **Save your Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** - you'll need this later

## Step 5: Configure Your Project

1. In the root of your project (same folder as `package.json`), create a file named `.env`
2. Add the following content (replace with your actual values):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with:
   - `your_service_id_here` → Your EmailJS Service ID from Step 2
   - `your_template_id_here` → Your EmailJS Template ID from Step 3
   - `your_public_key_here` → Your EmailJS Public Key from Step 4

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Test Your Setup

1. Make sure your `.env` file is saved
2. Restart your development server:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then start it again:
   npm run dev
   ```
3. Fill out the contact form on your website
4. Submit the form
5. Check your email inbox - you should receive the message!

## Important Notes

- **Never commit your `.env` file to Git!** It's already in `.gitignore`
- The `.env` file should remain in your local project folder
- For production deployment (Netlify, Vercel, etc.), you'll need to add these environment variables in your hosting platform's settings

## Deployment Configuration

When deploying to hosting platforms, add these environment variables in your platform's dashboard:

### Netlify
1. Go to Site Settings → Environment Variables
2. Add each variable (VITE_EMAILJS_SERVICE_ID, etc.)

### Vercel
1. Go to Project Settings → Environment Variables
2. Add each variable (VITE_EMAILJS_SERVICE_ID, etc.)

### GitHub Pages
Environment variables need to be set differently. Consider using a different approach or hosting platform.

## Troubleshooting

### Form shows error message about EmailJS not configured
- Make sure you created the `.env` file in the correct location
- Check that variable names start with `VITE_` (required for Vite)
- Restart your development server after creating/updating `.env`

### Emails not being received
- Check your spam folder
- Verify EmailJS service is connected to your email
- Check EmailJS dashboard for error logs
- Verify all three IDs are correct in your `.env` file

### Still having issues?
- Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Verify your email service connection in EmailJS dashboard
- Make sure you're not exceeding the free tier limit (200 emails/month)

## Alternative: Direct Email Link

If you don't want to set up EmailJS right now, the contact form will show an error message with a link to email you directly. Users can still contact you via the email link in the contact section.

