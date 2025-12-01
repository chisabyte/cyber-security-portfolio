# 🚀 Quick Netlify Deployment

## Fastest Method (5 Minutes)

### Step 1: Build Your Site
```bash
npm run build
```
✅ This creates a `dist` folder with your built site

### Step 2: Go to Netlify
1. Visit: **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Sign up/Login (free)
3. **Drag and drop** your entire `dist` folder
4. Wait ~30 seconds
5. **Done!** Your site is live! 🎉

### Step 3: Add Environment Variables (For Contact Form)
1. In Netlify, go to **Site settings** → **Environment variables**
2. Add these 3 variables:
   - `VITE_EMAILJS_SERVICE_ID` = `service_b51yg9b`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_4mld5lx`
   - `VITE_EMAILJS_PUBLIC_KEY` = `kVOFIc8LamS88ga7Q`
3. Go to **Deploys** → **Trigger deploy** → **Deploy site**

### Step 4: Test
- ✅ Visit your Netlify URL (e.g., `https://random-name-123.netlify.app`)
- ✅ Test the contact form
- ✅ Check all links work

---

## Better Method: Connect Git (For Automatic Deploys)

### Step 1: Push to GitHub/GitLab
- Push your code to a Git repository

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://www.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Choose your Git provider
4. Select your repository
5. Netlify auto-detects Vite! Just click **Deploy**

### Step 3: Add Environment Variables
Same as Step 3 above ↑

### Step 4: Enjoy Automatic Deploys!
- Every time you push to main branch → Auto-deploy! 🚀

---

## Your Site URL
After deployment, you'll get a URL like:
- `https://your-site-name-123.netlify.app`

Or add a custom domain in Site settings → Domain management

---

## Need More Details?
See `NETLIFY_DEPLOYMENT_GUIDE.md` for complete instructions.

