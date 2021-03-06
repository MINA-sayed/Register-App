const express = require('express');
const bodyParser = require('body-parser');
const user = require("./routes/user"); //new addition
const IntailMongoServer = require('./config/db');

IntailMongoServer();
const app = express();

// PORT

const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {

    res.json({ message: 'API working' });
});


app.use("/user", user);


app.listen(PORT, (req, res) => { 

    console.log(`Server Started at PORT ${PORT}`);
}
);
