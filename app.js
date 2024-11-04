const express = require('express');
const app = express();
const PORT = 1338;

app.get('/', (req, res) => {
    res.send('Hello from App B!');
});

app.listen(PORT, () => {
    console.log(`App B is running on http://localhost:${PORT}`);
});
