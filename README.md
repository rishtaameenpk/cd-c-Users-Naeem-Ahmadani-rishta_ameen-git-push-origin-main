# Rishta Ameen — Mobile Test App

Pakistani matrimonial platform with a **demo test app** you can try on your phone.

## Run on your phone with Chrome (localhost / same Wi‑Fi)

`localhost` on your phone means the phone itself — not your computer.  
Use your **computer's IP address** on the same Wi‑Fi network.

### Windows (easiest)

1. Download or clone this repo on your PC
2. Double-click **`start-mobile.bat`**
3. Note the URL shown, e.g. `http://192.168.1.10:8080`
4. On your phone:
   - Connect to the **same Wi‑Fi** as your PC
   - Open **Google Chrome**
   - Type the URL in the address bar (example: `http://192.168.1.10:8080`)
5. Keep the PC window open while testing

### Mac / Linux

```bash
chmod +x start-mobile.sh
./start-mobile.sh
```

Then open the shown `http://192.168.x.x:8080` URL in **Chrome on your phone**.

### Manual start

```bash
cd docs
python3 -m http.server 8080 --bind 0.0.0.0
```

Find your PC IP:

- **Windows:** open CMD → `ipconfig` → look for **IPv4 Address**
- **Mac:** System Settings → Wi‑Fi → Details → IP address
- **Android phone URL example:** `http://192.168.1.10:8080`

### If phone cannot connect

- Phone and PC must be on the **same Wi‑Fi** (not mobile data)
- Allow Python through **Windows Firewall** when asked
- Try turning off VPN on phone or PC
- Do not use `localhost` on the phone — use the `192.168.x.x` IP

---

## Live site (no PC needed)

**https://rishtaameenpk.github.io/cd-c-Users-Naeem-Ahmadani-rishta_ameen-git-push-origin-main/**

Open this in Chrome on your phone anytime — works without running a local server.

---

## What you can test

| Screen | What to try |
|--------|-------------|
| **Home** | Tap Create Test Profile / Browse Profiles |
| **Register** | Fill form → Save Test Profile |
| **Browse** | View demo profiles → Show Interest |
| **My Profile** | See your saved test profile |

Data is saved **only on your phone** (demo mode).

## Install like an app (optional)

- **Android Chrome:** Menu (⋮) → Add to Home screen
- **iPhone Safari:** Share → Add to Home Screen

## Project structure

```
├── start-mobile.bat   # Windows: run app for phone testing
├── start-mobile.sh    # Mac/Linux: run app for phone testing
└── docs/
    ├── index.html     # Mobile test app
    ├── js/app.js
    ├── css/style.css
    ├── manifest.json
    └── sw.js
```

## Note

This is a **test/demo web app**, not a native Google Play app yet.

## License

All rights reserved.
