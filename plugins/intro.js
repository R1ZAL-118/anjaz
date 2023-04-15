import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let Poto = fs.readFileSync('./media/menu.jpg')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
Nama lengkap:
Nama panggilan:
Hobi:
Umur:
Gender:
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
let weem = `☣️ *Note:* jangan pernah menelepon atau spam bot!!`
conn.send2ButtonImg(m.chat, Poto, krtu, weem, 'Menu', '.menu', 'List Menu', '.tesm', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/l4c1f2r',
    mediaType: 2, 
    description: sgc,
    title: 'official group',
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: sig
}}
  }) // Tambah sendiri kalo mau
}   
handler.command = /^(intro)$/i

export default handler

