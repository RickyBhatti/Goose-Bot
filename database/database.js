const sqlite = require("sqlite"), sqlite3 = require("sqlite3");
const predefinedQueries = {
    "test": "test"
}

class DatabaseHandler {
    #database;

    constructor() {
        this.#database = sqlite.open({filename: './data/database.db', driver: sqlite3.Database}).catch(console.error);
    }

    /*
        https://www.npmjs.com/package/sqlite
    */
    async get(query, options) {
        return await sqlite.get(predefinedQueries[query], options);
    }

    async getAll(query, options) {
        return await sqlite.all(predefinedQueries[query], options);
    }

    async execute(query, options) {
        return await sqlite.run(predefinedQueries[query], options);
    }
}

module.exports = DatabaseHandler;