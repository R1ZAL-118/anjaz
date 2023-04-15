//By PutraModz Credits Jangaj di Hapus ath 😅

import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let yt = 'https://youtube.com/@Putra_Modz_'
         let caption = `*Mʏ Yt Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${yt}`,
               title: 'My Yt Official', 
               body: 'Amelia Md',
               thumbnail: pp
             } 
         }})
         }

handler.command = ['putra']

handler.admin = false
handler.group = false

 export default handler