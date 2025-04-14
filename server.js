const express = require('express');
const app = express();

const SECRET_KEY = "supersecretkey123";

app.get('/', (req, res) => {
    res.send('Vulnerable Node.js App hacked!');
});

app.get('/debug', (req, res) => {
    res.json({
        message: "Debug Info",
        secret: SECRET_KEY,
        env: process.env
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App running on http://0.0.0.0:${PORT}`);
});
