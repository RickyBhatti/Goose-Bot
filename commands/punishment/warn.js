const { Command } = require('discord.js-commando');

module.exports = class WarnCommand extends Command {
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
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to warn?',
                    type: 'member'
                },
                {
                    key: 'reason',
                    prompt: 'What is your reason for warning the user?',
                    type: 'string'
                }
            ]
        });
    }

    run(message, args) {

    }
};