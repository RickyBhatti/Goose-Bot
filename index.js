const Commando = require("discord.js-commando");
const client = new Commando.Client({
    owner: "136670979035365376",
    commandPrefix: "~"
});

const path = require("path");
client.registry
    .registerGroups([
        ["commands", "A group of commands."],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd');
    client.user.setActivity(`the server!`, { type: 'WATCHING' }).then().catch(console.error);
});

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
client.setProvider(
    sqlite.open({ filename: 'database.db', driver: sqlite3.Database })
    .then(db => new Commando.SQLiteProvider(db))
    .catch(console.error)
);

config = require("./config.json");

client.login(config.token);