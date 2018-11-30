const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "3";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "518174261278670849"; // ايدي السررفر
var channel = "518174261278670851";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream ,Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream ,Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream ,Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream ,Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream ,Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kiki") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login('NTE3Nzg1MTI2MTAxNDUwNzg0.DuHQ8g.wKLI_p10A_B5V1OYJSduNHEdy4w');
