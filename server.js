const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const xss = require('xss');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'database.json');
const SECRET_KEY = "WeBiQ_S3cr3t_2026"; // Secret for basic payload signing

// Rate Limiter: Max 10 submissions per 15 minutes per IP
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10,
    message: { error: 'Terlalu banyak permintaan dari IP ini, coba lagi nanti.' }
});

// Serve static files (HTML, CSS, JS, SVGs)
app.use(express.static(__dirname));

app.use(cors());
app.use(express.json());

// Initialize database file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
}

// Helper to read DB
const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));

// Helper to write DB
const writeDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// --- API Endpoints ---

// 1. Register or update a user's score
app.post('/api/scores', apiLimiter, (req, res) => {
    let { name, email, score, iq, classification, timeTaken, signature } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Sanitize Inputs against XSS
    name = xss(name);
    email = xss(email);
    classification = xss(classification || '');

    // Anti-Forge Signature Check
    const expectedSignature = Buffer.from(`${name}:${score}:${iq}:${SECRET_KEY}`).toString('base64');
    if (signature !== expectedSignature) {
        return res.status(403).json({ error: 'Signature invalid! Skor ditolak.' });
    }

    const db = readDB();
    const existingUserIndex = db.users.findIndex(u => u.email === email);
    
    const record = {
        name,
        email,
        score: score || 0,
        iq: iq || 0,
        classification,
        timeTaken: timeTaken || '00:00',
        date: new Date().toISOString()
    };

    if (existingUserIndex > -1) {
        // Update only if the new score is higher
        if (record.score > db.users[existingUserIndex].score) {
            db.users[existingUserIndex] = record;
        }
    } else {
        // Add new user
        db.users.push(record);
    }
    
    writeDB(db);
    res.json({ success: true, message: 'Score saved successfully!', user: record });
});

// 2. Get all scores (For Admin Dashboard)
app.get('/api/scores', (req, res) => {
    const db = readDB();
    // Sort by highest score first
    const sortedUsers = db.users.sort((a, b) => b.score - a.score);
    res.json(sortedUsers);
});

// 3. Reset all scores (Admin action)
app.delete('/api/scores', (req, res) => {
    writeDB({ users: [] });
    res.json({ success: true, message: 'Semua data peserta telah dihapus.' });
});

app.listen(PORT, () => {
    console.log(`Web IQ Server is running on http://localhost:${PORT}`);
});
