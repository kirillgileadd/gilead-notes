const jsonServer = require('json-server');
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults({
  static: './build'
});
const router = jsonServer.router('./db.json', {});

const PORT = process.env.PORT || 3001

app.use(middlewares);
app.use(router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log('Server is running')
})