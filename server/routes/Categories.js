const express = require("express")
const router = express.Router();
const { Categories } = require("../models");

router.get("/", CatagoriesGetHandler);

router.post("/", CatagoriesPostHandler);

module.expor = router;

async function CatagoriesGetHandler(request, response, next)
{
    console.log("Got a request");
    const listOfCategories = await Categories.findAll();
    response.json(listOfCategories);
    next();
}

async function CatagoriesPostHandler(request, response, next)
{
    console.log("Got a Post");
    const newCategory = request.body;
    await Categories.create(newCategory);
    response.json(newCategory);
}

module.exports = router;