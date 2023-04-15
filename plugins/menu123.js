import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
┏━━━━━═[ INFO USER ]═━━━━━✦
┃┏━━━━━━━━━━━━━━━━━━▣
┃┃☂︎ *NAME:* %name
┃┃☂︎ *TAG:* %tag
┃┃☂︎ *PREMIUM:* %prems
┃┃☂︎ *LIMIT:* %limit
┃┃☂︎ *MONEY:* %money
┃┃☂︎ *ROLE:* %role
┃┃☂︎ *LEVEL:* %level [ %xp4levelup Xp For Levelup]
┃┃☂︎ *XP:* %exp / %maxexp
┃┃☂︎ *TOTAL XP:* %totalexp
┃┗━━━━━━━━━━━━━━━━━━▣
┣━━━━━═[ TODAY ]═━━━━━✦
┃┏━━━━━━━━━━━━━━━━━━▣
┃┃    *${ucapan()} %name!*
┃┃☂︎ *TANGGAL:* %week %weton
┃┃☂︎ *DATE:* %date
┃┃☂︎ *TANGGAL Islam:* %dateIslamic
┃┃☂︎ *WAKTU:* %time
┃┗━━━━━━━━━━━━━━━━━━▣
┣━━━━━═[ INFO BOT ]═━━━━━✦
┃┏━━━━━━━━━━━━━━━━━━▣
┃┃☂︎ *NAMA BOT:* %me
┃┃☂︎ *MODE:* %mode
┃┃☂︎ *PREFIX:* [ *%_p* ]
┃┃☂︎ *BAILEYS:* Multi Device
┃┃☂︎ *BATTERY:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
┃┃☂︎ *PLATFORM:* %platform
┃┃☂︎ *TYPE:* Node.Js
┃┃☂︎ *UPTIME:* %muptime
┃┃☂︎ *DATABASE:* %rtotalreg dari %totalreg
┃┗━━━━━━━━━━━━━━━━━━▣
┗━━━━━━━━━━━━━━━━━━━━━▣
▣━━━═[ *INFO CMD* ]═━━━━▣
┃ *Ⓟ* = Premium
┃ *Ⓛ* = Limit
▣━━━━━━━━━━━━━━━━━━━▣
%readmore
`.trimStart(),
  header: '━━━━━━━━━━═[ %category ]═━━━━━━━━━━',
  body: `${emot} %cmd %isPremium %islimit`,
  footer: '▣━━━━━━━━━━━▣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, usedPrefix, command}) => {
  let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let ameliamd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let tags
	let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg','kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet','anonymous', 'nulis', 'downloader', 'tools', 'fun', 'jadian', 'database','quran', 'vote','vidiorandom', 'catatan', 'absen', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'sound2004', 'owner', 'nocategory', 'openaimenu']
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
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
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
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)

let usrs = db.data.users[m.sender]
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
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
            {title: `💬 ${pmenus} Menfess Balas`, rowId: ".m13 menbalas", description: "Menampilkan Semua command BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
            {title: `💬 ${pmenus} All`, rowId: ".t all", description: "Menampilkan Semua command BOT"},
        {title: `🌱 ${pmenus} Rpg`, rowId: ".m13 rpg", description: "Game Epic Rpg!"},
        {title: `✨ ${pmenus} Exp`, rowId: ".m13 xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `🎮 ${pmenus} Game`, rowId: ".m13 game", description: "Gamenya seru seru lho >-<"},
        {title: `🧩 ${pmenus} Fun`, rowId: ".m13 fun", description: "Fitur yang aman untuk keluarga"},
        {title: `🐚 ${pmenus} Kerang`, rowId: ".m13 kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `📑 ${pmenus} Quotes`, rowId: ".m13 quotes", description: "Random Inspirasi"},        
         {title: `🙎‍♀️ ${pmenus} Asupan`, rowId: ".m13 asupan", description: "Menampilkan Asupan DiBot"},        
        {title: `⛩️ ${pmenus} Anime`, rowId: ".m13 anime", description: "Kamu wibu ya bang?"},
        {title: `🔞 ${pmenus} Nsfw`, rowId: ".m13 nsfw", description: "Tch, dasar sagne"},
        {title: `🌟 ${pmenus} Premium`, rowId: ".m13 premium", description: "Only premium Users"},
        {title: `🎭 ${pmenus} Anonymous Chats`, rowId: ".m13 anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `📖 ${pmenus} Al-Quran`, rowId: ".m13 quran", description: "Tobat yuk kak"},
        {title: `🌎 ${pmenus} Internet`, rowId: ".m13 internet", description: "Cari sesuatu diBOT"},
        {title: `🌎 ${pmenus} Berita`, rowId: ".m13 berita", description: "Cari berita terupdate"},
        {title: `📩 ${pmenus} Downloaders`, rowId: ".m13 downloader", description: "Download sesuatu diBOT"},
        {title: `🎨 ${pmenus} Stikers`, rowId: ".m13 stiker", description: "Buat Sticker diBOT"},
        {title: `🎨 ${pmenus} Logo`, rowId: ".m13 logo", description: "Buat Logo Kamu diBOT"},
        {title: `✏️ ${pmenus} Nulis`, rowId: ".m13 nulis", description: "Nulis kok males kak?"},
        {title: `📝 ${pmenus} Buat Catatan`, rowId: ".m13 catatan", description: "Buat Catatan Kamu di Bot"},
        {title: `🎧 ${pmenus} Preset Alight Montion/Apk`, rowId: ".presetmenu", description: "Gunakan Preset Bot buat Alight Montion Mu"},                        
        {title: `🎧 ${pmenus} Audio Anime`, rowId: ".m13 audioanime", description: "Kamu Wibu ya Bang"},             
        {title: `🎧 ${pmenus} Audio`, rowId: ".m13 audio", description: "Ubah Audio dengan Filter"},
        {title: `🎧 ${pmenus} Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `🏢 ${pmenus} Group`, rowId: ".m13 group", description: "Only Groups"},
        {title: `👑 ${pmenus} Admin`, rowId: ".m13 admin", description: "Only Admin Group"},
        {title: `🗂️ ${pmenus} Database`, rowId: ".m13 database", description: "Simpan sesuatu diBOT"},
        {title: `🛠️ ${pmenus} Tools`, rowId: ".m13 tools", description: "Mungkin tools ini bisa membantu?"},         
        {title: `ℹ️ ${pmenus} Info`, rowId: ".m13 info", description: "Info info BOT"},
        {title: `👩‍💻 ${pmenus} Owner`, rowId: ".m13 owner", description: "Owner Only!"},
        {title: `❓ ${pmenus} No Category`, rowId: ".m13 nocategory", description: "Fitur tanpa kategory!"},
        ]
        },
]
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
┃➔ *TGL ISLAM :* ${dateIslamic}
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
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
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
  
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg'])
    
    let putra = `${pickRandom(['https://telegra.ph/file/87cf68d8563f6c2aa26dc.mp4', 'ttps://telegra.ph/file/1b5437990def42a8dae97.mp4', 'https://telegra.ph/file/c586edc8cf9ca5da639eb.mp4', 'https://telegra.ph/file/c39640a8559f0b9455e6a.mp4', 'https://telegra.ph/file/7e744334e7bfd7e685c65.mp4', 'https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4', 'https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4'])}`
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2023,

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

    itemCount : 2023,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol)     
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
    // Thanks Rlxfly https://github.com/Rlxfly
    //------- MENU LOCATION
    const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 34.672314,
  degreesLongitude: 135.484802,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: text.trim(),
  sequenceNumber: 774236889,
  timeOffset: 8600,
  jpegThumbnail: await(await fetch(thumb)).buffer(),
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m
					})

