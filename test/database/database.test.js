const assert = require('assert');
const DatabaseHandler = require("../../database/database");
dbHandler = new DatabaseHandler(null, null);

describe('Database Test', () => {
    it('should not be null', () => { // Ensures that the database handler is not null.
        assert.notStrictEqual(dbHandler, null);
    });
});