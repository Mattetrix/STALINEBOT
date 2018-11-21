
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix - "URSS."

bot.on('message', msg => {
    if (msg.content.toLowerCase().startsWith(prefix + 'ping' )) {
        msg.channel.send('Pong !');
    }
    if (content.startsWith(prefix + "time")) {
        let daysofweek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ]
        msg.channel.send(daysofweek[(new Date ).getDay()])
    }
    if (content.startsWith(prefix + "roulette russe")) {
        msg.channel.send("Et c'est ..." + Math.floor(Math.random() * 6 + 1)
    if (msg.content == "Et c'est ... 6" )
    else guildMember.kick
    guildMember.createDM("https://discord.gg/YYgYZDn")
  }
});
bot.login(process.env.TOKEN);
