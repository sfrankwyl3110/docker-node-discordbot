const db = require('../utils/db');

module.exports = {
    getAll,
    getAll_raw,
    getById,
    create,
    update,
    delete: _delete
};

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

async function getAll() {
    return await db.Commands.findAll();
}

async function getAll_raw() {
    return await db.Commands.findAll({
        raw: true
    });
}

async function getById(id) {
    return await getCommand(id);
}

async function create(params) {
    // validate
    if (await db.Commands.findOne({ where: { name: params.name } })) {
        throw 'Command "' + params.name + '" is already registered';
    }

    const command = new db.Commands(params);
    
    // save command
    await command.save();
}

async function update(id, params) {
    const command = await getCommand(id);


    // validate
    //const usernameChanged = params.username && user.username !== params.username;
    //if (usernameChanged && await db.User.findOne({ where: { username: params.username } })) {
    //    throw 'Username "' + params.username + '" is already taken';
    //}

    // hash password if it was entered
    //if (params.password) {
    //    params.passwordHash = await bcrypt.hash(params.password, 10);
    //}

    // copy params to user and save
    Object.assign(command, params);
    await user.save();
}

// helper functions
async function getCommand(id) {
    const user = await db.Commands.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}
