const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

//#region
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))
//#endregion
