const command = require('./command')

module.exports = class Play extends command{

    static match (message) {
        return message.content.startsWith('*')
    }

    static action (message) {

        if (message == '*shine'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/shine.mp3')        
               message.reply('SHINEEEE')
               console.log('SHINEEEE')
            }) 
        }

        if(message == '*chocapic'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/chocapic.mp3')        
               message.reply('Et paf ça fait des chocapic!')
               console.log('chocapic')
            }) 
        }

        if(message == '*gay'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/gay.mp3')        
               message.reply('Ha GAY!!!')
               console.log('Gay')
            }) 
        }

        if(message == '*duel'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/duel.mp3')        
               message.reply("C'est l'heure du dddd-du DUEL!!")
               console.log('duel')
            }) 
        }

        if(message == '*damn'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/damn.mp3')        
               message.reply("DAAAMMMMMMMMMMMN!!!!!!!!!!!!!!")
               console.log('damn')
            }) 
        }

        if(message == '*notgay'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/NotGay.mp3')        
               message.reply("I'm not gayy!!")
               console.log('Notgay')
            }) 
        }

        if(message == '*congroo'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/congroo.mp3')        
               message.reply("el-psy-congroo")
               console.log('congroo')
            }) 
        }

        if(message == '*pigeon'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/pigeon.mp3')        
               message.reply("cest un pigeon qui rentre dans un bar")
               console.log('pigeon')
            }) 
        }

        if(message == '*facepalm'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/facepalm.mp3')        
               message.reply("SPATCH !!!")
               console.log('facepalm')
            }) 
        }

        if(message == '*nogod'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/nogod.mp3')        
               message.reply("GOOOD pls NOOOOO")
               console.log('nogod')
            }) 
        }

        if(message == '*wow'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/wow.mp3')        
               message.reply("WOOOWW!!!")
               console.log('wow')
            }) 
        }
        if(message == '*nani'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/nani.mp3')        
               message.reply("NAANIII!!!")
               console.log('nani')
            }) 
        }

        if(message == '*moche'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/moche.mp3')        
               message.reply("TU ES MOCHE!!!")
               console.log('moche')
            }) 
        }

        if(message == '*philipe'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/philipe.mp3')        
               message.reply("phillipe-je-sais-ou-tu-tcaches")
               console.log('philipe')
            }) 
        }

        if(message == '*haa'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/HAA.mp3')        
               message.reply("HAAAAAAA!!!!!!")
               console.log('HAA')
            }) 
        }
        if(message == '*bruh'){
            let voiceChannel = message.guild.channels.filter(function (channel) { return channel.type === 'voice' }).first()

            voiceChannel.join ().then(function(connection) {
               connection.playFile('./meme/bruh.mp3')        
               message.reply("bruh")
               console.log('bruh')
            }) 
        }

    }
}
