const config = require("./config.json");

const commando = require("discord.js-commando");
const client = new commando.Client({
    owner: config.ownerid,
    commandPrefix: config.commandPrefix,
    unknownCommandResponse: false
});

const path = require("path");
const fs = require("fs");
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

const sqlite = require("sqlite"), sqlite3 = require("sqlite3");
client.setProvider(
    sqlite.open({filename: 'database.db', driver: sqlite3.Database})
    .then(db => new commando.SQLiteProvider(db))
    .catch(console.error)
);

client.login(config.token);