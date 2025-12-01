# 🚀 Deploy Your Portfolio to Netlify - Step by Step

## ✅ Pre-Flight Check

✅ Build successful  
✅ Netlify config files ready  
✅ All files prepared  

---

## 📋 STEP 1: Create Netlify Account (If You Don't Have One)

1. **Open your browser** and go to: **[netlify.com](https://www.netlify.com)**
2. Click **"Sign up"** (top right corner)
3. Choose how to sign up:
   - **Option A:** Sign up with GitHub (recommended)
   - **Option B:** Sign up with Email
4. Complete the registration

**✅ Checkpoint:** You should now be logged into Netlify dashboard.

---

## 📋 STEP 2: Build Your Site Locally

The build is already successful! But if you need to rebuild:

1. Open terminal in your project folder
2. Run: `npm run build`
3. Wait for "✓ built successfully"

**✅ Checkpoint:** You should have a `dist` folder with all your built files.

---

## 📋 STEP 3: Deploy to Netlify (Choose Your Method)

### **METHOD 1: Drag & Drop (Easiest - 5 minutes)**

**Step 3a: Go to Netlify Drop Zone**
1. Open: **[app.netlify.com/drop](https://app.netlify.com/drop)** in your browser
2. Make sure you're logged in

**Step 3b: Drag Your Built Folder**
1. Open File Explorer on your computer
2. Navigate to: `Grok web/dist` folder
3. **Drag the entire `dist` folder** onto the Netlify drop zone
4. Wait 30-60 seconds for upload and deployment

**Step 3c: Get Your Live URL**
- Netlify will give you a URL like: `https://random-words-123.netlify.app`
- Your site is now LIVE! 🎉

**✅ Checkpoint:** Your site should be accessible at the Netlify URL.

---

### **METHOD 2: Connect Git Repository (Better for Updates)**

**Step 3a: Push Code to GitHub**
1. Create a GitHub repository (if you don't have one)
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

**Step 3b: Connect to Netlify**
1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"** (or GitLab/Bitbucket)
3. Authorize Netlify to access your repositories
4. Select your repository
5. Netlify will auto-detect settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

**Step 3c: Wait for Deployment**
- First deploy takes 1-2 minutes
- Watch the build logs
- You'll get a URL when complete

**✅ Checkpoint:** Site deployed and connected to Git.

---

## 📋 STEP 4: Add Environment Variables (CRITICAL for Contact Form)

**Without these, your contact form won't work!**

**Step 4a: Open Site Settings**
1. In Netlify dashboard, click on your site
2. Go to **"Site settings"** (top navigation)
3. Click **"Environment variables"** (left sidebar)

**Step 4b: Add Each Variable**
Click **"Add a variable"** and add these one by one:

```
Key: VITE_EMAILJS_SERVICE_ID
Value: service_b51yg9b
```

```
Key: VITE_EMAILJS_TEMPLATE_ID
Value: template_4mld5lx
```

```
Key: VITE_EMAILJS_PUBLIC_KEY
Value: kVOFIc8LamS88ga7Q
```

**Step 4c: Redeploy**
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for new deployment to complete

**✅ Checkpoint:** Environment variables added and site redeployed.

---

## 📋 STEP 5: Test Your Live Site

**Step 5a: Check Homepage**
- ✅ Visit your Netlify URL
- ✅ Verify all sections load
- ✅ Check dark mode toggle works
- ✅ Verify typing animation works

**Step 5b: Test Contact Form**
- ✅ Fill out the contact form
- ✅ Submit and check for success message
- ✅ Check your email inbox for the message

**Step 5c: Test Navigation**
- ✅ Click all navigation links
- ✅ Test on mobile (responsive)
- ✅ Check all buttons work

**✅ Checkpoint:** Everything works on live site.

---

## 📋 STEP 6: (Optional) Custom Domain

**Step 6a: Add Domain**
1. Go to **"Site settings"** → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `danielchisasura.com`)
4. Follow DNS setup instructions

**Step 6b: SSL Certificate**
- Netlify automatically provides SSL (HTTPS)
- Free and automatic!

---

## 🎉 You're Live!

Your portfolio is now deployed and accessible to the world!

**Next Steps:**
- Share your URL on LinkedIn
- Add to your resume
- Test everything thoroughly
- Update content as needed

---

## 🔧 Troubleshooting

**Contact form not working?**
- Check environment variables are set correctly
- Make sure you redeployed after adding variables
- Check EmailJS service is connected

**Build fails?**
- Check build logs in Netlify dashboard
- Verify Node version (should be 18.x or 20.x)
- Check for any console errors

**Need help?**
- Netlify docs: docs.netlify.com
- Check build logs in Netlify dashboard

