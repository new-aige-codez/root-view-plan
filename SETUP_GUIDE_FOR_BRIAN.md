# Root View Site — Setup Guide for Brian

**Goal:** Gather everything Claude Code needs to build the site. The site is just a shell that frames your hosted tools, so 90% of this is **collecting URLs**. Work top to bottom. When done, fill in the **"Paste-Back Form"** at the very bottom and hand it back.

Estimated time: **45–75 minutes.** You can do it in one sitting or in chunks.

Tip: Keep a blank note open. Every time a step says **➡️ COPY THIS**, paste it into your note with its label.

---

## ✅ Quick Checklist (overview)

- [ ] 1. Google Sheets workbook (4 tabs) → 4 embed URLs
- [ ] 2. Google Drive folder → 1 embed URL
- [ ] 3. Trello board → 1 embed URL
- [ ] 4. NotebookLM notebook → 1 link
- [ ] 5. Vercel account → confirm login
- [ ] 6. Domain → decide (custom or use free Vercel URL)
- [ ] 7. (Optional) GitHub repo → 1 link
- [ ] 8. (Optional) Expo Snack / StackBlitz → 1 embed URL
- [ ] 9. (Optional) YouTube demo videos → links
- [ ] 10. Pick the shared site password

---

## 1. Google Sheets Workbook (BOM, Costs, Ledger, Dashboard)

You'll make **one** spreadsheet with **4 tabs**, then publish each tab to get an embed link.

### 1a. Create the workbook
1. Go to 👉 **https://sheets.new** (creates a blank sheet instantly).
2. Name it (top-left): **Root View – Master Workbook**.
3. At the bottom, you'll see one tab named "Sheet1". Rename it and add 3 more so you have exactly these 4 tabs (double-click a tab to rename, click the **+** to add):
   - `BOM`
   - `Costs`
   - `Ledger`
   - `Dashboard`
