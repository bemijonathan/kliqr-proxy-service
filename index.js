const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/v1/users', createProxyMiddleware({ target: 'https://kliqr-user-service.herokuapp.com', changeOrigin: false }));
app.use('/api/v1/transactions', createProxyMiddleware({ target: 'https://kliqr-transactions-service.herokuapp.com', changeOrigin: false }));

app.listen(process.env.PORT || 3000);
