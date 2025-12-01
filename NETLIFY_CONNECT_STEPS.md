# 🚀 Connect to Netlify - Final Steps

## ✅ COMPLETED

- [x] Git repository initialized
- [x] Code pushed to GitHub
- [x] Repository: https://github.com/chisabyte/cyber-security-portfolio

---

## 📋 STEP 3: Connect to Netlify

### Step 3a: Go to Netlify
1. Open: **[app.netlify.com](https://app.netlify.com)** in your browser
2. Make sure you're logged in

### Step 3b: Import Your Project
1. Click **"Add new site"** button (top right)
2. Click **"Import an existing project"**
3. You'll see Git providers - click **"Deploy with GitHub"**

### Step 3c: Authorize Netlify
1. You'll be asked to authorize Netlify
2. Click **"Authorize Netlify"** or **"Install Netlify"**
3. You can choose:
   - **All repositories** (easier)
   - **Only select repositories** (more secure - choose "cyber-security-portfolio")

### Step 3d: Select Your Repository
1. Find **"cyber-security-portfolio"** in the list
2. Click on it

### Step 3e: Configure Build Settings
Netlify should **auto-detect** these, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (leave empty)

**These should be automatically filled in!**

### Step 3f: Deploy!
1. Click **"Deploy site"** button
2. Wait 1-2 minutes for the first deployment
3. Watch the build logs (you'll see the build progress)

---

## 📋 STEP 4: Add Environment Variables

**Critical - Your contact form won't work without these!**

### Step 4a: Open Site Settings
1. After deployment completes, click on your **site name**
2. Go to **"Site settings"** (top navigation)
3. Click **"Environment variables"** (left sidebar)

### Step 4b: Add Variables
Click **"Add a variable"** button and add these **one by one**:

**Variable 1:**
```
Key: VITE_EMAILJS_SERVICE_ID
Value: service_b51yg9b
```

**Variable 2:**
```
Key: VITE_EMAILJS_TEMPLATE_ID
Value: template_4mld5lx
```

**Variable 3:**
```
Key: VITE_EMAILJS_PUBLIC_KEY
Value: kVOFIc8LamS88ga7Q
```

### Step 4c: Redeploy
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** dropdown
3. Click **"Deploy site"**
4. Wait for deployment to complete

---

## 📋 STEP 5: Test Your Live Site

1. Visit your Netlify URL (e.g., `https://cyber-security-portfolio-abc123.netlify.app`)
2. Test everything:
   - ✅ Homepage loads
   - ✅ Typing animation works
   - ✅ Dark mode toggle works
   - ✅ Contact form works (test by sending yourself a message!)
   - ✅ All navigation links work
   - ✅ Mobile responsive

---

## 🎉 Success!

Your portfolio is now:
- ✅ Live on Netlify
- ✅ Connected to GitHub
- ✅ Auto-deploys on every push!

---

## 🔄 Future Updates

To update your site in the future:

```powershell
git add .
git commit -m "Update description"
git push
```

Netlify will automatically detect the push and redeploy! 🚀

---

## 📱 Your Site URL

After deployment, you'll get a URL like:
`https://cyber-security-portfolio-abc123.netlify.app`

You can also:
- Change the site name in Netlify settings
- Add a custom domain later

---

**Ready? Follow Step 3 above to connect to Netlify!**

