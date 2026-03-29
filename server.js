const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'state.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// GET /api/state — load saved state
app.get('/api/state', (req, res) => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      res.json({ ok: true, data });
    } else {
      res.json({ ok: true, data: null });
    }
  } catch (e) {
    res.json({ ok: false, error: e.message });
  }
});

// POST /api/state — save state
app.post('/api/state', (req, res) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`CrossFit Comeback running on port ${PORT}`);
});
