const command = require('./command')

module.exports = class help extends command {

    static match(message) {
        return message.content.startsWith('!')
    }

    static action (message){

        if (message == '!ping'){
            message.reply('pong')
            console.log('ping pong')
        }
        if (message == '!salut'){
            message.reply('salut,tout vas bien?')
            console.log('slt')
        }
        if (message == '!help'){
            message.reply("voici la liste des commande : \n -!ping : ping fonctionnement \n -!helpMeme : liste des meme present")
            console.log('hlp')
        }
        if (message == '!helpMeme'){
            message.reply("voici la liste des meme : \n -!gay : gayyy \n -!damn : Daammmn \n -!duel : yugiho duel \n -!chocapic : ET PAF CA FAIT DES CHOCAPIC \n -!shine : SHINNEEEE \n -notgay : I'm not gayy!")
            console.log('hlpmm')
        }

        if (message == '!disconnect'){
            connection.disconnect()
            message.reply("deconnection")
            console.log('deco')
        }

    }
}

