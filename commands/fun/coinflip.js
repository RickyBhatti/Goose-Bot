const { Command } = require('discord.js-commando');

module.exports = class CoinflipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['cf'],
			group: 'fun',
			memberName: 'coinflip',
			description: 'Perform a coin flip!',
            throttling: {
                usages: 1,
                duration: 2
            }
        });
    }

    run(message) {
        message.delete();
        message.reply(`I have flipped a coin and it landed on **${Math.random() <= 0.5 ? "Heads" : "Tails"}**.`);
    }
}