//-------DOC TEMPLATE
    const message = { 
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(urls)).buffer(),
            fileName: wm,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text.trim(),
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/Lucife-Putra/'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Instagram',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner🎐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed⚡',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi💵',
                        id: '.donasi'
                    }
                },
            ]
        } 
        
//------------------< MENU >----------------
let sound1 = "sound1"
let sound2 = "sound2"
let sound3 = "sound3"
let sound4 = "sound4"
let sound5 = "sound5"
let sound6 = "sound6"
let sound7 = "sound7"
let sound8 = "sound8"
let sound9 = "sound9"
let sound10 = "sound10"
let sound11 = "sound11"
let sound12 = "sound12"
let sound13 = "sound13"
let sound14 = "sound14"
let sound15 = "sound15"
let sound16 = "sound16"
let snd = `${pickRandom([sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9,sound10,sound11,sound12,sound13,sound14,sound15,sound16])}`
let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: await (await fetch(ameliamd)).buffer(),
    sourceUrl: syt
 	}
     }
    })
    // MAU YANG NO ENC AMELIAMD 20K AJA , MINAT PC GW wa.me/6283863727401

    // minus info-tqto.js dan info-script.js tetep di enc, karena banyak yang menghapus credit + script
    // kalau masih kekeh semua no enc 25k aja om:v
    
await conn.send3ButtonVid(m.chat, putra, `${ucapan()}`, text.trim() + `\nᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ ${nameown}\n` + botdate, '🌼Menu', '.menu', '💌Owner', '.owner', '🌹Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/xyzalll.18',
    mediaType: 2, 
    description: sgc,
    title: "Follow Lah Cᴜʏ!!!",
    body: wm,
    thumbnail: await(await fetch(ameliamd)).buffer(),
    sourceUrl: sig,
     }}
  })
//
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['listmenu', 'menulist']

handler.command = /^(tesm)$/i

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
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
