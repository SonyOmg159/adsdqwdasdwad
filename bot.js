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

 



   // var s = ['','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
	   var s = ['','480169573530861578','483055655800930315'];
		setInterval(function (){
		client.user.setPresence({
	 game: { 
		type: 1,
		 url: 'https://www.twitch.tv/skwadraa',
		name: 'BYE REVENG :(',
		application_id: '492724279788437515',
		 assets: {
			 large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
	  
		}
	  }
		});
		}, 5000);
	});











client.login(process.env.BOT_TOKEN);
