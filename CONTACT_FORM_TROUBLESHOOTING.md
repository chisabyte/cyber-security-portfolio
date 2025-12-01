# Contact Form Troubleshooting Guide

If you're getting errors when submitting the contact form, follow these steps:

## 🔍 Step 1: Check Environment Variables

Make sure your `.env` file exists and has the correct values:

```env
VITE_EMAILJS_SERVICE_ID=service_b51yg9b
VITE_EMAILJS_TEMPLATE_ID=template_4mld5lx
VITE_EMAILJS_PUBLIC_KEY=kVOFIc8LamS88ga7Q
```

**Important:** After creating or updating `.env`, you MUST restart your dev server:
```bash
# Stop server (Ctrl+C)
npm run dev
```

## 🔍 Step 2: Check Browser Console

Open browser DevTools (F12) and check the Console tab when submitting the form. Look for:
- Error messages from EmailJS
- Configuration logs
- Any network errors

## 🔍 Step 3: Verify EmailJS Template

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) and check:

1. **Service Connection:**
   - Navigate to Email Services
   - Verify `service_b51yg9b` is connected and working
   - Test sending an email

2. **Template Variables:**
   - Go to Email Templates → `template_4mld5lx`
   - Make sure your template includes these variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{message}}`
     - `{{subject}}` (optional)
     - `{{to_email}}` (optional)

3. **Template Example:**
   ```
   Subject: {{subject}}
   
   New Contact Form Message
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```

## 🔍 Step 4: Common Issues & Fixes

### Issue: "EmailJS is not configured"
**Fix:**
- Check `.env` file exists in project root
- Verify variable names start with `VITE_`
- Restart dev server after creating `.env`

### Issue: "Service not responding" or "Invalid service ID"
**Fix:**
- Verify Service ID is correct: `service_b51yg9b`
- Check service is active in EmailJS dashboard
- Ensure service is connected to your email

### Issue: "Template not found"
**Fix:**
- Verify Template ID: `template_4mld5lx`
- Check template exists in EmailJS dashboard
- Ensure template is published/saved

### Issue: "Invalid public key"
**Fix:**
- Verify Public Key: `kVOFIc8LamS88ga7Q`
- Check key is correct in EmailJS Account settings
- Try regenerating the key if needed

### Issue: "Template variables missing"
**Fix:**
- Check template includes all required variables
- Variable names must match exactly (case-sensitive)
- Use `{{variable_name}}` format in template

## 🔍 Step 5: Test EmailJS Directly

Test your EmailJS setup independently:

1. Go to EmailJS Dashboard
2. Navigate to Email Templates
3. Click "Test" button on your template
4. Fill in test values and send
5. Check if email arrives

If this works but your form doesn't, the issue is with the form integration.

## 🔍 Step 6: Check Network Tab

1. Open browser DevTools → Network tab
2. Submit the form
3. Look for requests to `api.emailjs.com`
4. Check response status:
   - 200 = Success
   - 400 = Bad request (check template variables)
   - 401 = Authentication error (check public key)
   - 404 = Service/Template not found

## 🔍 Step 7: Verify Form Data

The form sends:
```javascript
{
  from_name: "User's name",
  from_email: "user@example.com",
  message: "Message content",
  to_email: "roscoechisas@gmail.com",
  subject: "Contact Form Message from [Name]"
}
```

Make sure your EmailJS template can receive these variables.

## 🔧 Quick Fix Checklist

- [ ] `.env` file exists in project root
- [ ] Environment variables are correct
- [ ] Dev server restarted after creating `.env`
- [ ] EmailJS service is connected and active
- [ ] Template exists and is saved
- [ ] Template variables match form data
- [ ] Public key is correct
- [ ] Browser console checked for errors
- [ ] Network tab checked for API responses

## 📧 Alternative: Direct Email Link

If EmailJS continues to have issues, users can still contact you via:
- Direct email link: `mailto:roscoechisas@gmail.com`
- Shown in the Contact Information section

## 🆘 Still Having Issues?

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your EmailJS account is active
3. Check free tier limits (200 emails/month)
4. Try creating a new template and updating `.env` with new template ID

## 📝 Error Message Reference

**"EmailJS is not configured"**
→ Missing or incorrect `.env` file, or dev server not restarted

**"Service not responding"**
→ Service ID incorrect or service not active

**"Template not found"**
→ Template ID incorrect or template doesn't exist

**"Invalid public key"**
→ Public key incorrect or account issue

**Generic error messages**
→ Check browser console for detailed error logs

---

*For production deployment, remember to add environment variables to your hosting platform settings (Netlify, Vercel, etc.)*

