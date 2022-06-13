require('./config/config');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/*    Dependency Installation    */
const express = require('express');
const cors = require('cors');

const app = new express();
//app.use(__dirname + '/dist');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}) );
app.use(express.static(__dirname + '/dist'));


/*      GET     */
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});