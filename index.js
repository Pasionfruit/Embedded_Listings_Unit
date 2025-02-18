const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is a test');
});

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
