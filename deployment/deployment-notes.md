#  Quiz Battle Platform – Deployment Cheat Sheet

---

##  Hosting Platform
Project is hosted using GitHub Pages  


---

##  Pre-Deployment Checklist
- index.html is in root folder  
- All files are pushed to GitHub  
- No errors in code  
- Project runs locally  

---

##  Deployment Steps
1. Open GitHub repository  
2. Go to **Settings**  
3. Click **Pages**  
4. Under Source select:
   - Branch: `main`  
   - Folder: `/ (root)`  
5. Click **Save**  
6. Wait 1–2 minutes  

---

## 🔄 Update Website
Run these commands:

```bash id="git1"
git add .
git commit -m "update"
git push origin main