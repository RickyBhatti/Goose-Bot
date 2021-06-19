const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
			group: 'util',
			memberName: 'ping',
			description: 'Displays the current bot ping.',
            throttling: {
                usages: 1,
                duration: 10
            }
        });
    }

    async run(message) {
        message.delete();
        await message.channel.send("Pinging.").then(responesMessage => {
            responesMessage.edit({
                content: "",
                embed: {
                    title: "Pong!",
                    color: "32CD32",
                    fields: [
                        {
                            name: "Latency",
                            value: (responesMessage.createdTimestamp - message.createdTimestamp) + " ms."
                        },
                        {
                            name: "API",
                            value: this.client.ws.ping + " ms."
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: message.member.user.tag
                    }
                }
            });
        });
    }
}