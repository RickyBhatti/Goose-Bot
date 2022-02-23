const { Command } = require('discord.js-commando');

module.exports = class CacheCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cache',
			group: 'util',
			memberName: 'cache',
			description: 'Lists the cache size.',
            clientPermissions: [
                ['MANAGE_MESSAGES']
            ],
            throttling: {
                usages: 1,
                duration: 3
            },
            args: []
        });
    }

    run(message, args) {
        message.delete();
        message.channel.send({
            content: "",
            embed: {
                title: "Cache Size",
                color: "32CD32",
                fields: [
                    {
                        name: "Members",
                        value: message.guild.members.cache.size,
                        inline: true
                    },
                    {
                        name: "Messages",
                        value: message.guild.message.cache.size,
                        inline: true
                    }
                ],
                timestamp: new Date(),
                footer: {
                    text: message.member.user.tag,
                    icon_url: message.member.user.avatarURL
                }
            }
        });

        message.guild.message.cache.clear();
    }
}