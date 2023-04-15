import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
let ucpn = `${ucapan()}`

const defaultMenu = {
  before: `${global.readMore}
`.trimStart(),
header: `╭─「%category」──⬣`,
body: `│ •%cmd %isPremium %islimit`,
footer: `╰─────────⬣\n`,
after: `${botdate}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
conn.reply(m.chat, `Sedang Memuat...`, m)
let arrayMenu = ['all', 'anime', 'update', 'logomaker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'menfess', 'islami', 'menbalas', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'virus', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': ' MAIN',
'jadibot': ' JADIBOT',
'game': ' GAME',
'rpg': ' RPG GAMES',
'xp': ' EXP & LIMIT',
'sticker': ' STIKER',
'kerang': ' KERANG AJAIB',
'quotes': ' QUOTES',
'fun': ' FUN',
'islami': ' MUSLIM',
'anime': ' ANIME',
'admin': ' ADMIN',
'group': ' GROUP',
'menfess': ' MENFESS',
'vote': ' VOTING',
'absen': ' ABSEN',
'virus': 'VIRUS',
'islami': 'ISLAMI',
'premium': ' PREMIUM',
'anonymous': ' ANONYMOUS CHAT',
'internet': ' INTERNET',
'downloader': ' DOWNLOADER',
'tools': ' TOOLS',
'nulis': ' MAGER NULIS',
'audio': ' AUDIO',
'logomaker': ' LOGO MAKER',
'berita': ' BERITA',
'database': ' DATABASE',
'quran': ' AL-QUR\'AN',
'owner': ' OWNER',
'info': ' INFO',
'': ' NO KATEGORY',
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'virus') tags = {
'virus': 'Virus'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'logomaker') tags = {
'logomaker': 'Logomaker'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
  }
if (teks == 'menfess') tags = {
    'menfess': 'Menfess'
}
if (teks == 'islami') tags = {
'islami': 'Islami'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
'host': 'Host',
'advanced': 'Advanced'
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'nocategory') tags = {
'': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} 𝐌𝐄𝐍𝐔 ${htka}`,
rows: [
{title: `${emot} Menfess`, rowId: ".m10 Menfess", },
{title: `${emot} Virus`, rowId: ".m10 virus", },
{title: `${emot} Logo Maker`, rowId: ".m10 logomaker", },
{title: `${emot} Rpg`, rowId: ".m10 rpg", },
{title: `${emot} Muslim`, rowId: ".m10 islami", },
{title: `${emot} Exp`, rowId: ".m10 xp", },
{title: `${emot} Game`, rowId: ".m10 game", },
{title: `${emot} Fun`, rowId: ".m10 fun", },
{title: `${emot} Kerang`, rowId: ".m10 kerangajaib", },
{title: `${emot} Quotes`, rowId: ".m10 quotes", },
{title: `${emot} Anime`, rowId: ".m10 anime", },
{title: `${emot} Nsfw`, rowId: ".m10 nsfw", },
{title: `${emot} Premium`, rowId: ".m10 premium", },
{title: `${emot} Anonymous Chats`, rowId: ".m10 anonymous", },
{title: `${emot} Al-Quran`, rowId: ".m10 quran", },
{title: `${emot} Internet`, rowId: ".m10 internet", },
{title: `${emot} Berita`, rowId: ".m10 berita", },
{title: `${emot} Downloaders`, rowId: ".m10 downloader", },
{title: `${emot} Stikers`, rowId: ".m10 stiker", },
{title: `${emot} Nulis`, rowId: ".m10 nulis", },
{title: `${emot} Audio`, rowId: ".m10 audio", },
{title: `${emot} Sound Menu`, rowId: ".soundmenu", },
{title: `${emot} Group`, rowId: ".m10 group", },
{title: `${emot} Admin`, rowId: ".m10 admin", },
{title: `${emot} Database`, rowId: ".m10 database", },
{title: `${emot} Tools`, rowId: ".m10 tools", },
{title: `${emot} Info`, rowId: ".m10 info", },
{title: `${emot} Owner`, rowId: ".m10 owner", },
{title: `\n${emot} No Category`, rowId: ".m10 nocategory", },
]
},{
title: `${htki} 𝐈𝐍𝐅𝐎 ${htka}`,
rows: [
{title: `${emot} OWNER BOT`, rowId: ".owner", },
{title: `${emot} SCRIPT`, rowId: ".sc", },
{title: `${emot} SEWA XR`, rowId: ".sewabot", },
{title: `${emot} BUY PREMIUM`, rowId: ".sewabot", },
{title: `${emot} DONASI`, rowId: ".donasi", },
{title: `${emot} S & K`, rowId: ".rules", },
] },
]
let psan = 'bagaimana kabarmu?'
let ucpn2 = `${ucapan()}`
let usrs = db.data.users[m.sender]
let ftoko2 = {
       key: {
                   participant : '0@s.whatsapp.net'},
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": 'AMELIA MD BOTZ', //Kasih namalu 
                           "description": bottime, 
                           "currencyCode": "IDR",
                           "priceAmount1000": fsizedoc,
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
let capp = `
${ucpn2} ${await conn.getName(m.sender)}

 ❍⃕   𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑
 
 ⬡ User :  ${await conn.getName(m.sender)}
 ⬡ Premium : ${usrs.premiumTime > 1 ? 'Yes': 'No'}
 ⬡ Name : ${await conn.getName(m.sender)}
 ⬡ Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
 
 ❍⃕   𝐓 𝐎 𝐃 𝐀 𝐘 
 
 ⬡ Wib : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
 ⬡ Wita : ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
 ⬡ Wit : ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
 ⬡ Date : ${new Date().toLocaleDateString()}
 
 ❍⃕   𝐃 𝐀 𝐓 𝐀 𝐁 𝐀 𝐒 𝐄  
 
 ⬡ Uptime : ${mpt}
 ⬡ Database :  ${Object.values(global.db.data.users).filter(user => user.registered == true).length}
 ⬡ User : ${Object.keys(global.db.data.users).length}
 ⬡ Os Platform : ${os.platform()}
`
const listMessage = {
text: capp,
footer: `${botdate}`,
mentions: await conn.parseMention(capp),
buttonText: `Click Here!`, 
sections
}
if (teks == '404') { 
return await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(capp), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')

const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 
    
    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

//------------------< MENU >----------------

//------------------ SIMPLE
/*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `${htjava} ${namebot}`,
body: titlebot,
description: titlebot,
mediaType: 2,
thumbnail: await(await fetch(thumb2)).buffer(),
 mediaUrl: sig
}
 }
}*/
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    let cap1 = `${ucpn2} ${await conn.getName(m.sender)}

 乂   𝐈 𝐍 𝐅 𝐎 𝐔 𝐒 𝐄 𝐑
 
 • User :  ${await conn.getName(m.sender)}
 • Premium : ${usrs.premiumTime > 1 ? 'Yes': 'No'}
 • Name : ${await conn.getName(m.sender)}
 • Status : ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
 
 乂   𝐓 𝐎 𝐃 𝐀 𝐘 
 
 • Wib : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
 • Wita : ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
 • Wit : ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
 • Date : ${new Date().toLocaleDateString()}
 
 乂   𝐃 𝐀 𝐓 𝐀 𝐁 𝐀 𝐒 𝐄  
 
 • Uptime : ${mpt}
 • Database :  ${Object.values(global.db.data.users).filter(user => user.registered == true).length}
 • User : ${Object.keys(global.db.data.users).length}
 • Os Platform : ${os.platform()}`
    let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
    
//------------------ DOCUMENT
// mampus enc:v
function _0x1b8f(_0x3261be,_0x18aa48){var _0x4c6257=_0xf41a();return _0x1b8f=function(_0x3f6fbb,_0x5e920f){_0x3f6fbb=_0x3f6fbb-0x118;var _0x185205=_0x4c6257[_0x3f6fbb];return _0x185205;},_0x1b8f(_0x3261be,_0x18aa48);}var _0x105506=_0x1b8f;(function(_0x4bc399,_0x1ba194){var _0x1ba427=_0x1b8f,_0x1297d1=_0x4bc399();while(!![]){try{var _0x154b9e=-parseInt(_0x1ba427(0x135))/0x1+-parseInt(_0x1ba427(0x120))/0x2+-parseInt(_0x1ba427(0x12e))/0x3*(parseInt(_0x1ba427(0x134))/0x4)+-parseInt(_0x1ba427(0x11d))/0x5*(-parseInt(_0x1ba427(0x12f))/0x6)+-parseInt(_0x1ba427(0x130))/0x7+-parseInt(_0x1ba427(0x12a))/0x8+parseInt(_0x1ba427(0x118))/0x9;if(_0x154b9e===_0x1ba194)break;else _0x1297d1['push'](_0x1297d1['shift']());}catch(_0x45ff9e){_0x1297d1['push'](_0x1297d1['shift']());}}}(_0xf41a,0x72aa0));var _0x56b0dd=(function(){var _0xe029bb=!![];return function(_0xfcc4b6,_0x388890){var _0x4f90ba=_0xe029bb?function(){var _0x4342a2=_0x1b8f;if(_0x388890){var _0x24c0b1=_0x388890[_0x4342a2(0x136)](_0xfcc4b6,arguments);return _0x388890=null,_0x24c0b1;}}:function(){};return _0xe029bb=![],_0x4f90ba;};}()),_0x150d30=_0x56b0dd(this,function(){var _0x37ebe5=_0x1b8f;return _0x150d30['toString']()[_0x37ebe5(0x11c)]('(((.+)+)+)+$')[_0x37ebe5(0x12c)]()[_0x37ebe5(0x132)](_0x150d30)[_0x37ebe5(0x11c)]('(((.+)+)+)+$');});function _0xf41a(){var _0x53849d=['log','4sZfdQu','769751PkJHGN','apply','length','23307921gscaZX','trim','buffer','.sewa','search','2285GGCBfT','exception','__proto__','575454yOOEvi','bind','.rules','.owner','SEWA\x20BOT','return\x20(function()\x20','table','info','S\x20&\x20K','prototype','1342688xAJbiX','console','toString','OWNER','2651079GZfzRV','2616RtvqBP','1472450KXNrEL','send3ButtonImg','constructor'];_0xf41a=function(){return _0x53849d;};return _0xf41a();}_0x150d30();var _0x5e920f=(function(){var _0xe36006=!![];return function(_0x2323e2,_0x45a41e){var _0x5f1716=_0xe36006?function(){var _0x471c4c=_0x1b8f;if(_0x45a41e){var _0x2161e5=_0x45a41e[_0x471c4c(0x136)](_0x2323e2,arguments);return _0x45a41e=null,_0x2161e5;}}:function(){};return _0xe36006=![],_0x5f1716;};}()),_0x3f6fbb=_0x5e920f(this,function(){var _0x258c18=_0x1b8f,_0x4e0aaa;try{var _0x245250=Function(_0x258c18(0x125)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4e0aaa=_0x245250();}catch(_0x4583e9){_0x4e0aaa=window;}var _0xe76c66=_0x4e0aaa[_0x258c18(0x12b)]=_0x4e0aaa[_0x258c18(0x12b)]||{},_0x4893ba=[_0x258c18(0x133),'warn',_0x258c18(0x127),'error',_0x258c18(0x11e),_0x258c18(0x126),'trace'];for(var _0x4560a1=0x0;_0x4560a1<_0x4893ba[_0x258c18(0x137)];_0x4560a1++){var _0x16c4ad=_0x5e920f['constructor'][_0x258c18(0x129)][_0x258c18(0x121)](_0x5e920f),_0x2c3e8f=_0x4893ba[_0x4560a1],_0x31716e=_0xe76c66[_0x2c3e8f]||_0x16c4ad;_0x16c4ad[_0x258c18(0x11f)]=_0x5e920f['bind'](_0x5e920f),_0x16c4ad[_0x258c18(0x12c)]=_0x31716e[_0x258c18(0x12c)][_0x258c18(0x121)](_0x31716e),_0xe76c66[_0x2c3e8f]=_0x16c4ad;}});_0x3f6fbb(),await conn[_0x105506(0x131)](m['chat'],await(await fetch(thumb))[_0x105506(0x11a)](),cap1,text[_0x105506(0x119)](),_0x105506(0x12d),_0x105506(0x123),_0x105506(0x124),_0x105506(0x11b),_0x105506(0x128),_0x105506(0x122),m,{'quoted':fliveLoc,'contextInfo':{'externalAdReply':{'showAdAttribution':![],'mediaUrl':syt,'title':gcname,'body':bottime,'description':syt,'mediaType':0x1,'thumbnail':await(await fetch(thumb))['buffer'](),'sourceUrl':sig}}});
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

    
//-------DOC TEMPLATE
    /*const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: tess,
            footer: titlebot + '\n⚡ Supported By Fangz TEAM',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://s.id/Fangzganz'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: syt
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        await conn.sendMessage(m.chat, message,)
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

handler.help = ['listmenu put', 'putra'] 
handler.tags = ['main']
handler.command = /^(m10)$/i

handler.register = false
handler.exp = 3
 
export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang️"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = " Selamat Malam"
}
return res
}
