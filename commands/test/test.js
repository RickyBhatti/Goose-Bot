const { Command } = require('discord.js-commando');

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
			aliases: ['test'],
			group: 'test',
			memberName: 'TestCommand',
			description: 'Does nothing.',
            throttling: {
                usages: 2,
                duration: 10,
            },
        })
    }

    run(message) {
        return message.say("yes");
    }
}