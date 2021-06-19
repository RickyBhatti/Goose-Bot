const Commando = require("discord.js-commando");
const client = new Commando.Client({
    owner: "136670979035365376",
    commandPrefix: "/"
});

const path = require("path");
const fs = require("fs");
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ["fun", "A group of fun commands"],
        ["util", "A group of utility commands."]
    ])
    .registerDefaultGroups()
	.registerDefaultCommands({
        ping: false // Due to us having a custom ping command.
    })
    .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`the server!`, { type: 'WATCHING' }).catch(console.error);
    client.user.setStatus('online');
});
client.on("warn", console.warn);
client.on("error", console.error);

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
client.setProvider(
    sqlite.open({ filename: 'database.db', driver: sqlite3.Database })
    .then(db => new Commando.SQLiteProvider(db))
    .catch(console.error)
);

const config = require("./config.json");
client.login(config.token);