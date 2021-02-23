const Command = require('../../base/Command.js')
const Discord = require('discord.js')
const _ = require('lodash')



class Bazaar extends Command {
    constructor(client){
        super(client, {
            name: "bazaar",
            description: "Bazaar Game Helper",
            category: "Bazaar",
            usage: "use this command to get Bazaar Help",
            enabled: true,
            guildOnly: false,
            allMessages: false,
            showHelp: true,
            aliases: [],
            permLevel: "User"
          })
    }

    async run (message, args, level) {
        try {
            if (args[0]) {
                const newCmd = args.shift()
                this.client.TryExecuteCommand("bazaar-" + newCmd, message, args)
            } else {
                const bazaarEmbed = new Discord.MessageEmbed().setColor(386945).setTitle("Bazaar Game Help").setTimestamp()
                inisEmbed.addField(`Commands`, `--`)
                await message.channel.send(inisEmbed);
            }
        } catch (e) {
            this.client.logger.log(e,'error')
        }
    }

}

module.exports = Bazaar