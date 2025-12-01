# Netlify Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Build tested successfully
- [x] All environment variables documented
- [x] Netlify configuration files created

---

## 🚀 Method 1: Deploy via Netlify Dashboard (Easiest)

### Step 1: Prepare Your Code

1. **Commit all changes to Git** (if using version control):
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push
   ```

2. **Or just proceed** if you're deploying directly without Git.

### Step 2: Create Netlify Account & Site

1. **Go to [Netlify.com](https://www.netlify.com)**
   - Sign up for free (or log in)
   - Free tier is perfect for portfolios

2. **Click "Add new site" → "Import an existing project"**

3. **Connect your Git repository** (if using Git):
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository
   - OR...

4. **OR deploy manually:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your `dist` folder (after running `npm run build`)

### Step 3: Configure Build Settings

Netlify should auto-detect Vite, but verify these settings:

**Build command:**
```
npm run build
```

**Publish directory:**
```
dist
```

**Node version:**
- Netlify will auto-detect
- Or set to: `18.x` or `20.x` (in Site settings → Build & deploy → Environment)

### Step 4: Add Environment Variables

1. Go to **Site settings** → **Environment variables**

2. **Add these variables** (if you're using them):

   ```
   VITE_EMAILJS_SERVICE_ID = service_b51yg9b
   VITE_EMAILJS_TEMPLATE_ID = template_4mld5lx
   VITE_EMAILJS_PUBLIC_KEY = kVOFIc8LamS88ga7Q
   ```

   Optional (if you set them up):
   ```
   VITE_CONTACT_EMAIL = roscoechisas@gmail.com
   VITE_SITE_URL = https://your-site-name.netlify.app
   VITE_GA_ENABLED = true
   VITE_GA_TRACKING_ID = G-XXXXXXXXXX
   ```

3. Click **Save**

4. **Trigger a new deploy:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**

### Step 5: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `danielchisasura.com`)
4. Follow DNS setup instructions

---

## 🔧 Method 2: Deploy via Netlify CLI (Advanced)

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

### Step 3: Initialize Site

```bash
cd "Grok web"
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Build command: `npm run build`
- Directory to deploy: `dist`

### Step 4: Deploy

```bash
# Build and deploy
npm run build
netlify deploy --prod
```

Or for a draft deploy (to test first):
```bash
netlify deploy
```

---

## 📝 Method 3: Drag & Drop (Quick Test)

1. Build your site locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the entire `dist` folder onto the page

4. Your site will be live in seconds!

**Note:** This is great for testing, but use Method 1 or 2 for production with automatic deployments.

---

## ⚙️ Post-Deployment Configuration

### 1. Update Site URL in Code (If Using Custom Domain)

After deployment, update `index.html` if your actual URL differs:
- Line 18: `og:url`
- Line 21: `og:image`
- Line 29: `twitter:image`
- Update `sitemap.xml` URLs

Or use environment variable `VITE_SITE_URL` in your code.

### 2. Test Your Site

✅ **Check these:**
- [ ] Homepage loads
- [ ] Navigation works
- [ ] All sections visible
- [ ] Contact form works
- [ ] Links work (GitHub, LinkedIn)
- [ ] Mobile responsive

### 3. Submit Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your site URL)
3. Submit sitemap: `https://your-site.netlify.app/sitemap.xml`

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Build command failed"**
- ✅ Check build command: `npm run build`
- ✅ Check Node version (should be 18.x or 20.x)
- ✅ Check `package.json` has correct scripts
- ✅ Check all dependencies are in `package.json`

**Solution:** Go to Site settings → Build & deploy → Environment
- Set Node version: `18` or `20`

### Environment Variables Not Working

**Error: Variables undefined**
- ✅ Make sure variable names start with `VITE_`
- ✅ Restart deploy after adding variables
- ✅ Check variable names match exactly (case-sensitive)

### Routes Not Working (404 Errors)

**Error: Links show 404**
- ✅ Check `netlify.toml` exists with redirects
- ✅ Check `public/_redirects` file exists
- ✅ Verify build includes both files

### Contact Form Not Working

**Error: EmailJS errors**
- ✅ Verify environment variables are set in Netlify
- ✅ Check EmailJS service is connected
- ✅ Test form locally first
- ✅ Check browser console for errors

---

## 📊 Useful Netlify Features

### Continuous Deployment

- **Automatic deploys:** Every push to main branch
- **Deploy previews:** Pull requests get preview URLs
- **Rollback:** Easy to revert to previous versions

### Analytics (Optional)

1. Go to Site settings → Analytics
2. Enable Netlify Analytics (paid) or use Google Analytics (free)

### Forms (Alternative to EmailJS)

Netlify has built-in form handling if you want to switch later:
- No backend needed
- Email notifications
- Spam filtering

---

## ✅ Deployment Checklist

- [ ] Build tested locally (`npm run build`)
- [ ] Site deployed to Netlify
- [ ] Environment variables added
- [ ] Site accessible at Netlify URL
- [ ] Contact form tested
- [ ] All links working
- [ ] Mobile responsive checked
- [ ] Custom domain configured (if needed)
- [ ] Sitemap submitted to Google (optional)

---

## 🎉 You're Live!

Your portfolio is now live on Netlify! Share your URL with:

- Recruiters
- LinkedIn profile
- Resume
- Email signature

**Free Netlify tier includes:**
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Form handling
- ✅ Deploy previews

---

## 📞 Need Help?

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Netlify Support:** [support.netlify.com](https://support.netlify.com)
- **Vite Deployment:** [vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)

---

**Your site URL will be:** `https://your-site-name.netlify.app`

**Or your custom domain if configured!**

