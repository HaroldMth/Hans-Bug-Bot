//base by HaroldMth/HansTech
//YouTube: @HansTech0
//Instagram: NULL
//want more free bot ? subscribe to my youtube channel: https://youtube.com/@HansTech0

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "256788028745"
global.ownername = "*Ramadhan Tech"
global.ytname = "YT: RamahTech0"
global.socialm = ""
global.location = "EARTH,AFRICA"

global.ownernumber = '256788028745'  //creator number
global.ownername = 'Ramadhan Yusuf' //owner name
global.botname = 'Badbyol-Bug-bot' //name of the bot

//sticker details
global.packname = 'Sticker By Ramadhan Tech'
global.author = 'Hallo\n\nContact: 256788028745'

//console view/theme
global.themeemoji = '💫'
global.wm = "Ramadhan Tech😏"

//theme link
global.link = 'https://chat.whatsapp.com/IM57veJplECHwSiwI2iXaY'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
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
