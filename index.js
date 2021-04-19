let express = require('express');
const cors = require("cors");
let bodyParser = require('body-parser');
let routes = require("./routes");
const app = express()




app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors());
app.use(bodyParser.json());






var port = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World with Express '));




app.use('/api', routes);


app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});