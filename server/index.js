const express = require('express')
const app = express()

app.listen(3001, AppStartup)

function AppStartup()
{
    console.log("LsDrawing app started on port 3001")
}