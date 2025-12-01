# 📚 Git Deployment Steps - Complete Guide

## ✅ STEP 1: Git Repository Initialized

Git has been initialized in your project folder.

---

## 📋 STEP 2: Create GitHub Repository

**Do this on GitHub website:**

1. **Go to [github.com](https://github.com)** and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. **Repository name:** `cyber-security-portfolio` (or any name you like)
4. **Description:** "Cyber Security Portfolio Website - React + Vite"
5. **Visibility:** Choose Public (recommended) or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

**After creating, GitHub will show you commands. DON'T run them yet - we'll do it step by step!**

---

## 📋 STEP 3: Connect Local Repository to GitHub

**In your terminal (PowerShell), run these commands one by one:**

### 3a: Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

**Example:**
```powershell
git remote add origin https://github.com/chisabyte/cyber-security-portfolio.git
```

### 3b: Rename branch to main (if needed)

```powershell
git branch -M main
```

### 3c: Push to GitHub

```powershell
git push -u origin main
```

**You'll be asked for GitHub credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)

**How to create Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Select scopes: `repo` (full control)
4. Copy the token and use it as password when pushing

---

## 📋 STEP 4: Connect to Netlify

**After code is on GitHub:**

1. **Go to [netlify.com](https://www.netlify.com)** and log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. **Authorize Netlify** to access your GitHub repositories
5. **Select your repository** (cyber-security-portfolio)
6. **Configure build settings:**
   - Build command: `npm run build` ✅ (auto-detected)
   - Publish directory: `dist` ✅ (auto-detected)
7. Click **"Deploy site"**

**Wait 1-2 minutes** for the first deployment.

---

## 📋 STEP 5: Add Environment Variables

**Critical for contact form to work!**

1. In Netlify dashboard, click on your **site name**
2. Go to **"Site settings"** → **"Environment variables"**
3. Click **"Add a variable"** and add these 3:

```
VITE_EMAILJS_SERVICE_ID = service_b51yg9b
```

```
VITE_EMAILJS_TEMPLATE_ID = template_4mld5lx
```

```
VITE_EMAILJS_PUBLIC_KEY = kVOFIc8LamS88ga7Q
```

4. Click **"Save"**
5. Go to **"Deploys"** tab
6. Click **"Trigger deploy"** → **"Deploy site"**
7. Wait for deployment to complete

---

## 📋 STEP 6: Test Your Live Site

1. Visit your Netlify URL (e.g., `https://cyber-security-portfolio.netlify.app`)
2. Test everything:
   - ✅ Typing animation
   - ✅ Dark mode toggle
   - ✅ Contact form
   - ✅ All navigation links
   - ✅ Mobile responsive

---

## 🎉 Done!

Your site is now:
- ✅ Live on Netlify
- ✅ Connected to GitHub
- ✅ Auto-deploys on every push!

**Every time you push to GitHub, Netlify automatically deploys the changes!**

---

## 🔄 Future Updates

To update your site:

```powershell
git add .
git commit -m "Update description"
git push
```

Netlify automatically detects the push and redeploys! 🚀

