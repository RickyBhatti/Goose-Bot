const { Command } = require('discord.js-commando');

module.exports = class CoinflipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
			group: 'fun',
			memberName: 'coinflip',
			description: 'Perform a coin flip!',
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) { // TODO: Complete the logic of the command.
        message.delete();
    }
}