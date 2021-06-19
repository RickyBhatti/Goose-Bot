const { Command } = require('discord.js-commando');

module.exports = class PurgeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
			group: 'util',
			memberName: 'purge',
			description: 'Purges specified amount of messages from chat.',
            clientPermissions: [
                ['MANAGE_MESSAGES']
            ],
            throttling: {
                usages: 1,
                duration: 3
            },
            args: [
                {
                    key: 'amount',
                    prompt: 'How many messages would you like to purge?',
                    type: 'integer'
                }
            ]
        });
    }

    run(message, args) {
        message.delete();
        message.channel.bulkDelete(args.amount).then(() => { // Can't bulk delete messages older than 14 days.
            message.reply("deleted " + args.amount + " messages.");
        }).catch(error => {
            console.log("[" + this.name + "] " + error.message)
        });
    }
}