import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Pastikan Gambarnya Tidak Burik')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.ibeng.tech/api/maker/anime?img=${url}&apikey=tamvan`)).buffer()
await conn.sendButton(m.chat, `ANJAY ${name} WIBU`, 'ʟᴀʀɪ ᴀᴅᴀ ᴡɪʙᴜ', hasil, [['Menu', '.menu'],['Donasi', '.donasi']], m)
}
handler.help = ['jadianime2']
handler.tags = ['anime']
handler.command = /^(jadianime2)$/i
handler.limit = 3
export default handler