4. Add the column headers below to each tab (row 1). Don't overthink it — you can refine later.
   - **BOM:** Part | Supplier | Link | Qty | Unit Cost | Line Total | Status | Version | Notes
   - **Costs:** Category | Description | Amount | Date
   - **Ledger:** Description | Amount | Paid By | Split Brian | Split Rob | Running Balance
   - **Dashboard:** (leave mostly blank for now — we'll add total formulas later)

### 1b. Publish the whole workbook to the web
1. Top menu: **File → Share → Publish to web**.
   - Direct link if menu is confusing: it's under **File** menu, near the bottom.
2. In the dialog, choose the **"Embed"** tab (not "Link").
3. Under "Embed", open the dropdown and select **each tab one at a time**.
4. For each of the 4 tabs, click **Publish**, confirm, then **➡️ COPY THIS** — copy the `<iframe ... src="...">` code OR just the URL inside `src="..."`.
   - Label them clearly: `BOM URL`, `Costs URL`, `Ledger URL`, `Dashboard URL`.
5. (Recommended) Tick **"Automatically republish when changes are made"** so edits show up on the site automatically.

> You'll end up with **4 URLs**. That's the most fiddly step — the rest are quick.

---

## 2. Google Drive Folder (renders, photos, test data)

1. Go to 👉 **https://drive.google.com**
2. Click **+ New → New folder**, name it **Root View – Evidence & Media**.
3. Drop in any renders/photos you already have (optional for now — folder can start empty).
4. Right-click the folder → **Share → Share**.
5. Under "General access", change **"Restricted"** to **"Anyone with the link"**, role **Viewer**. Click **Done**.
6. Right-click the folder again → **Share → Copy link**. **➡️ COPY THIS** → label it `Drive Folder URL`.

> If you'd rather keep it private and not embed it publicly, tell me — I'll just link to it instead of embedding.

---

## 3. Trello Board (Kanban)

1. Go to 👉 **https://trello.com** and log in / sign up (free).
2. Create a new board: **Root View – R&D Board**.
3. Add these lists (columns), left to right:
   `Idea` → `Reviewed` → `Validated / Worth Exploring` → `To Do` → `In Progress` → `Review` → `Done`
4. Make it shareable: **Share** button (top-right) → **"Anyone with the link can view"** → set to **Public** (or at least link-viewable).
5. To get the embed link: board menu (**•••** or "Show menu") → **Print, export, and share** → **Embed** (or **Link**). **➡️ COPY THIS** → label `Trello URL`.
   - If you only see a share link (not an embed snippet), copy that — I can convert it.

---

## 4. NotebookLM Notebook (the "Chat" button)

1. Go to 👉 **https://notebooklm.google.com**
2. Open your existing **"Root View – R&D"** notebook (or create one and add the 3 source docs).
3. Copy the URL straight from your browser's address bar. **➡️ COPY THIS** → label `NotebookLM URL`.

> This is just a plain outbound link — the "Chat" button in the top bar points here. Nothing is embedded.

---

## 5. Vercel Account (hosting)

1. Go to 👉 **https://vercel.com/signup**
2. Sign up with **GitHub** (easiest — recommended) or email.
3. That's it for now — just confirm you can log in. I'll connect the project during deployment.
4. **➡️ NOTE** which email/account you used → label `Vercel Account`.

---

## 6. Domain Decision

Pick one:
- **(A) Use the free Vercel URL** for now (e.g. `root-view.vercel.app`). Zero setup. **Recommended for MVP.**
- **(B) Use a custom domain** (e.g. `rootview.io`). If you have one, tell me the registrar (GoDaddy, Namecheap, etc.) and I'll give you the DNS records to paste.

**➡️ DECISION** → label `Domain: A or B (+ domain name if B)`.

---

## 7. (Optional) GitHub Repo — for the device code

Skip if the device firmware/app code isn't ready to show yet.
1. Go to 👉 **https://github.com/new**
2. Create a repo, e.g. **root-view-device**.
3. **➡️ COPY THIS** → label `GitHub Repo URL`.

---

## 8. (Optional) Expo Snack / StackBlitz — live code preview

Skip if no code to preview yet.
- **For React Native / mobile:** 👉 **https://snack.expo.dev** → create a snack → **Share / Embed** → copy embed URL.
- **For web:** 👉 **https://stackblitz.com** → create a project → **Share → Embed** → copy URL.
- **➡️ COPY THIS** → label `Code Embed URL`.

---

## 9. (Optional) YouTube Demo Videos

Skip if no videos yet.
1. Upload to YouTube, set visibility to **Unlisted**.
2. On the video → **Share → Embed** → copy the URL (or just the watch link).
3. **➡️ COPY THIS** → label `Video URL(s)`.

---

## 10. Pick the Shared Site Password

The whole site sits behind one shared password (Vercel Password Protection) — no login screen, no accounts.
- **➡️ DECISION** → label `Site Password` (pick something you and Rob will both use).

---

# 📋 Paste-Back Form

Copy this block, fill in what you have, and send it back to me. Leave optional ones blank if not ready — I'll build around them and we can add later.

```
=== REQUIRED ===
BOM URL:            
Costs URL:          
Ledger URL:         
Dashboard URL:      
Drive Folder URL:   
Trello URL:         
NotebookLM URL:     
Vercel Account:     
Domain (A or B):    
Site Password:      

=== OPTIONAL (leave blank if not ready) ===
GitHub Repo URL:    
Code Embed URL:     
Video URL(s):       
```

---

## What happens after you send this back

- With just the **REQUIRED** block, I can build **Phase 1 end-to-end**: the shell, sidebar/topbar, Chat button, and the Dashboard / BOM / Costs / Board / Prototyping pages with everything embedded and live.
- The optional items slot into the Code, Evidence & Media, and other pages whenever you have them.
- The static strategy pages (IP & Legal, Analytics, Business & Exit, Decision Tree) I build from the three seed documents — **no input needed from you** for those beyond the docs.
