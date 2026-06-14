# Rishta Ameen

Pakistani matrimonial and matchmaking platform helping individuals find compatible life partners.

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
