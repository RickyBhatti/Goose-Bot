//#region Constants
const config = require("./config.json");

const commando = require("discord.js-commando");
const client = new commando.Client({
    owner: config.ownerid,
    commandPrefix: config.commandPrefix,
    unknownCommandResponse: false
});

const DatabaseHandler = require("./database/database");
dbHandler = new DatabaseHandler(commando, client);
//#endregion

//#region Core Methods
async function initialize() {
    await dbHandler.initialize();

    const path = require("path");
    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ["fun", "A group of fun commands"],
            ["punishment", "A group of punishment commands."],
            ["util", "A group of utility commands."]
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            ping: false // Due to us having a custom ping command.
        })
        .registerCommandsIn(path.join(__dirname, "commands"));

    client.once("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity(config.activity, { type: 'WATCHING' }).catch(console.error);
        client.user.setStatus(config.status);
    });

    if (config.debug) { client.on("debug", console.info); }
    client.on("warn", console.warn);
    client.on("error", console.error);

    client.login(config.token);
} 

initialize()
//#endregion

//#region Testing Code
setTimeout(() => {
    dbHandler.execute('test', {
        ':name': 'testName'
    });
}, 2500);
//#endregion