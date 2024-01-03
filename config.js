const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	yosh: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.lolhuman.xyz': 'YoshCasaster',
}

// Other
global.owner = ['6281935593316']
global.premium = ['6283186441039', '6282247208730']
global.packname = 'Yosep WD'
global.author = 'Sticker Yosep WD'
global.sessionName = 'YosepWD'
global.prefa = ['','!','.','🐦','🐤','🗿']

/*============== PAYMENT ==============*/
global.adana = '6288980818668'
global.agopay = '6288980818668'
global.aovo = '6288980818668'
global.uptotelegra = 'uptotelegra'
/*============== MESS ==============*/
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '┏━ 『*⚠️WARNING⚠️*』━⬤\n┃◈ 😜Kamu Bukan User Premium\n┃◈ 🧐Kamu Bukan Warga USM\n┃◈ 🎁Beli 15K/Bulan\n┃◈ 🔖Diskon awal 5K\n┃◈ ✅+6281935593316\n┗━━━━━⬤\n*_Jika kamu warga USM / Mau Sewa_\n**Ketik* .daftar',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*⏳ Sedang Di Proses !*\n📌 INFO UDPATE & MAINTENANCE\nhttps://whatsapp.com/channel/0029VaIZqLT3GJOqN5NQ0B2Y',
    endLimit: '┏━ 『*⚠️WARNING⚠️*』━⬤\n┃◈ 😜Kamu Bukan User Premium\n┃◈ 🧐Kamu Bukan Warga USM\n┃◈ 🎁Sewa 15K/Bulan\n┃◈ 🔖Diskon awal 5K\n┃◈ ✅+6281935593316\n┗━━━━━⬤\n*_Jika kamu warga USM / Mau Sewa _\n**Ketik* .daftar',
}
global.limitawal = {
    premium: "Infinity",
    free: "5"
}
/*============== THUMB ==============*/

global.thumb = fs.readFileSync("./img/Lvy Kotak.png")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
