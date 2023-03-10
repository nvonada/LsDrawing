const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routers
const categoriesRouter = require("./routes/Categories");
app.use("/categories", categoriesRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, AppStartup);
});

function AppStartup()
{
    console.log("LsDrawing app started on port 3001")
}

