const express = require('express');
const { applyMiddleware } = require('redux');
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routers/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', apiRouter);

app.use('/*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/index.html'));}
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports = app;