const Discord = require("Discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot: " + bot.user.tag + " Online!");
    bot.user.setActivity("with obama", { type: "WATCHING" });

    bot.guilds.forEach((guild) => {
        console.log(guild.name);
    })
})

bot.on("message", (message) => {
    var fullCommand = message.content.substr(1);
    var splitCommand = fullCommand.split(" ");

    if (message.content == "ping") {
        message.reply("pong");
        message.channel.sendMessage("ds");
    }
});

bot.login(token);
