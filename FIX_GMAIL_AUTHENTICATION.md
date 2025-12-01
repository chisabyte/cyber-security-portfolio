# Fix Gmail Authentication Error

## 🔴 Error Message
```
Gmail_API: Request had insufficient authentication scopes.
```

This means your EmailJS Gmail service doesn't have the correct permissions/scopes to send emails.

---

## ✅ Solution: Update Gmail Service Scopes

### **Step 1: Go to EmailJS Dashboard**

1. Visit: https://dashboard.emailjs.com/
2. Log in to your account

### **Step 2: Navigate to Email Services**

1. Click on **"Email Services"** in the left sidebar
2. Find your service: `service_b51yg9b`
3. Click on it to view/edit

### **Step 3: Reconnect Gmail with Proper Scopes**

You need to reconnect your Gmail account with the correct permissions:

1. Click **"Reconnect"** or **"Edit"** button on the service
2. Select **Gmail** as your email provider
3. When Google asks for permissions, make sure it requests:
   - ✅ Send email on your behalf
   - ✅ Read and compose emails
   - ✅ Manage email settings (if available)

### **Step 4: Grant Full Permissions**

**Important:** When Google shows the permission dialog:
- ✅ **Check all permission boxes**
- ✅ Click **"Allow"** or **"Continue"**
- ✅ Don't restrict any permissions

### **Step 5: Save and Test**

1. Click **"Save"** or **"Update"** in EmailJS dashboard
2. Click **"Test"** button to send a test email
3. Verify you receive the test email

---

## 🔄 Alternative: Remove and Re-add Service

If reconnecting doesn't work:

1. **Delete the current service:**
   - Go to Email Services
   - Click on `service_b51yg9b`
   - Click **"Delete"** or **"Remove"**

2. **Create a new service:**
   - Click **"Add New Service"**
   - Select **Gmail**
   - Grant ALL permissions when asked
   - Save the new Service ID

3. **Update your `.env` file:**
   ```env
   VITE_EMAILJS_SERVICE_ID=your_new_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_4mld5lx
   VITE_EMAILJS_PUBLIC_KEY=kVOFIc8LamS88ga7Q
   ```

4. **Restart dev server:**
   ```bash
   npm run dev
   ```

---

## 🔍 Verify Service is Working

### **Test 1: EmailJS Dashboard Test**
1. Go to EmailJS Dashboard
2. Navigate to Email Templates
3. Click on `template_4mld5lx`
4. Click **"Test"** button
5. Fill in test values and send
6. Check if email arrives at `roscoechisas@gmail.com`

If this test fails, the service connection is the problem.

### **Test 2: Check Service Status**
- Service should show as **"Active"** or **"Connected"**
- No error messages in the service settings
- Gmail account should be listed and connected

---

## 🔧 Common Issues

### **Issue: "Insufficient scopes"**
**Cause:** Gmail OAuth permissions are too restricted  
**Fix:** Reconnect service and grant all permissions

### **Issue: Service shows "Disconnected"**
**Fix:** Click "Reconnect" and authorize again

### **Issue: "Access denied"**
**Fix:** 
1. Check if you're using the correct Gmail account
2. Make sure you're logged into the right Google account
3. Clear browser cache and try again

### **Issue: Test email works but form doesn't**
**Fix:** 
- Check environment variables are correct
- Restart dev server
- Check browser console for errors

---

## 📝 Step-by-Step: Reconnect Gmail Service

1. **Go to:** https://dashboard.emailjs.com/admin/integration
2. **Find:** Your Gmail service (`service_b51yg9b`)
3. **Click:** "Reconnect" or the service settings icon
4. **Select:** Gmail
5. **Grant Permissions:** 
   - ✅ Allow EmailJS to send emails
   - ✅ Allow EmailJS to access your email account
   - ✅ Allow all requested permissions
6. **Complete:** OAuth flow
7. **Verify:** Service shows as "Connected"
8. **Test:** Send test email from EmailJS dashboard

---

## ✅ After Fixing

1. **Restart dev server** (if you changed `.env`):
   ```bash
   npm run dev
   ```

2. **Test contact form:**
   - Fill out form
   - Submit
   - Should receive email at `roscoechisas@gmail.com`

3. **Check browser console** (F12):
   - Should see success message
   - No error messages

---

## 🆘 Still Having Issues?

### **Option 1: Use a Different Email Provider**

If Gmail continues to have issues, try:
- **Outlook/Hotmail** - Often easier to connect
- **SendGrid** - Professional email service
- **Mailgun** - Developer-friendly

### **Option 2: Check EmailJS Status**

- Visit: https://status.emailjs.com/
- Check if there are any service outages

### **Option 3: Contact EmailJS Support**

If nothing works:
- EmailJS Support: https://www.emailjs.com/support/
- Include error message and service ID

---

## 📋 Quick Checklist

- [ ] Service shows as "Connected" in EmailJS dashboard
- [ ] All permissions granted during OAuth
- [ ] Test email works from EmailJS dashboard
- [ ] `.env` file has correct Service ID
- [ ] Dev server restarted (if `.env` changed)
- [ ] Browser console checked for errors
- [ ] Contact form tested again

---

**Most Important:** Make sure you grant ALL permissions when reconnecting Gmail. The error is specifically about insufficient authentication scopes, which means Google needs more permissions to send emails on your behalf.

