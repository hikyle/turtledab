const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('ready');
    client.user.setActivity('do NOT google turtle dab', { type: 'CUSTOM_STATUS' })
        .then(presence => console.log('acitivty set to ${presence.activities[0].name}'))
        .catch(console.error);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'text-based-memage');
    
    if (!channel) {
        console.log('channel not found');
        return;
    }
    
    channel.send('welcome <@' + member.user.id + '> ' + 'https://tenor.com/view/forrest-gump-forrest-gump-wave-hello-gif-5576725');
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'text-based-memage');

    if (!channel) {
        console.log('channel not found');
        return;
    }

    channel.send(member.user.username + ' ' + 'has left https://tenor.com/view/peace-gif-9727828');
});

client.on('message', message => {
    if (message.content.includes('true'.toLowerCase())) {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'TRUE');
        message.react(emoji);
    }
});

client.login(process.env.BOT_TOKEN);