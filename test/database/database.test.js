const assert = require('assert');
const DatabaseHandler = require("../../database/database");
dbHandler = new DatabaseHandler(null, null);

describe('Database Test', () => {
    it('should not be null', () => {
        assert.notStrictEqual(dbHandler, null);
    });
});