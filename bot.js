const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ready');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'text-based-memage');
    
    if (!channel) {
        console.log('channel not found');
        return;
    }
    
    channel.send('welcome @' + member.user.username + ' https://tenor.com/view/forrest-gump-forrest-gump-wave-hello-gif-5576725');
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'text-based-memage');

    if (!channel) {
        console.log('channel not found');
        return;
    }

    channel.send(member.user.username + ' ' + 'has left https://tenor.com/view/peace-gif-9727828');
});

client.login(process.env.BOT_TOKEN);