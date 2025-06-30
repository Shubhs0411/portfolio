# EmailJS Setup Guide

Your contact form is now configured to use EmailJS! Here's how to set it up:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{message}}` - Sender's message
4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_abc123def456`)

## 5. Update Your Code

Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
  e.target as HTMLFormElement,
  'YOUR_PUBLIC_KEY'      // Replace with your actual Public Key
)
```

## 6. Test Your Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email to confirm it works

## Example Email Template

Here's a simple template you can use:

**Subject:** New Contact Form Message from {{user_name}}

**Body:**
```
Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

## Free Tier Limits

- EmailJS free tier includes 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more emails

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles all email sending securely
- No backend server required

Your contact form is now ready to send emails directly from the frontend! 🎉 