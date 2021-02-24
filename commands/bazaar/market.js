const Command = require('../../base/Command.js')
const BazaarFormatter = require('../../modules/BazaarFormatter.js')

class Market extends Command {
    constructor(client){
        super(client, {
            name: "bazaar-market",
            description: "view the current market",
            category: "Bazaar",
            usage: "use this command to see the status of the current market",
            enabled: true,
            guildOnly: true,
            allMessages: false,
            showHelp: true,
            aliases: ["bazaar-viewmarket"],
            permLevel: "User"
          })
    }

    async run (message, args, level) {
        try {
            var gameData = this.client.getGameData(`bazaar-${message.channel.id}`)
            if (gameData.players === undefined) {
                await message.channel.send(`No Game Happening in this Channel`)
            } else {
                await message.channel.send(BazaarFormatter.bazaarEmbed(gameData))
            }
            
        } catch (e) {
            this.client.logger.log(e,'error')
        }
    }
}

module.exports = Market