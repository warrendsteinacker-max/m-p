// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Log incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] Request: ${req.method} ${req.url}`);
    next();
});

// GET / (Home Page)
app.get('/', (req, res) => {
    const htmlResponse = `
        <!DOCTYPE html><html><head><title>Home</title></head>
        <body>
            <h1>Home Page</h1>
            <p>Welcome! Try navigating to 
                <a href="/products">/products</a> or ////////////////////
                <a href="/contact">/contact</a>
            </p>
        </body></html>
    `;
    res.send(htmlResponse);
});

// GET /products
app.get('/products', (req, res) => {
    res.send('<h1>Products Listing</h1><p><a href="/">Go back home</a></p>');
});

// GET /contact
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: practice@server.com</p><p><a href="/">Go back home</a></p>');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Access the server at http://localhost:${PORT}`);
});