const Discord = require('discord.js')
const bot = new Discord.Client()
const help = require('./help')
const play = require('./play')
const youtube = require('./youtube')
const command = require('./command')


    
bot.on('message' , function (message) {

    let commandUsed =
    help.parse(message) ||
    youtube.parse(message) ||
    play.parse(message)


})

bot.login('NDI3ODMyNjQ0NDc5MzUyODU0.DZqRuQ.p-zgik9ktWyF2A2Mc4gJzJFgdK8')

//https://discordapp.com/oauth2/authorize?client_id=427832644479352854&scope=bot&permissions=3148800

