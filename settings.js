//base by HaroldMth/HansTech
//YouTube: @HansTech0
//Instagram: NULL
//Telegram: t.me/HansTech0
//want more free bot ? subscribe to my youtube channel: https://youtube.com/@HansTech0

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2348167165844"
global.ownername = 𝕄¥TH!C_GℍØUL_14"
global.ytname = "YT: HansTech0"
global.socialm = ""
global.location = "EARTH,AFRICA"

global.ownernumber = '2348167165844'  //creator number
global.ownername = '𝕄¥TH!C_GℍØUL_14' //owner name
global.botname = '𝕄¥TH!C_GℍØUL_14-bug-bot' //name of the bot

//sticker details
global.packname = 'Sticker By 𝕄¥TH!C_GℍØUL_14'
global.author = 'Hallo\n\nContact: 2348167165844'

//console view/theme
global.themeemoji = '🪀'
global.wm = 𝕄¥TH!C_GℍØUL_14😏"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaZDIdxDTkKB4JSWUk1O'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
