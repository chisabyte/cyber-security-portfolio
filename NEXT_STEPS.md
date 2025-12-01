# 🎯 Next Steps - Deploy to Netlify

## ✅ COMPLETED

- [x] Git repository initialized
- [x] All files committed locally
- [x] Git user configured

---

## 📋 STEP 2: Create GitHub Repository

**Do this now on GitHub:**

1. **Open:** [github.com/new](https://github.com/new) in your browser
2. **Repository name:** `cyber-security-portfolio` (or any name you prefer)
3. **Description:** "Cyber Security Portfolio Website - React + Vite"
4. **Visibility:** Choose Public or Private
5. **IMPORTANT:** Do NOT check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click **"Create repository"**

**After creating, GitHub will show you a page with instructions. DON'T follow those yet - we'll do it differently!**

---

## 📋 STEP 3: Push Code to GitHub

**After you create the GitHub repository, tell me:**

1. **Your GitHub username:** (e.g., "chisabyte")
2. **Repository name:** (e.g., "cyber-security-portfolio")

**Then I'll run the commands to push your code!**

Or if you want to do it yourself, run these commands (replace YOUR_USERNAME and REPO_NAME):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Note:** If asked for password, use a GitHub Personal Access Token:
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Select scope: `repo`
- Copy token and use it as password

---

## 📋 STEP 4: Connect to Netlify

After code is pushed to GitHub:

1. Go to: [app.netlify.com](https://app.netlify.com)
2. Click: **"Add new site"** → **"Import an existing project"**
3. Click: **"Deploy with GitHub"**
4. Authorize Netlify (if first time)
5. Select your repository
6. Verify build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click: **"Deploy site"**

---

## 📋 STEP 5: Add Environment Variables

**Critical for contact form!**

1. In Netlify → Your site → **"Site settings"**
2. Click **"Environment variables"**
3. Add these 3 variables:
   - `VITE_EMAILJS_SERVICE_ID` = `service_b51yg9b`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_4mld5lx`
   - `VITE_EMAILJS_PUBLIC_KEY` = `kVOFIc8LamS88ga7Q`
4. Click **"Save"**
5. Go to **"Deploys"** → **"Trigger deploy"** → **"Deploy site"**

---

## 🎉 DONE!

Your site will be live and auto-deploy on every GitHub push!

---

## ⏭️ WHAT TO DO NOW:

**Create the GitHub repository** (Step 2 above), then tell me:
- Your GitHub username
- Repository name

And I'll help push the code! 🚀

