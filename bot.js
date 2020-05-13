const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.once('ready', () => {
    console.log('ready');
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
    //if (message.content.includes('true'.toLowerCase())) {
    if (message.content.toLowerCase().includes('true')) {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'TRUE');
        message.react(emoji);
    }

    //if (message.content.includes('bravo'.toLowerCase()) || message.content.includes('ross'.toLowerCase())) {
    if (message.content.toLowerCase().includes('bravo') || message.content.toLowerCase().includes('ross')) {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'bravotf2');
        message.react(emoji);
    }

    if (message.content.toLowerCase().includes('sova') || message.content.toLowerCase().includes('hanzo')) {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Pepega');
        message.channel.send(`${emoji} 📣 CHALK DART`);
    }

    if (message.content.startsWith(`${prefix}status`)) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        client.user.setActivity(message.content.replace(`${prefix}status `, ''), { type: 'PLAYING' })
            .then(presence => message.channel.send(`activity set to ${presence.activities[0].name}`))
            .catch(console.error);
    }

    if (message.content.toLowerCase() === `${prefix}invite`) {
        message.channel.send(process.env.INVITE_LINK);
    }
});

client.login(process.env.BOT_TOKEN);