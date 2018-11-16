const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

 



const devs = ['200644160179535872' , '507260598082338837' , '' , ''];
          const adminprefix = "M";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + '=')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ Minecraft|Gamers");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });













client.login(process.env.BOT_TOKEN);
