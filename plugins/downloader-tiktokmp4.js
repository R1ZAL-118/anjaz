// BY ZYKO MD
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa2
if (!args[0]) throw 'Masukkan Link'
let f = await fetch(`https://kyyrest.diki6969.repl.co/api/dowloader/tikok?url=${args[0]}&apikey=e8e8bade`)
m.reply(md)
let x = await f.json()
let cap = `username: ${x.result.username}
description: ${x.result.description}

${wm}`
await conn.sendButton(m.chat, `*DOWNLOADER TIKTOK*
`, cap, `${imgr + 'TIKTOK'}`, [
                ['Get Watermark', `${usedPrefix}get ${x.result.video_watermark}`],
                ['Get NoWatermark', `${usedPrefix}get ${x.result.video}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
     ], fkontak)
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok|tiktokdl|dltiktok|dltt|ttdl)$/i
export default handler

