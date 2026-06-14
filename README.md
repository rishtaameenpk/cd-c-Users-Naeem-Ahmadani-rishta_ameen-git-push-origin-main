# Rishta Ameen

Pakistani matrimonial and matchmaking platform helping individuals find compatible life partners.

## Fix the 404 — Enable GitHub Pages (required once)

The **404 error** means GitHub Pages is not turned on yet. The site files are ready; you only need to enable hosting:

### Option A — Easiest (recommended)

1. Open: https://github.com/rishtaameenpk/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/settings/pages
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Under **Branch**, select **`main`** and folder **`/docs`**, then click **Save**
4. Wait 1–2 minutes, then open on your phone:

   **https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/**

### Option B — GitHub Actions

1. Open the same **Settings → Pages** link above
2. Under **Source**, choose **GitHub Actions**
3. Go to **Actions** tab → run **Deploy to GitHub Pages** workflow (or push any change to `main`)
4. Wait for the green checkmark, then open the URL above

---

## View on Your Mobile Device

Once Pages is enabled:

**https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/**

### Quick steps

1. On your phone, open **Chrome** or **Safari**
2. Paste the URL above
3. Use the menu icon (☰) in the top-right on small screens

### Add to Home Screen (optional)

- **iPhone (Safari):** Share → **Add to Home Screen**
- **Android (Chrome):** Menu (⋮) → **Add to Home screen**

---

## Project Structure

```
├── docs/               # GitHub Pages site (deployed folder)
│   ├── index.html
│   └── css/style.css
├── index.html          # Same landing page (root copy)
├── css/style.css
├── .cursor/            # Cursor Cloud Agent configuration
└── .github/workflows/  # GitHub Actions Pages deployment
```

## Local Development

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Cursor Cloud Agents

This repository is configured for [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent).

## License

All rights reserved.
