import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
let usrs = db.data.users[m.sender]
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender] 
let { min, xp, max } = xpRange(level, global.multiplier)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform() 
let mode = global.opts['self'] ? 'Private' : 'Publik'
//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
//==============> Menu nya
let putra = `ʜᴜᴋᴜᴍ ᴛɪᴅᴀᴋʟᴀʜ ᴍᴇʟɪɴᴅᴜɴɢɪ ᴏʀᴀɴɢ-ᴏʀᴀɴɢ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ʟᴀʜ ʏᴀɴɢ ᴍᴇʟɪɴᴅᴜɴɢɪ ʜᴜᴋᴜᴍ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴇʟᴀʟᴜ ᴍᴇᴍʙᴇɴᴄɪ ᴋᴇᴊᴀʜᴀᴛᴀɴ ᴅᴀɴ ꜱᴇʟᴀʟᴜ ᴍᴇɴᴄᴀʀɪ ʜɪᴅᴜᴘ ꜱᴇʟᴀʏᴀᴋɴʏᴀ. ʜᴜᴋᴜᴍ ᴀᴅᴀʟᴀʜ ᴘᴇʀᴋᴜᴍᴘᴜʟᴀɴ ᴅᴀʀɪ ᴘᴇʀᴀꜱᴀᴀɴ ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ɪᴛᴜ. ɪᴛᴜ ʙᴜᴋᴀɴʟᴀʜ ᴘᴇɴɢᴀᴡᴀꜱᴀɴ ᴍᴀᴜᴘᴜɴ ꜱɪꜱᴛᴇᴍ. ɪᴛᴜ ᴀᴅᴀʟᴀʜ ᴘᴇʀᴀꜱᴀᴀɴ ʏᴀɴɢ ʟᴇᴍᴀʜ ᴅᴀɴ ᴛᴀᴋ ᴛᴇʀɢᴀɴᴛɪᴋᴀɴ ʏᴀɴɢ ꜱᴇᴍᴜᴀ ᴏʀᴀɴɢ ᴍɪʟɪᴋɪ ᴅᴀʟᴀᴍ ʜᴀᴛɪ ᴍᴇʀᴇᴋᴀ. ᴅɪʙᴀɴᴅɪɴɢᴋᴀɴ ᴅᴇɴɢᴀɴ ᴀᴍᴀʀᴀʜ ᴅᴀɴ ᴋᴇʙᴇɴᴄɪᴀɴ ɪᴛᴜ ᴀᴅᴀʟᴀʜ ꜱᴇꜱᴜᴀᴛᴜ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀɴɢᴀᴛ ᴍᴜᴅᴀʜ ʜᴀɴᴄᴜʀ. ꜱᴇᴘᴀɴᴊᴀɴɢ ᴡᴀᴋᴛᴜ, ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ʙᴇʀᴅᴏᴀ ᴜɴᴛᴜᴋ ᴅᴜɴɪᴀ ʏᴀɴɢ ʟᴇʙɪʜ ʙᴀɪᴋ. ᴀɢᴀʀ ᴅᴏᴀ-ᴅᴏᴀ ɪᴛᴜ ᴛᴇʀᴜꜱ ᴍᴇᴍᴘᴜɴʏᴀɪ ᴍᴀᴋɴᴀ, ᴍᴀᴋᴀ ᴋɪᴛᴀ ʜᴀʀᴜꜱ ʙᴇʀᴜꜱᴀʜᴀ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇʟɪɴᴅᴜɴɢɪɴʏᴀ ʜɪɴɢɢᴀ ᴀᴋʜɪʀ. ʙᴇʀᴊᴜᴀɴɢᴀɴʟᴀʜ!!! -ᴛꜱᴜɴᴇᴍᴏʀɪ ᴀᴋᴀɴᴇ (ᴘꜱʏᴄʜᴏ-ᴘᴀꜱꜱ)\n\n${tag}`
let amelia = `*『 🤖 AᴍᴇʟɪᴀMᴅ 🤖 』*`
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/71f156ce72a7a12b38407.jpg`, putra, amelia, '🌸Aʟʟ Mᴇɴᴜ🌸', '.? all', '🌺Lɪsᴛ Mᴇɴᴜ🌺', '.tesm', '🏵️Menu🏵️', '.menu3', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/l4c1f2r',
    mediaType: 2, 
    description: sgc,
    title: '🌸 A M E L I A B O T Z M U L T I D E V I C E 🌸',
    body: bottime,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sig
}}
  })
}   
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu2)$/i
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
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
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

/*import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
let usrs = db.data.users[m.sender]
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender] 
let { min, xp, max } = xpRange(level, global.multiplier)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform() 
let mode = global.opts['self'] ? 'Private' : 'Publik'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ameliamd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
//==============> Menu nya
let putra = `
╳ ── ◸ *AMELIA MD* ◹ ── ╳
 ⫹⫺  Hallo : ${tag}
 ⫹⫺  Name : ${name}
 ⫹⫺  limit : ${limit}
 ⫹⫺  Role : ${role}
 ⫹⫺  User : ${prems}
 ⫹⫺  Date : ${date}
 ⫹⫺  Pacar Bot : ${global.nameown1}
 ⫹⫺  Sifat : Nothing
 ⫹⫺  Tanggal : ${week} ${weton}
╳ ── ◸ *AMELIA MD* ◹ ── ╳
➥ Warning
  ◉ Run : Hp Xiomi
  ◉ Mode : ${mode}
  ◉ Note : Jangan Spam Botz 
  ◉ Warning : No Call Botz
  ◉ Sanksinya : Banned Permanen
╳ ── ◸ *Follow Lah* ◹ ── ╳
  ◉ ${sig}
  ◉ ${sigpcr}
  ◉ My Yt : PutraModz`
let amelia = `*『 🤖 AᴍᴇʟɪᴀMᴅ 🤖 』*`
// Menu nyaa 
let sound17 = "sound17"
let sound18 = "sound18"
let sound19 = "sound19"
let sound20 = "sound20"
let sound21 = "sound21"
let sound22 = "sound22"
let sound23 = "sound23"
let sound24 = "sound24"
let sound25 = "sound25"
let sound26 = "sound26"
let sound27 = "sound27"
let sound28 = "sound28"
let sound29 = "sound29"
let sound30 = "sound30"
let sound31 = "sound31"
let sound32 = "sound32"
let snd = `${pickRandom([sound17,sound18,sound19,sound20,sound21,sound22,sound23,sound24,sound25,sound26,sound27,sound28,sound29,sound30,sound31,sound32])}`
let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "JANGAN DI SPAM",
    body: bottime,
    thumbnail: await (await fetch(ameliamd)).buffer(),
    sourceUrl: syt
 	}
     }
    })
await conn.send3ButtonVid(m.chat, `${global.putra}`, putra, amelia, '🌸Aʟʟ Mᴇɴᴜ🌸', '.all3', '🌺Lɪsᴛ Mᴇɴᴜ🌺', '.tesm', '\n🏵️Owner Bot Ganteng🏵️', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/l4c1f2r',
    mediaType: 2, 
    description: sgc,
    title: '🌸 A M E L I A B O T Z M U L T I D E V I C E 🌸',
    body: bottime,
    thumbnail: await(await fetch(ameliamd)).buffer(),
    sourceUrl: syt
}}
  })
}   
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|co)$/i
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
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
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
}*/