const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors())

app.use('/api/v1/users', createProxyMiddleware({ target: 'https://kliqr-user-service.herokuapp.com', changeOrigin: true }));
app.use('/api/v1/transactions', createProxyMiddleware({ target: 'https://kliqr-transactions-service.herokuapp.com', changeOrigin: true }));

// app.use('/api/v1/users', createProxyMiddleware({ target: 'http://localhost:4500', changeOrigin: true }));
// app.use('/api/v1/transactions', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));

app.listen(process.env.PORT || 4000);
