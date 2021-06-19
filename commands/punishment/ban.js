const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
			group: 'punishment',
			memberName: 'ban',
			description: 'Bans the specified client from the guild.',
            clientPermissions: [
                ['BAN_MEMBERS']
            ],
            throttling: {
                usages: 1,
                duration: 3
            },
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to ban?',
                    type: 'member'
                },
                {
                    key: 'duration',
                    prompt: 'How long would you like to ban this user for?',
                    type: 'member'
                },
                {
                    key: 'reason',
                    prompt: 'What is your reason for banning the user?',
                    type: 'string'
                }
            ]
        });
    }

    run(message, args) {
        message.delete();
        // TODO: Implement the logic.
        // TODO: Implement punishment logging to a set Discord channel.
    }
}