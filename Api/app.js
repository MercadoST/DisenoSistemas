const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')

module.exports = app;


//#region
//#Settings
app.set('port', 3000);

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

// Routes
app.use(require('./routes/index'));

// 404 handler
app.use((req, res, next) =>{
    res.status(404).send('404 Not Found');
})

//#endregion

