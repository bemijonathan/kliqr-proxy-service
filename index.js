const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/v1/transactions', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: false }));
app.use('/api/v1/users', createProxyMiddleware({ target: 'http://localhost:4500', changeOrigin: false }));

app.listen(3000);
