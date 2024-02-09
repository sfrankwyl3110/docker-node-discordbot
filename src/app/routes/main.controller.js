const express = require('express')
const MainRouter = express.Router()

const { getAll_raw } = require("../services/commands.service")
const { renameKeys } = require('../_helpers/date_functions')

// index page
MainRouter.get('/', async function(req, res) {
    let commands = await getAll_raw()
    commands = renameKeys(commands, ["createdAt", "updatedAt"])
    res.render('pages/index', {
        commands: commands
    });
});

module.exports = { MainRouter }