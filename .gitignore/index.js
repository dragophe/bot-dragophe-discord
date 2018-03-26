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

bot.login('NDIyNjg5MDUzMTg0NjIyNTkz.DZpYWQ.Di7HoL4Hq2-dXufZYSO3RFjAH0g')

//https://discordapp.com/oauth2/authorize?client_id=422689053184622593&scope=bot&permissions=3148800
