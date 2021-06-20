const sqlite = require("sqlite"), sqlite3 = require("sqlite3");
const predefinedQueries = {
    "test": "test"
}

class DatabaseHandler {
    #database;

    constructor() {
        this.#database = sqlite.open({filename: 'database.db', driver: sqlite3.Database}).catch(console.error);
    }

    /*
        https://www.npmjs.com/package/sqlite
    */
}

module.exports = DatabaseHandler;