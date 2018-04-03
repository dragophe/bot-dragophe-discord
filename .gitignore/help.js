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
            message.reply("voici la liste des meme : \n -★bruh : BRUUUH \n -★congroo : El Psy Congrooo \n -★facepalm : facepalm général dans l'assistance \n  -★haa : Quand un mouton cri comme un humain, ça fait WHAAAAAAAA \n -★moche : Ti es mosh \n -★nani : Omae wa mo shinderu... Nani?! \n -★nogod : Oh God Please No \n -★notgay : I'm not gay it was a joke guys c'mon \n -★philipe : PHILIPPE JE SAIS OU TU TE CACHES VIENS ICI QUE JTE BUTTE \n -★pigeon : Alors, c'est un pigeon qui rentre dans un bar \n  ")
            console.log('hlpmm')
        }

        if (message == '!disconnect'){
           /* disconnect(){
                this.emit('closing')
                this.sendVoiceStateUpdate({channel_id: null,})
            }
           
            message.reply("deconnection")
            console.log('deco')*/
        }

    }
}

