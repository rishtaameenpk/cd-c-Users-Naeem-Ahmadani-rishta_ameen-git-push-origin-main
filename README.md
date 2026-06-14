# Rishta Ameen

Pakistani matrimonial and matchmaking platform helping individuals find compatible life partners.

## View on Your Mobile Device

After GitHub Pages is enabled (see **Deployment** below), open this URL on your phone:

**https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/**

### Quick steps

1. On your phone, open **Chrome** or **Safari**
2. Paste the URL above into the address bar
3. The site is mobile-friendly — use the menu icon (☰) in the top-right on small screens

### Add to Home Screen (optional)

- **iPhone (Safari):** Tap Share → **Add to Home Screen**
- **Android (Chrome):** Tap ⋮ menu → **Add to Home screen**

This lets you open Rishta Ameen like an app from your home screen.

## Live Site

Once GitHub Pages is enabled, the site will be available at:

`https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/`

## Project Structure

```
├── index.html          # Landing page
├── css/style.css       # Styles
├── .cursor/            # Cursor Cloud Agent configuration
└── .github/workflows/  # GitHub Pages deployment
```

## Local Development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

The repository includes a GitHub Actions workflow that deploys the static site to GitHub Pages on every push to `main`.

To enable Pages:

1. Go to **Settings → Pages** in this repository
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow will publish the site automatically

## Cursor Cloud Agents

This repository is configured for [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent). The `.cursor/environment.json` file defines the agent environment.

## License

All rights reserved.
