const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
			group: 'punishment',
			memberName: 'kick',
			description: 'Kicks the specified client from the guild.',
            clientPermissions: [
                ['KICK_MEMBERS']
            ],
            throttling: {
                usages: 1,
                duration: 3
            },
            args: [] // TODO: Implement the arguments.
        });
    }

    run(message, args) {
        message.delete();
        // TODO: Implement the logic.
        // TODO: Implement punishment logging to a set Discord channel.
    }
}