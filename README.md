# Rishta Ameen — Mobile Test App

Pakistani matrimonial platform with a **demo test app** you can try on your phone.

## Test on your phone now

### Step 1 — Enable GitHub Pages (one time)

1. Open: https://github.com/rishtaameenpk/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `main` → folder **`/docs`**
4. Click **Save**, wait 1–2 minutes

### Step 2 — Open the test app

**https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/**

## What you can test

| Screen | What to try |
|--------|-------------|
| **Home** | Read intro, tap Create Test Profile / Browse Profiles |
| **Register** | Fill form with your details, tap Save Test Profile |
| **Browse** | View 3 demo profiles + your saved profile, tap Show Interest |
| **My Profile** | See your saved test profile on this phone |

Data is stored **only on your device** (demo mode). Nothing is sent to a server.

## Install like an app (optional)

- **iPhone:** Safari → Share → Add to Home Screen
- **Android:** Chrome → Menu → Add to Home screen

## Local testing (on computer)

```bash
cd docs
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser (use phone on same Wi‑Fi with your computer's IP if needed).

## Project structure

```
docs/
├── index.html       # Mobile test app
├── js/app.js        # Register, browse, profile logic
├── css/style.css    # Mobile-first styles
├── manifest.json    # Installable web app
├── sw.js            # Offline support
└── icons/           # App icons
```

## Note

This is a **test/demo web app**, not the full native Android/iOS app. It lets you check layout, forms, and navigation on your phone before a full launch.

## License

All rights reserved.
