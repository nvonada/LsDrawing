const express = require('express')
const app = express()
const db = require('./models')

db.sequelize.sync().then(() => {
    app.listen(3001, AppStartup);
});

function AppStartup()
{
    console.log("LsDrawing app started on port 3001")
}

