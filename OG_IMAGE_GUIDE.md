# Open Graph Image Setup Guide

## What is an Open Graph Image?

An Open Graph image is the preview image that appears when you share your portfolio link on social media platforms like LinkedIn, Facebook, Twitter/X, WhatsApp, etc. It makes your link look professional and increases click-through rates.

**Recommended Size:** 1200 x 630 pixels (1.91:1 aspect ratio)

---

## Method 1: Use an Online Tool (Easiest - No Design Skills Needed)

### Option A: Canva (Free & Easy)
1. Go to [Canva.com](https://www.canva.com) and sign up/login (free)
2. Click "Create a design"
3. Click "Custom size" → Enter: **1200 x 630** pixels
4. Design your image with:
   - Your name: "Daniel Chisasura"
   - Tagline: "Cyber Security Portfolio"
   - Subtitle: "SOC Analyst | ECU Graduate | Security Automation"
   - Maybe a subtle cyber-themed background or pattern
5. Download as **JPG** or **PNG**
6. Save as `og-image.jpg` in your `public` folder

### Option B: OG Image Generators
- **[Bannerbear](https://www.bannerbear.com/tools/og-image-generator/)** - Free online tool
- **[og-image.vercel.app](https://og-image.vercel.app/)** - GitHub's OG image generator
- **[Social Share Preview](https://socialsharepreview.com/)** - Test your image

---

## Method 2: Use PowerPoint/Google Slides

1. Create a new presentation
2. Set slide size to **Custom**: 1200 x 630 pixels
   - PowerPoint: Design → Slide Size → Custom
   - Google Slides: File → Page setup → Custom
3. Design your image with:
   - Large text with your name and title
   - Background color (cyber theme: dark blue, green, or gradient)
   - Optional: Add icons or shapes
4. Export/Save as image (JPG or PNG)
5. Rename to `og-image.jpg` and place in `public` folder

---

## Method 3: Use a Simple Text-Based Image (Quick Option)

You can create a simple, professional image with just text:

**Content to include:**
- **Title (Large):** Daniel Chisasura
- **Subtitle (Medium):** Cyber Security Portfolio
- **Tagline (Small):** SOC Analyst | ECU Graduate | Security Automation

**Design tips:**
- Use a dark background (e.g., #0a1929 - cyber-dark color)
- White or light text
- Add accent color (cyber-blue or cyber-green)
- Keep it clean and professional

---

## Method 4: Hire a Designer

If you want something more polished, you can:
- Use Fiverr (search "OG image design") - Usually $5-20
- Use 99designs
- Ask a design-savvy friend

---

## Step-by-Step: Adding the Image to Your Site

### 1. Create/Download Your Image
- Size: **1200 x 630 pixels**
- Format: **JPG** or **PNG**
- File name: `og-image.jpg`

### 2. Save to Your Project
Place the image file in:
```
Grok web/public/og-image.jpg
```

### 3. Test Locally (Before Deploying)

**Option A: Test with a local server**
```bash
# The image will be available at:
http://localhost:5173/og-image.jpg
```

**Option B: Test the OG tags**
- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- Enter your URL and see the preview

### 4. Update the URL in index.html (If Needed)

If your deployed site URL is different from `https://danielchisasura.com`, update line 21 in `index.html`:

```html
<meta property="og:image" content="YOUR_ACTUAL_URL/og-image.jpg" />
```

Also update in `index.html`:
- Line 30: Twitter image URL
- Line 18: og:url

---

## Quick Template Ideas

### Minimal Professional Style
```
┌─────────────────────────────────────────┐
│                                         │
│     [Dark blue gradient background]     │
│                                         │
│         Daniel Chisasura                │
│                                         │
│     Cyber Security Portfolio            │
│                                         │
│  SOC Analyst | ECU Graduate             │
│                                         │
└─────────────────────────────────────────┘
```

### With Background Pattern
- Add subtle grid/hexagon pattern
- Use your cyber theme colors
- Keep text readable

---

## Testing Your OG Image

### Before Deploying:
1. Save image in `public/og-image.jpg`
2. Run `npm run dev`
3. Check: `http://localhost:5173/og-image.jpg` (should show your image)

### After Deploying:
1. **Facebook Sharing Debugger:**
   - Go to: https://developers.facebook.com/tools/debug/
   - Enter your URL
   - Click "Scrape Again" to refresh cache

2. **LinkedIn Post Inspector:**
   - Go to: https://www.linkedin.com/post-inspector/
   - Enter your URL
   - See preview

3. **Twitter Card Validator:**
   - Go to: https://cards-dev.twitter.com/validator
   - Enter your URL

---

## Troubleshooting

### Image Not Showing?
- ✅ Check file is named exactly `og-image.jpg` (case-sensitive on some servers)
- ✅ Check file is in `public/` folder
- ✅ Check URL in `index.html` matches your actual domain
- ✅ Clear social media cache (use debugger tools above)
- ✅ Check file size (should be < 8MB, but aim for < 1MB)

### Image Looks Wrong?
- ✅ Check dimensions are 1200 x 630
- ✅ Check file format (JPG or PNG)
- ✅ Test image URL directly: `yourdomain.com/og-image.jpg`

---

## Quick Start Checklist

- [ ] Create/download your 1200x630px image
- [ ] Save as `og-image.jpg` in `public/` folder
- [ ] Test locally: `http://localhost:5173/og-image.jpg`
- [ ] Build and deploy your site
- [ ] Test with Facebook/LinkedIn debugger tools
- [ ] Share on social media and see the preview!

---

## Example: What to Include

**Recommended Content:**
- Your name (large, prominent)
- "Cyber Security Portfolio" or similar
- Key skills/tags: "SOC Analyst | ECU Graduate"
- Maybe a subtle background pattern
- Your brand colors (cyber-blue, cyber-green)

**Keep it simple and professional!**

---

**Need help?** The image doesn't have to be perfect - a clean, professional text-based image works great for portfolios. You can always update it later!

