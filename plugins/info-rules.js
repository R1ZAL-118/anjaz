import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
let esce = `text nya `
let flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
let rules = `➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 _Kebijakan privasi atau Private without being in public_



• *Kebijakan Privasi:*
1. QuartzBot  tidak akan merekam data riwayat chat user.
2. QuartzBot  tidak akan menyebarkan nomor users.
3. QuartzBot  tidak akan menyimpan media yang dikirimkan oleh users.
4. QuartzBot  tidak akan menyalah gunakan data data users.
5. Owner QuartzBot  berhak melihat data riwayat chat users.
6. Owner QuartzBot  berhak melihat status users.
7. Owner QuartzBot  dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan QuartzBot  Agar terhindar dari Suspand_

• *Peraturan QuartzBot :*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. jika ingin membeli scrip bot Whatsapp bisa langsung Hubungi ke no Whatsapp:wa.me/6283863727401
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan QuartzBot :*

1. QuartzBot  akan keluar dari group jika ada salah satu member melanggar peraturan.
2. QuartzBot  dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. QuartzBot  tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. QuartzBot  akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. QuartzBot  bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`
let nth = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://wa.me/6285768097041',
    mediaType: 2, 
    description: sgc,
    title: "Sᴇᴡᴀ Cᴇᴋ Dɪsɪɴɪ Cᴜʏ!!!",
    body: wm,
    thumbnail: fs.readFileSync('./media/qr.png'),
    sourceUrl: 'https://wa.me/message/6285768097041',
     }}
  })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
