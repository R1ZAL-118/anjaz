import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let esce = `text nya `
let flaaaaa2 = `${pickRandom(['https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=', 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=', 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='])}`
/*
%dash

%m3

%m1 *T O D A Y*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wib
%m3

%m1 *I N F O*
%m2 *Bot Name:* %me
%m2 *Mode:* 
%m2 *Platform:*
%m2 *Type:* 
%m2 *Baileys:* Multi Device
%m2 *Prefix:* 
%m2 *Uptime:*
%m2 *Database:* 
%m3

%m1 *I N F O  C M D* 
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
*/
const defaultMenu = {
before: `╔═━┈༓ ❲ *Iɴғᴏ Bᴏᴛ* ❳
┃╔━─⟢⟨ ​QuartzBot ⟩⟣
┇┃ ➯ *Oᴡɴᴇʀ:* RizalzBot 
┃║ ➯ *Pʀᴏᴊᴇᴄᴛ:* 
┇┃ ➯ *Mᴏᴅᴇ:* publik
┃║ ➯ *Pʟᴀᴛғᴏʀᴍ:* VPS
┇┃ ➯ *Tʏᴘᴇ:* Node.js
┃║ ➯ *Bᴀɪʟᴇʏs:* Multi Device 
┇┃ ➯ *Pʀᴇғɪx:* [ *. | #* ]
┃║ ➯ *Uᴘᴛɪᴍᴇ:* tidak diketahui 
┇┃ ➯ *Dᴀᴛᴀʙᴀsᴇ:* 1023 dari 70
┃┃ ➯ *Tgl Islam:* %dateIslamic
┃❏
┗┳━━◩
┍┛
┆➯ My Owner : wa.me//6285768097041
└─┈⟅
┍━─┈❏➢ 
┆𝙽𝚊𝚖𝚎 : %name
┆Tᴀɢ : %tag
┆Sᴛᴀᴛᴜs : %prems
┆Mᴏɴᴇʏ : %money
┆𝙻𝚒𝚖𝚒𝚝 : %limit
┆𝙻𝚎𝚟𝚎𝚕 : %level
┆𝙴𝚡𝚙   : %exp
┆𝚁𝚘𝚕𝚎   : %role
└──┈┈⟢
%readmore
`.trimStart(),
header: '❏––––『 *%category* 』',
body: `┆✦ %cmd`,
footer: `┗━═─────┈༓`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'jadian', 'database','quran', 'vote','vidiorandom', 'catatan', 'absen', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'sound2004', 'owner', 'nocategory', 'openaimenu']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'random': 'Random',
  'fun': 'Fun',
  'jadian': 'Jadian',
  'asupan': 'Asupan',
  'openaimenu': 'Openaimenu',
  'vidiorandom': 'VidioRandom',
  'anime': 'Anime', 
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Vote',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis',
  'audio': 'Audio',
  'audioanime': 'Audioanime',
  'logo': 'Logo Menu',
  'maker': 'Maker',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'openaimenu') tags = {
    'openaimenu': 'Openaimenu'
  }
  if (teks == 'random') tags = {
   'random': 'Random'
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
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
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
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
    }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'asupan') tags = {
  'asupan': 'Asupan'
 }
 if (teks == 'vidiorandom') tags = {
 'vidiorandom': 'Vidiorandom'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote',
  }
  if (teks == 'logo') tags = {
    'logo': 'Logo',
  }
  if (teks == 'catatan') tags = {
  'catatan': 'Catatan',
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
  if (teks == 'audioanime') tags = {
    'audioanime': 'Audioanime'
}
  if (teks == 'sound2004') tags = {
    'sound2004': 'Sound2004'
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
    'nocategory': 'No Category'
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
const sections = [
   {
    title: `${htki} MAIN ${htka}`,
    rows: [
        {title: `⚡ ${pmenus} SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
        {title: `💌 ${pmenus} OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
        {title: `⏰ ${pmenus} RUNTIME BOT`, rowId: ".runtime", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan"}, 
        {title: `📔 ${pmenus} SCRIPT BOT`, rowId: ".sc", description: `Source Code ${namebot}`},
    ]
      },{
        title: `${htki} SUPPORT ${htka}`,
        rows: [
            {title: `🔖 ${pmenus} SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
            {title: `🌟 ${pmenus} BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
            {title: `💹 ${pmenus} DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
        ]
        },{
          title: `${htki} MENU MENFESS ${htka}`,
          rows: [
            {title: `💬 ${pmenus} Menfess Balas`, rowId: ".m15 menbalas", description: "Menampilkan Semua command BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
            {title: `💬 ${pmenus} All`, rowId: ".m15 all", description: "Menampilkan Semua command BOT"},
        {title: `🌱 ${pmenus} Rpg`, rowId: ".m15 rpg", description: "Game Epic Rpg!"},
        {title: `✨ ${pmenus} Exp`, rowId: ".m15 xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `🎮 ${pmenus} Game`, rowId: ".m15 game", description: "Gamenya seru seru lho >-<"},
        {title: `🧩 ${pmenus} Fun`, rowId: ".m15 fun", description: "Fitur yang aman untuk keluarga"},
        {title: `🐚 ${pmenus} Kerang`, rowId: ".m15 kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `📑 ${pmenus} Quotes`, rowId: ".m15 quotes", description: "Random Inspirasi"},        
         {title: `🙎‍♀️ ${pmenus} Asupan`, rowId: ".m15 asupan", description: "Menampilkan Asupan DiBot"},        
        {title: `⛩️ ${pmenus} Anime`, rowId: ".m15 anime", description: "Kamu wibu ya bang?"},
        {title: `🔞 ${pmenus} Nsfw`, rowId: ".m15 nsfw", description: "Tch, dasar sagne"},
        {title: `🌟 ${pmenus} Premium`, rowId: ".m15 premium", description: "Only premium Users"},
        {title: `🎭 ${pmenus} Anonymous Chats`, rowId: ".m15 anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `📖 ${pmenus} Al-Quran`, rowId: ".m15 quran", description: "Tobat yuk kak"},
        {title: `🌎 ${pmenus} Internet`, rowId: ".m15 internet", description: "Cari sesuatu diBOT"},
        {title: `🌎 ${pmenus} Berita`, rowId: ".m15 berita", description: "Cari berita terupdate"},
        {title: `📩 ${pmenus} Downloaders`, rowId: ".m15 downloader", description: "Download sesuatu diBOT"},
        {title: `🎨 ${pmenus} Stikers`, rowId: ".m15 stiker", description: "Buat Sticker diBOT"},
        {title: `🎨 ${pmenus} Logo`, rowId: ".m15 logo", description: "Buat Logo Kamu diBOT"},
        {title: `✏️ ${pmenus} Nulis`, rowId: ".m15 nulis", description: "Nulis kok males kak?"},
        {title: `📝 ${pmenus} Buat Catatan`, rowId: ".m15 catatan", description: "Buat Catatan Kamu di Bot"},
        {title: `🎧 ${pmenus} Preset Alight Montion/Apk`, rowId: ".presetmenu", description: "Gunakan Preset Bot buat Alight Montion Mu"},                        
        {title: `🎧 ${pmenus} Audio Anime`, rowId: ".m15 audioanime", description: "Kamu Wibu ya Bang"},             
        {title: `🎧 ${pmenus} Audio`, rowId: ".m15 audio", description: "Ubah Audio dengan Filter"},
        {title: `🎧 ${pmenus} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `🏢 ${pmenus} Group`, rowId: ".m15 group", description: "Only Groups"},
        {title: `👑 ${pmenus} Admin`, rowId: ".m15 admin", description: "Only Admin Group"},
        {title: `🗂️ ${pmenus} Database`, rowId: ".m15 database", description: "Simpan sesuatu diBOT"},
        {title: `🛠️ ${pmenus} Tools`, rowId: ".m15 tools", description: "Mungkin tools ini bisa membantu?"},         
        {title: `ℹ️ ${pmenus} Info`, rowId: ".m15 info", description: "Info info BOT"},
        {title: `👩‍💻 ${pmenus} Owner`, rowId: ".m15 owner", description: "Owner Only!"},
        {title: `❓ ${pmenus} No Category`, rowId: ".m15 nocategory", description: "Fitur tanpa kategory!"},
        ]
        },
]
let psan = `_Note: Jangan Spam Jika Ingin Yae Tetap Aktif_`
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣
┃                *USER INFORMATION CARD*            
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣
┃                   *List Menu ${namebot}*                      
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣
┣━━━━━━━▣「 *informasi Anda* 」▣━━━━━━▣
┃➔ *naмe :* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┃➔ *ѕтaтυѕ :* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┃➔ *ѕтaтυѕ preм :* ${usrs.premiumTime > 1 ? '✓ sudah': '✘ Belum'}
┃➔ *rank :* ${usrs.role}
┃➔ *lιмιт :* ${usrs.limit}
┃➔ *level :* ${usrs.limit}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣

┏━━━━━━━━━━━━▣
┣ *total fitur :* 2500+
┗━━━━━━━━━━━━▣`
let hariRayaramadan = new Date('April 21, 2023 23:59:59') 
     let sekarangg = new Date().getTime() 
     let lebih = hariRayaramadan - sekarangg 
     let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     let detikk = Math.floor( lebih % (1000 * 60) / 1000) 
let tett = `
┏━━━━━━━━━━━▣ *tanggal* ▣━━━━━━━━━━▣ 
┃➔ *WAKTU UP :* ${mpt}
┃➔ *WAKTU :*  ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━▣
`
let fot = `XyzallTeam

${global.botdate}
`
const listMessage = {
text: tett,
footer: fot,
mentions: await conn.parseMention(tek),
title: tek,
buttonText: `KLIK DISINI`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
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

		let url = 'https://telegra.ph/file/61807e8b6481eea44e234.jpg'
        conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*')

let audio = `./mp3/kane.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: fs.readFileSync("./thumbnail.jpg"),
    sourceUrl: syt
 	}
     }
    })
		await conn.send3TemplateButtonImg(m.chat, url, text, wm, 'Rules🌸', '.rules', 'Owner📱', '.owner', 'Kᴇᴍʙᴀʟɪ Kᴇ AWᴀʟ🌺', '.menu', m)

	} catch (e) {
		conn.reply(m.chat, "Maaf, menu sedang error", m)
				throw e
	}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m15)$/i

handler.register = false

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
res = "Pagi Kak 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}
