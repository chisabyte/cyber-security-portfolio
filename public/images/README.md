# Project Images Folder

## 📸 Where to Place Your Project Images

**Upload all your project images here!**

### Folder Structure:
```
Grok web/public/images/
  ├── project-1.png
  ├── project-2.png
  ├── project-3.png
  └── ...
```

### Image Paths in Code:
When adding images to projects in `src/data/projects.js`, use:
```javascript
image: '/images/your-image-name.png'
```

### Examples:
- `/images/risk-matrix.png`
- `/images/security-tools.png`
- `/images/iam-auditor.png`

**Note:** The path starts with `/images/` (not `/public/images/`)

---

## 📋 Quick Steps:

1. **Upload your images** to this folder (`public/images/`)
2. **Update** `src/data/projects.js` with your new descriptions
3. **Add** `image: '/images/your-image-name.png'` to each project
4. **Test locally:** `npm run dev`
5. **Deploy:** Commit and push to GitHub

---

**Your images are already labeled with the right names - just place them here!**

