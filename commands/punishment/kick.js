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
                    type: 'string'
                }
            ]
        });
    }

    run(message, args) {
        message.delete();
        args.user.kick().then(() => {
            message.channel.send({ // TOOD: Finish the embed for kicking.
                embed: {
                    title: "User Kicked",
                    color: "FF0000",
                    fields: [
                        {
                            name: "TODO",
                            value: "TODO"
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