const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/v1/users', createProxyMiddleware({ target: 'https://kliqr-user-service.herokuapp.com', changeOrigin: true }));
app.use('/api/v1/transactions', createProxyMiddleware({ target: 'https://kliqr-transactions-service.herokuapp.com', changeOrigin: true }));

app.listen(process.env.PORT || 3000);
