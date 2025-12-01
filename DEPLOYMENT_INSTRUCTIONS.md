# 🚀 Deployment Instructions - Step by Step

## ✅ READY TO DEPLOY!

Your site is built and ready. Follow these steps:

---

## **METHOD 1: Quick Drag & Drop (Fastest - 2 minutes)**

### Step 1: Go to Netlify Drop Zone
1. Open browser and go to: **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Make sure you're logged in to Netlify

### Step 2: Drag Your Site
1. Open File Explorer
2. Navigate to: `C:\Users\butma\OneDrive\Documents\Portfolio Websites\Opus\Grok web\dist`
3. **Drag the entire `dist` folder** onto the Netlify page
4. Wait 30-60 seconds
5. **Done!** Your site is live at: `https://random-name.netlify.app`

---

## **METHOD 2: Connect Git Repository (Recommended for Updates)**

### Step 1: Push to GitHub (if not already)
```bash
cd "Grok web"
git init
git add .
git commit -m "Ready for deployment"
```

Then push to GitHub (create repo on GitHub first if needed)

### Step 2: Deploy from Git
1. Go to **[netlify.com](https://www.netlify.com)**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** (or GitLab/Bitbucket)
4. Select your repository
5. Netlify auto-detects:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

---

## ⚙️ STEP 3: Add Environment Variables (IMPORTANT!)

**Your contact form needs these to work:**

1. In Netlify, go to your site → **"Site settings"** → **"Environment variables"**
2. Click **"Add a variable"** and add these 3:

```
VITE_EMAILJS_SERVICE_ID = service_b51yg9b
VITE_EMAILJS_TEMPLATE_ID = template_4mld5lx
VITE_EMAILJS_PUBLIC_KEY = kVOFIc8LamS88ga7Q
```

3. Go to **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**

---

## 🧪 STEP 4: Test Everything

- [ ] Visit your Netlify URL
- [ ] Test typing animation
- [ ] Test dark mode toggle
- [ ] Test contact form (check your email!)
- [ ] Test all navigation links
- [ ] Test on mobile

---

**Ready? Let's start with Step 1!**

