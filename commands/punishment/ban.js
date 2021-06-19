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
                    type: 'member',
                    default: 0
                },
                {
                    key: 'reason',
                    prompt: 'What is your reason for banning the user?',
                    type: 'string',
                    default: 'User has been banned.'
                }
            ]
        });
    }

    run(message, args) {
        message.delete();
        args.user.ban({
            reason: args.reason
        }).then(() => {
            message.channel.send({ // TOOD: Finish the embed for banning.
                embed: {
                    title: "User Banned",
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