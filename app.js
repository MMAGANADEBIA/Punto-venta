const express = require('express');
const app = express();
const port = 3000;

const routes = require('./src/routes');

app.use('/', routes);
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})
