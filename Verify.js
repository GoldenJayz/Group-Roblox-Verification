'use strict';
const rbx = require("noblox.js");
const discord = require("discord.js");
const client = new discord.Client();



let prefix = "v!";

client.on("ready", () => {
    console.log("hi");
});


client.on("message", message => {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    else if (command == "groupverify") {
        if (!args.length) {
            message.channel.send("You need to provide a group ID");
        } else if (args.length) {
            var randa = ["pepper", "onion", "ravioli", "cheese", "pizza", "french", "light", "bulb", "cricket"];


            var rande = randa[Math.floor(Math.random() * randa.length)];

            var randr = randa[Math.floor(Math.random() * randa.length)];

            var randt = randa[Math.floor(Math.random() * randa.length)];

            var randy = randa[Math.floor(Math.random() * randa.length)];

            var mix = `${rande} ${randr} ${randt} ${randy}`;

            const embed = new discord.MessageEmbed()

                .setTitle(`Verify ${args[0]}`)
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTimestamp()
                .setFooter("Please say done, when done verifying!")
                .addField("Display this as your status:", "```" + mix + "```");
            message.channel.send(embed);

            var id = args[0];

            if (message.author.id == client.user.id) {
                return;
            } else {
                let filter = m => true;
                let collector = new discord.MessageCollector(message.channel, filter);
                collector.on('collect', (message, col) => {
                    if (message.content == "done") {
                        const shoutpro = rbx.getShout(id);
                        shoutpro
                            .then((shout) => {
                                console.log(shout.body);
                                if (shout.body == mix) {
                                    console.log("success");
                                    message.channel.send("success");
                                } else {
                                    console.log("u did not change it");
                                    message.channel.send("You did not change it!");
                                }
                            })
                            .catch(err => {
                                console.error(err);
                                message.channel.send("There was a problem handling your request!");
                            })
                    } else {
                        return;
                    }

                })
            }





        }

    }

}
);


client.login("token");
