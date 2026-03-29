# CrossFit Comeback — Month 1 Dashboard

A personal CrossFit training tracker with strength, Olympic lifting, and HIIT workouts. Log results, track PRs, and monitor progress toward end-of-month targets.

## Deploy to Railway (5 minutes)

### Option A — Deploy via GitHub (recommended)

1. **Push this folder to a GitHub repo**
   ```bash
   git init
   git add .
   git commit -m "CrossFit dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/crossfit-comeback.git
   git push -u origin main
   ```

2. **Go to [railway.app](https://railway.app)** and sign in (free account is fine)

3. Click **"New Project"** → **"Deploy from GitHub repo"**

4. Select your repo — Railway auto-detects Node.js and deploys

5. Once deployed, click **"Generate Domain"** under Settings → Domains

6. Open your URL on any device — phone, tablet, laptop ✅

### Option B — Deploy via Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
railway domain
```

## Data Persistence

Your workout logs are saved to `data/state.json` on the server. This persists across page reloads and devices as long as the Railway service is running.

> **Note:** Railway's free tier spins down after inactivity. If you want guaranteed persistence, add a Railway Volume (Storage) under your service settings — this keeps `data/state.json` alive across restarts.

## Local Development

```bash
npm install
npm start
# Open http://localhost:3000
```

## Stack
- **Frontend:** Vanilla HTML/CSS/JS
- **Backend:** Node.js + Express
- **Storage:** JSON file on server (+ localStorage fallback)
- **Hosting:** Railway
