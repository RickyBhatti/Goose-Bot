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
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to kick?',
                    type: 'member'
                },
                {
                    key: 'reason',
                    prompt: 'What is your reason for kicking the user?',
                    type: 'string',
                    default: 'User has been kicked.'
                }
            ]
        });
    }

    run(message, args) {
        message.delete();
        args.user.kick({
            reason: args.kick
        }).then(() => {
            message.channel.send({
                embed: {
                    title: args.user + " has been kicked from the server sucessfully.",
                    color: "FF0000",
                    fields: [
                        {
                            name: ":notepad_spiral: Reason",
                            value: args.reason
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: message.member.user.tag
                    }
                }
            });
        }).catch((error) => {console.log(error)});
        // TODO: Implement punishment logging to a set Discord channel.
    }
}