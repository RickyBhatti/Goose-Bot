const assert = require('assert');
const fs = require('fs');

describe('Command Test', () => {
    fs.readdir('./commands/', (err, directories) => {
        for (let directory of directories) {
            fs.readdir('./commands/' + directory, (err, files) => {
                for (let file of files) {
                    let command = require('../../commands/' + directory + '/' + file.replace('.js', ''));
                    it(file + ' should not be null', () => { // Ensures that the command handler is not null.
                        // Currently not working, will look into a better way to implement this. (Each command will have its own test file, this is just a general test)
                        assert.notStrictEqual(command, null);
                    });
                }
            });
        }
    });
});