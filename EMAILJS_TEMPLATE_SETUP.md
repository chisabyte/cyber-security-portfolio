# EmailJS Template Setup Guide

Your EmailJS credentials have been configured! Now you need to set up your EmailJS template to handle both the Contact Form and CV Request Form.

## ✅ Your EmailJS Configuration

**Service ID:** `service_b51yg9b`  
**Template ID:** `template_4mld5lx`  
**Public Key:** `kVOFIc8LamS88ga7Q`

**Location:** `.env` file (already configured)

---

## 📧 Template Setup for Both Forms

You have two options:

### **Option 1: Use One Template for Both Forms** (Simpler)

This template will handle both contact messages and CV requests. EmailJS will include all variables, even if they're empty.

### **Option 2: Create Separate Templates** (More Organized)

Create two templates - one for contact form, one for CV requests. (See bottom of this guide)

---

## 🎯 Recommended: Single Template Setup

### **Step 1: Go to EmailJS Dashboard**

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Services** → Make sure `service_b51yg9b` is connected
3. Go to **Email Templates** → Click on `template_4mld5lx`

### **Step 2: Configure Template**

**Template Name:** Contact & CV Request Form

**Subject Line:**
```
{{subject}}
```

**Email Body/Content:**
```html
{% if full_name %}
=== CV REQUEST ===

Full Name: {{full_name}}
Work Email: {{work_email}}
Company: {{company}}
Job Title: {{job_title}}

Message:
{{message}}

---
Request submitted through portfolio CV request form.
{% else %}
=== CONTACT FORM MESSAGE ===

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Contact form submission from portfolio website.
{% endif %}

---

Reply to: {% if work_email %}{{work_email}}{% else %}{{from_email}}{% endif %}
```

**Or use this simpler version:**

**Subject:**
```
{{subject}}
```

**Content:**
```
{% if full_name %}
New CV Request Received

From: {{full_name}}
Work Email: {{work_email}}
Company: {{company}}
Job Title: {{job_title}}

Message:
{{message}}

Please review and respond.
Reply to: {{work_email}}

---
{% else %}
New Contact Form Message

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Reply to: {{from_email}}

---
{% endif %}

This message was sent from your portfolio contact form.
```

### **Step 3: Save Template**

Click **Save** in the EmailJS dashboard.

---

## 📝 Variable Reference

### **Contact Form Variables:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - Message content
- `{{to_email}}` - Always: roscoechisas@gmail.com
- `{{subject}}` - Auto-generated: "Contact Form Submission"

### **CV Request Form Variables:**
- `{{full_name}}` - Requester's full name
- `{{work_email}}` - Requester's work email
- `{{company}}` - Company name
- `{{job_title}}` - Job title
- `{{message}}` - Optional message
- `{{to_email}}` - Always: roscoechisas@gmail.com
- `{{subject}}` - Auto-generated: "CV Request from [Name] at [Company]"

---

## ✅ Testing Your Setup

### **Test 1: Contact Form**

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to Contact section
3. Fill out form:
   - Name: `Test User`
   - Email: `test@example.com`
   - Message: `This is a test message`
4. Submit form
5. Check email at `roscoechisas@gmail.com`

### **Test 2: CV Request Form**

1. Go to "Request Full CV" section
2. Fill out form:
   - Full Name: `Test Recruiter`
   - Work Email: `test@company.com`
   - Company: `Test Company`
   - Job Title: `Recruiter`
   - Message: `Testing CV request form`
3. Submit form
4. Check email at `roscoechisas@gmail.com`

Both should arrive at the same email address with different content!

---

## 🔧 Alternative: Separate Templates

If you want separate templates for better organization:

### **Create Template 1: Contact Form**

**Template ID:** `template_4mld5lx` (your existing one)

**Subject:**
```
Contact Form: {{from_name}}
```

**Content:**
```
New contact form message from portfolio.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

### **Create Template 2: CV Request Form**

1. In EmailJS Dashboard, click **Create New Template**
2. Name it: "CV Request Template"
3. Copy the new Template ID (e.g., `template_xyz789`)

**Subject:**
```
CV Request: {{full_name}} at {{company}}
```

**Content:**
```
New CV request from portfolio.

Full Name: {{full_name}}
Work Email: {{work_email}}
Company: {{company}}
Job Title: {{job_title}}

Message:
{{message}}

---
Reply to: {{work_email}}
```

**Then update your `.env` file:**
```env
VITE_EMAILJS_SERVICE_ID=service_b51yg9b
VITE_EMAILJS_TEMPLATE_ID=template_4mld5lx
VITE_EMAILJS_PUBLIC_KEY=kVOFIc8LamS88ga7Q
VITE_EMAILJS_CV_TEMPLATE_ID=template_xyz789  # Add this line with your new template ID
```

**Note:** The RequestCV form will automatically use `VITE_EMAILJS_CV_TEMPLATE_ID` if set, otherwise it uses the default `VITE_EMAILJS_TEMPLATE_ID`.

---

## 🚀 Next Steps

1. ✅ **Template is configured** - Set up template in EmailJS dashboard
2. ✅ **Restart dev server** - Environment variables load on startup
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```
3. ✅ **Test both forms** - Submit test messages
4. ✅ **Verify emails arrive** - Check your inbox

---

## 📋 Template Checklist

- [ ] EmailJS template created/updated
- [ ] Template includes variables for both forms
- [ ] Subject line configured
- [ ] Email body configured
- [ ] Template saved in EmailJS dashboard
- [ ] Dev server restarted (to load .env variables)
- [ ] Contact form tested
- [ ] CV request form tested
- [ ] Emails received successfully

---

## ⚠️ Important Notes

1. **Environment Variables:** You must restart your dev server after creating `.env` file
2. **Template Variables:** Make sure variable names match exactly (case-sensitive)
3. **Email Service:** Verify your email service (`service_b51yg9b`) is connected to your email
4. **Production:** When deploying, add these same environment variables to your hosting platform (Netlify, Vercel, etc.)

---

## 🎉 You're All Set!

Once your EmailJS template is configured:
- ✅ Contact form will send emails
- ✅ CV request form will send emails
- ✅ Both forms use your configured credentials
- ✅ All emails go to: roscoechisas@gmail.com

**Need help?** Check EmailJS documentation or verify your template variables match the form submissions.

