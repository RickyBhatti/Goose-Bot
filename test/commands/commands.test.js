const assert = require('assert');
const fs = require('fs');

describe('Command Test', () => {
    fs.readdir('./commands/', {withFileTypes: true}, (err, files) => {
        console.log(files);
        // TODO: Implement a method to test all commands, and ensure the modules aren't null.
    });
});