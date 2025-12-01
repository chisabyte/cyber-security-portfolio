# ✅ Deployment Checklist - Step by Step

## 🎯 Current Status

✅ **Git repository initialized**  
✅ **Files staged and committed**  
⏳ **Next: Create GitHub repository**

---

## 📋 STEP-BY-STEP DEPLOYMENT

### ✅ STEP 1: Git Setup (COMPLETED)
- [x] Git initialized
- [x] Files committed
- [x] Git user configured

---

### 📋 STEP 2: Create GitHub Repository

**Action Required:** Do this on GitHub website

1. **Go to:** [github.com/new](https://github.com/new)
2. **Repository name:** `cyber-security-portfolio` (or your choice)
3. **Description:** "Cyber Security Portfolio Website"
4. **Visibility:** Public (or Private)
5. **DO NOT check:**
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. **Click:** "Create repository"

**After creating, copy the repository URL (you'll need it for Step 3)**

---

### 📋 STEP 3: Connect to GitHub

**After you create the GitHub repo, tell me:**
- Your GitHub username
- The repository name you created

**Or run these commands yourself (replace YOUR_USERNAME and REPO_NAME):**

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Note:** You may need a GitHub Personal Access Token instead of password.

---

### 📋 STEP 4: Deploy to Netlify

1. Go to: [app.netlify.com](https://app.netlify.com)
2. Click: "Add new site" → "Import an existing project"
3. Click: "Deploy with GitHub"
4. Authorize Netlify to access GitHub
5. Select your repository
6. Verify settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click: "Deploy site"

---

### 📋 STEP 5: Add Environment Variables

**In Netlify Dashboard:**

1. Your site → "Site settings" → "Environment variables"
2. Add these 3 variables:
   - `VITE_EMAILJS_SERVICE_ID` = `service_b51yg9b`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_4mld5lx`
   - `VITE_EMAILJS_PUBLIC_KEY` = `kVOFIc8LamS88ga7Q`
3. Save and redeploy

---

## 🎯 NEXT ACTION

**Create the GitHub repository** (Step 2 above), then tell me:
- Your GitHub username
- Repository name

I'll help you push the code!

