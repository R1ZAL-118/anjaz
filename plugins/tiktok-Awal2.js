/*import fetch from 'node-fetch'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    
                    let tiktok = 'https://telegra.ph/file/e74cd2772f3fc7cd7babc.jpg'
let anu2 = `    Amelia-MD

Silahkan Pilih,Dengan Cara Klik Tombol Dibawah Ini\n\n\nLink Esceh:https://youtube.com/@Putra_Modz_`
  conn.send3ButtonImg(m.chat, await(await fetch(tiktok)).buffer(), anu2, botdate, 'Video1🖥️', `${usedPrefix}tiktok2 ${(args[0])}`, 'Video2💻', `${usedPrefix}ttkcaliphdev2 ${(args[0])}`, 'AUDIO🏵', `${usedPrefix}tiktokaudio ${(args[0])}`,)
 conn.reply(m.chat, `${wait}`, m)
}
handler.help = ['tiktokv2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokv2)$/i
handler.group = false
handler.register = false
handler.limit = true

handler.fail = null

export default handler*/

// BY PUTRAMODZ
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
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
let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
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
let putra = `                                  *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                            ████████▀▀▀████
                            ████████────▀██
                            ████████──█▄──█
                            ███▀▀▀██──█████
                            █▀──▄▄██──█████
                            █──█████──█████
                            █▄──▀▀▀──▄█████
                            ███▄▄▄▄▄███████
  ────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
Silahkan Pilih,Dengan Cara Klik Tombol Dibawah Ini\n\n\nFollow my Gituhub : ${sgh}

╳ ── ◸ *Follow Lah* ◹ ── ╳
  ◉ ${sig}
  ◉ ${sigpcr}
  ◉ My Yt : PutraModz
  ╳ ── ◸ *Join My Group* ◹ ── ╳
  ◉ Join Groups AmeliaMD\n\n\nJoin My groups : https://chat.whatsapp.com/FR1KfE3OTcQCayiabos8Ff`
let amelia = `*『 🤖 AᴍᴇʟɪᴀMᴅ 🤖 』*`
await conn.send3ButtonVid(m.chat, 'https://telegra.ph/file/c39640a8559f0b9455e6a.mp4', putra, amelia, 'Video1🖥️', `${usedPrefix}tiktok2 ${(args[0])}`, 'Video2💻', `${usedPrefix}ttkcaliphdev2 ${(args[0])}`, 'AUDIO🏵', `${usedPrefix}tiktokaudio ${(args[0])}`, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/l4c1f2r',
    mediaType: 2, 
    description: sgc,
    title: '🌸 A M E L I A B O T Z M U L T I D E V I C E 🌸',
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: syt
}}
  })
await conn.reply(m.chat, `${wait}`, m)
}   
handler.help = ['tiktokv2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokv2)$/i
handler.group = false
handler.register = false
handler.limit = true

handler.fail = null

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