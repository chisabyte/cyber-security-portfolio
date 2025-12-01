# 📸 Project Images & Updates Guide

## 📁 Where to Upload Project Images

### Step 1: Create Images Folder
Create this folder structure (if it doesn't exist):
```
Grok web/public/images/
```

### Step 2: Upload Your Images
Place all your project images in:
```
Grok web/public/images/
```

**Example:**
- `Grok web/public/images/risk-matrix.png`
- `Grok web/public/images/security-tools.png`
- `Grok web/public/images/iam-auditor.png`
- etc.

---

## ✏️ How to Update Project Descriptions & Images

### File to Edit: `src/data/projects.js`

Each project has this structure:

```javascript
{
  id: 1,
  title: 'Project Title',
  outcome: 'Brief outcome statement',
  description: [
    'First bullet point',
    'Second bullet point',
    // Add more points here
  ],
  techStack: ['Technology 1', 'Technology 2'],
  github: 'https://github.com/...',
  report: null, // or 'https://...' if you have a report
  category: 'Category Name',
  featured: true, // or false
  tags: ['Tag1', 'Tag2'],
  image: '/images/project-name.png', // 👈 Add image path here
  metrics: {
    // Optional metrics
  },
}
```

---

## 🔧 Step-by-Step: Adding Images to Projects

### 1. Upload Image File
Copy your image file (e.g., `risk-matrix.png`) to:
```
Grok web/public/images/risk-matrix.png
```

### 2. Update Project Data
Open `src/data/projects.js` and add the image path:

```javascript
{
  id: 1,
  title: 'Risk Matrix Development & Threat Prioritization',
  // ... other fields ...
  image: '/images/risk-matrix.png', // 👈 Add this line
}
```

**Important:** Use `/images/` (starts with `/`) - this is the public path!

---

## 📝 Step-by-Step: Updating Project Descriptions

### To Update Description:
1. Open `src/data/projects.js`
2. Find the project you want to update
3. Replace the `description` array with your new content:

```javascript
description: [
  'Your new first bullet point',
  'Your new second bullet point',
  'Your new third bullet point',
  // Add as many as you need
],
```

### To Update Title:
```javascript
title: 'Your New Project Title',
```

### To Update Outcome:
```javascript
outcome: 'Your new outcome statement',
```

### To Update Tech Stack:
```javascript
techStack: ['New Tech 1', 'New Tech 2', 'New Tech 3'],
```

---

## 🎯 Image Naming Convention

**Recommended naming:**
- Use lowercase
- Use hyphens instead of spaces
- Keep names descriptive

**Examples:**
- ✅ `risk-matrix.png`
- ✅ `security-tools.png`
- ✅ `iam-policy-auditor.png`
- ❌ `Risk Matrix.png` (spaces)
- ❌ `SECURITY_TOOLS.png` (uppercase)

---

## 📋 Quick Checklist

### Before You Start:
- [ ] Create `/public/images/` folder
- [ ] Prepare all your project images
- [ ] Name images with descriptive, lowercase names

### When Updating:
- [ ] Upload images to `/public/images/`
- [ ] Open `src/data/projects.js`
- [ ] Update project descriptions
- [ ] Add `image: '/images/your-image.png'` to each project
- [ ] Save the file
- [ ] Test locally with `npm run dev`
- [ ] Commit and push to GitHub

---

## 🚀 Example: Complete Project with Image

```javascript
{
  id: 1,
  title: 'Risk Matrix Development & Threat Prioritization',
  outcome: 'Identified and prioritized 47 security threats, reducing remediation time by ~30% through structured risk assessment.',
  description: [
    'Created detailed risk assessment framework to evaluate and categorize security threats based on likelihood and impact.',
    'Conducted comprehensive analysis identifying 47 distinct security threats across multiple domains.',
    'Prioritized threats using matrix methodology, enabling ~30% faster remediation decision-making.',
  ],
  techStack: ['Risk Assessment', 'Project Management', 'Research & Analysis'],
  github: 'https://github.com/chisabyte',
  report: null,
  category: 'Risk Management / GRC',
  featured: true,
  tags: ['GRC', 'Featured'],
  image: '/images/risk-matrix.png', // 👈 Image added here!
  metrics: {
    threatsIdentified: 47,
    timeReduction: '30%',
  },
},
```

---

## 🔍 Finding Your Project Images

After uploading images to `/public/images/`, they'll be accessible at:
- **Local:** `http://localhost:5173/images/your-image.png`
- **Production:** `https://chisabyte.netlify.app/images/your-image.png`

---

## 💡 Tips

1. **Image Size:** Keep images under 500KB for faster loading
2. **Format:** Use PNG or JPG
3. **Dimensions:** Recommended 1200x630px or similar aspect ratio
4. **Alt Text:** The component automatically uses the project title as alt text

---

## ✅ Ready to Update?

1. **Create the folder:** `Grok web/public/images/`
2. **Upload your images** to that folder
3. **Open:** `src/data/projects.js`
4. **Update descriptions** and **add image paths**
5. **Test locally:** `npm run dev`
6. **Deploy:** Commit and push to GitHub

**Your images should match your project names or IDs for easy reference!**

