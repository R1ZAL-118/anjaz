import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*SILAHKAN MASUKAN USERNAME YG INGIN DI AMBIL PP NYA*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${global.lolkey}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['tiktokfoto'].map(v => v + ' <user>')
handler.tags = ['downloader']
handler.command = /^(p((rofilet(iktok|t)|pt(iktok|t))|ptik)|t(ik(tokp(rofile|p)|pp)|tp(rofile|p)))$/i
export default handler
