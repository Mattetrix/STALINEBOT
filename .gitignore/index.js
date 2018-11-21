
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix - "URSS."

bot.on('ready', function () {
    console.log("Login success")
    bot.user.setActivity('Drinking Vodka').catch(console.error)
});


    bot.on('message', message => {

  if (message.content.startsWith('URSS.play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})
  bot.on('message', message => {

  if (msg.content === prefix + "site"){
        msg.channel.send("https://fr.wikipedia.org/wiki/Union_des_républiques_socialistes_soviétiques")
       
    }
  
});
bot.login(process.env.TOKEN);
