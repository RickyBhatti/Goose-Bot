const assert = require('assert');
const fs = require('fs');

/*
    Important Note:
    This test currently only supports one sub-folder within the commands folder, this test will be changed down the road to be recursive thus supporting multiple sub-folders.
*/

fs.readdir('./commands/', (err, directories) => {
    for (let directory of directories) {
        fs.readdir('./commands/' + directory, (err, files) => {
            for (let file of files) {
                let command = require('../../commands/' + directory + '/' + file.replace('.js', ''));
                describe(file, () => {
                    it('should not be null', () => { // Ensures that the command handler is not null.
                        assert.notStrictEqual(command, null);
                    }); 
                });
            }
        });
    }
});