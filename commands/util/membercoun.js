const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'membercount',
            aliases: ['mc', 'mcount'],
			group: 'util',
			memberName: 'membercount',
			description: 'Displays the current member count of the guild.',
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run(message) {
        message.delete();
        message.channel.send({
            content: "",
            embed: {
                title: "Member Count",
                color: "32CD32",
                fields: [
                    {
                        name: "Total",
                        value: `${message.guild.members.cache.size}`,
                        inline: true
                    },
                    {
                        name: "Humans",
                        value: `${message.guild.members.cache.filter(m => m.user.bot === false).size}`,
                        inline: true
                    },
                    {
                        name: "Bots",
                        value: `${message.guild.members.cache.filter(m => m.user.bot === true).size}`,
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
    }
}