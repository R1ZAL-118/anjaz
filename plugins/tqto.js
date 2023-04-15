import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*Terimakasih Banyak untuk*
    
 Terimakasih Teruntuk:
×፝֟͜× @${'6285768097041'.split('@')[0]}(Owner)

Terimakasih untuk diri saya sendiri :
×፝֟͜× https://youtube.com/@xyzalbotz (LinkYT)

┃━━━━━━━━━━━━━━━━━━━━━━━❏
┃×፝ Tuhan yang maha esa 
┃×፝ parent
┃×፝ Rizall ( Me )
┃×፝ ${await conn.getName(m.sender)} ( You )
┃×፝ XyzalBotz team
┃×፝ Orang-orang yang Berdonasi
━━━━━━━━━━━━━━━━━━━━━━━━❏`
  let buttonMessage= {
'document':{'url':'https://youtu.be/0EquzVzq3qY'},
'mimetype':global.ddocx,
'fileName':'Rizalzbot',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/0EquzVzq3qY',
'mediaType':2,
'previewType':'pdf',
'title':`Rizalzbotz: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`By Rizall`,
'thumbnail':await(await fetch('https://telegra.ph/file/36e49108d31a7f6937812.jpg')).buffer(),
'sourceUrl':'https://youtu.be/0EquzVzq3qY'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Buat Loe Semua Ngen-

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':' MENU '},'type':1},
{'buttonId':'Hai','buttonText':{'displayText':'ALLOO'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}