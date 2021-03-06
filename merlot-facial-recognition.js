const merlotfr = require('./app.js');

const app = merlotfr.app;
const express = merlotfr.express;
const port = merlotfr.port;
const path = merlotfr.path;

const http = require("http");

const api = require('./backend/api/api.js');
const database = require('./backend/database/database.js')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(port, '0.0.0.0', () => console.log(`listening on ${ port }`))

// Handle requests.
// API requests
app.post('/', api.authHandler);
// setTimeout(api.log(),300000,new Date(Date.now()));
// Views
app.get('/', (req, res) => res.render('pages/index')) // index page

// Database
// http.createServer(database.run).listen(5001);
