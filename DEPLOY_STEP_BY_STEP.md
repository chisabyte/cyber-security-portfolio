# 🚀 Step-by-Step Deployment Guide to Netlify

## Pre-Deployment Checklist ✅

- [x] Build tested successfully
- [x] Netlify configuration files ready (`netlify.toml`, `public/_redirects`)
- [x] Environment variables documented
- [ ] Netlify account created
- [ ] Environment variables added to Netlify

---

## STEP 1: Create Netlify Account

1. Go to **[netlify.com](https://www.netlify.com)**
2. Click **"Sign up"** (top right)
3. Choose sign up method:
   - **GitHub** (recommended - easiest for automatic deployments)
   - **Email** (alternative option)
4. Complete registration

✅ **Status:** Once logged in, proceed to Step 2.

---

## STEP 2: Choose Deployment Method

You have **3 options**. Choose the one that works best for you:

### **Option A: Drag & Drop (Fastest - 2 minutes)**
- Best for: Quick test deployment
- Pros: Instant, no Git needed
- Cons: Manual updates required

### **Option B: Connect Git Repository (Recommended)**
- Best for: Automatic deployments
- Pros: Auto-deploys on every push
- Cons: Need Git repository

### **Option C: Netlify CLI (Advanced)**
- Best for: Developers comfortable with command line
- Pros: Full control
- Cons: Requires installing CLI

**Which method would you like to use?** Let me know and I'll guide you through it!

---

## STEP 3: Add Environment Variables

**Important:** Your contact form needs EmailJS credentials.

After deploying, you'll need to add these in Netlify:

1. Go to **Site settings** → **Environment variables**
2. Add these 3 variables:

```
VITE_EMAILJS_SERVICE_ID = service_b51yg9b
VITE_EMAILJS_TEMPLATE_ID = template_4mld5lx
VITE_EMAILJS_PUBLIC_KEY = kVOFIc8LamS88ga7Q
```

3. Click **Save**
4. Trigger a new deploy (Deploys → Trigger deploy)

---

## Next Steps

Once you choose a deployment method, I'll guide you through the specific steps for that method!

