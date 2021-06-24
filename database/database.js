const config = require("./../config.json");

const sqlite = require("sqlite"), sqlite3 = require("sqlite3");
const predefinedQueries = {
    "test": "INSERT INTO `test` (name) VALUES (:name);"
}

class DatabaseHandler {
    #database;

    constructor(commando, client) {
        this.commando = commando, this.client = client;
    }

    async initialize() {
        let databaseConnectionPromise = new Promise((resolve, reject) => {
            sqlite.open({filename: config.database, driver: sqlite3.Database}).then(db => {
                this.#database = db;
                this.client.setProvider(new this.commando.SQLiteProvider(this.#database));
                resolve();
            }).catch((error) => {
                console.log(error)
                reject();
            });
        });

        await databaseConnectionPromise;
    }

    /*
        https://www.npmjs.com/package/sqlite
    */
    async get(query, options) {
        if (this.#database == null) { return Error("Database connection has not been established."); }

        const result = await this.#database.get(predefinedQueries[query], options).catch((error) => {console.log(error)});
        return result;
    }

    async getAll(query, options) {
        if (this.#database == null) { return Error("Database connection has not been established."); }

        const result = await this.#database.all(predefinedQueries[query], options).catch((error) => {console.log(error)});
        return result;
    }

    async execute(query, options) {
        if (this.#database == null) { return Error("Database connection has not been established."); }

        const result = await this.#database.run(predefinedQueries[query], options).catch((error) => {console.log(error)});
        return result;
    }
}

module.exports = DatabaseHandler;