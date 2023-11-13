const express = require('express');
const app = express();

// Set EJS as the templating engine
// Before any routes
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const userName = "CJ";
    res.render('index', { name: userName });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
