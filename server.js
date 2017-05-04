const path = require('path');
const Express = require('express');

const app = new Express();
const port = 3000;

app.use(Express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Server working on http://localhost:' + port);
});
