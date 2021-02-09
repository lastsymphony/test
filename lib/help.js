const fs = require('fs-extra')

const helpcmd = (prefix, cts, pendaftar) => {
    return `
╔════════════════════════
╠═══✪〘 INFO 〙✪════════
║❖ Owner : Deni Ambrose
║❖ WA    : wa.me/6285747852482
║❖ Name  : DABOT
║❖ IG    : https://instagram.com/deniambrose_
║❖ Bias  : Dahyun💛
╚════════════════════════
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔══✪〘 MENU 〙✪═════════
║❖ ${prefix}ownermenu
║❖ ${prefix}premiummenu
║❖ ${prefix}grupmenu
║❖ ${prefix}islamimenu
║❖ ${prefix}dewasamenu
║❖ ${prefix}funmenu
║❖ ${prefix}makermenu
║❖ ${prefix}animemenu
║❖ ${prefix}kerangmenu
║❖ ${prefix}downloadmenu
║❖ ${prefix}searchmenu
╚═════════════════════════
╔═══✪〘 OTHER 〙✪════════
║❖ ${prefix}gantiprefix
║❖ ${prefix}daftar /nama/umur
║❖ ${prefix}listblock
║❖ ${prefix}listbanned
║❖ ${prefix}listgrup
║❖ ${prefix}waktubot
║❖ ${prefix}ownerbot
║❖ ${prefix}limit
║❖ ${prefix}matematika
║❖ ${prefix}donasi
║❖ ${prefix}daftarpremium
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════
`
}
exports.helpcmd = helpcmd
const ownercmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 OWNER 〙✪════════
║❖ ${prefix}block <nomor hp>
║❖ ${prefix}unblock <nomor hp><nomor hp>
║❖ ${prefix}addpremium @tag
║❖ ${prefix}delpremium @tag
║❖ ${prefix}ekickall
║❖ ${prefix}gantinama
║❖ ${prefix}gantistatus
║❖ ${prefix}gantiprofil
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.ownercmd = ownercmd
const premiumcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 PREMIUM 〙✪════════
║❖ ${prefix}mute
║❖ ${prefix}unmute
║❖ ${prefix}ban @tag
║❖ ${prefix}kasihlimit @tag <jumlah limit>
║❖ ${prefix}daftarulang @tag <umur>
║❖ ${prefix}kickall
║❖ ${prefix}okeluarkanbot
║❖ ${prefix}ojadiadmin @tag
║❖ ${prefix}ohapusadmin @tag
║❖ ${prefix}odelete <tag chat bot>
║❖ ${prefix}oadd <nomor hp>
║❖ ${prefix}okick @tag
║❖ ${prefix}okickall
║❖ ${prefix}okickall
║❖ ${prefix}otagall
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.premiumcmd = premiumcmd
const dewasacmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 DEWASA 〙✪════════
║❖ ${prefix}bokep
║❖ ${prefix}bugilanime
║❖ ${prefix}bugilanime2
║❖ ${prefix}hentai
║❖ ${prefix}blowjobanime
║❖ ${prefix}ciumananime
║❖ ${prefix}animengewe
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.dewasacmd = dewasacmd
const islamcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 ISLAM 〙✪════════
║❖ ${prefix}quran
║❖ ${prefix}listsurah
║❖ ${prefix}infosurah
║❖ ${prefix}tafsir
║❖ ${prefix}ciumananime
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.islamcmd = islamcmd
const kerangcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 KERANG 〙✪════════
║❖ ${prefix}apakah
║❖ ${prefix}rate
║❖ ${prefix}kapankah
║❖ ${prefix}bisakah
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 FUN 〙✪════════
╠❖ ${prefix}caklontong
╠❖ ${prefix}tebakgambar
╠❖ ${prefix}family100
╠❖ ${prefix}magernulis1 <teks>
╠❖ ${prefix}ramalpasangan <kamu & pasangan>
╠❖ ${prefix}zodiak <zodiak kamu>
╠❖ ${prefix}artinama <nama>
╠❖ ${prefix}nomorhoki
╠❖ ${prefix}artimimpi <mimpi apa>
╠❖ ${prefix}heroml <nama hero>
╠❖ ${prefix}koin
╠❖ ${prefix}dadu
╠❖ ${prefix}cewekcantik
╠❖ ${prefix}anjing
╠❖ ${prefix}kucing
╠❖ ${prefix}quotes
╠❖ ${prefix}katabijak
╠❖ ${prefix}tampar @tagorang
╠❖ ${prefix}colongfoto @tagorang
╠❖ ${prefix}meme
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.funcmd = funcmd
const editorcmd = (prefix) => {
    return `
 ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 MAKER 〙✪════════
║❖ ${prefix}nulis
║❖ ${prefix}sticker
║❖ ${prefix}stickergif
║❖ ${prefix}stickertoimg
║❖ ${prefix}ttp2
║❖ ${prefix}ttg
║❖ ${prefix}tts
║❖ ${prefix}lovemessage
║❖ ${prefix}romance
║❖ ${prefix}party
║❖ ${prefix}silk
║❖ ${prefix}blackpink
║❖ ${prefix}thunder
║❖ ${prefix}pornhub
║❖ ${prefix}glitch
║❖ ${prefix}sandwriting
║❖ ${prefix}tahta
║❖ ${prefix}textmaker
║❖ ${prefix}quotemaker
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.editorcmd = editorcmd
const animecmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 ANIME 〙✪════════
╠❖ ${prefix}loli
╠❖ ${prefix}shota
╠❖ ${prefix}waifu
╠❖ ${prefix}husbu
╠❖ ${prefix}randomhug
╠❖ ${prefix}randomcry
╠❖ ${prefix}randomAnime
╠❖ ${prefix}maluser <nama anime>
╠❖ ${prefix}malanime <nama anime>
╠❖ ${prefix}malcharacter <nama anime>
╠❖ ${prefix}kusonime <nama anime>
╠❖ ${prefix}neonime <nama anime>
╠❖ ${prefix}dewabatch <nama anime>
╠❖ ${prefix}komiku <nama anime>
╠❖ ${prefix}animesearch <nama anime>
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.animecmd = animecmd
const searchcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 SEARCH 〙✪════════
║❖ ${prefix}beritaterbaru
║❖ ${prefix}jadwalbola
║❖ ${prefix}jarakdari kota1|kota2
║❖ ${prefix}kbbi <yang mau dicar>
║❖ ${prefix}wiki <yang mau dicar>
║❖ ${prefix}google <yang mau dicar>
║❖ ${prefix}shopee <yang mau dicar>
║❖ ${prefix}pinterest <yang mau dicari>
║❖ ${prefix}playstore <nama aplikasi>
║❖ ${prefix}googleimage <yang mau dicari>
║❖ ${prefix}brainly <yang mau dicari>
║❖ ${prefix}ytsearch <apa yang mau dicari>
║❖ ${prefix}translate <kodebahasa> <teksnya>
║❖ ${prefix}lirikchord <judul lagu>
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.searchcmd = searchcmd
const downloadcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 DOWNLOAD 〙✪════════
╠❖ ${prefix}ytmp3 <link yt>
╠❖ ${prefix}ytmp4 <link yt>
╠❖ ${prefix}play <judul lagu>
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.downloadcmd = downloadcmd
const grupcmd = (prefix) => {
    return `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 GRUP 〙✪════════
║❖ ${prefix}grupinfo
║❖ ${prefix}add <nomor hp>
║❖ ${prefix}kick @tag
║❖ ${prefix}listadmin
║❖ ${prefix}jadiadmin @tag
║❖ ${prefix}hapusadmin @tag
║❖ ${prefix}tagall
║❖ ${prefix}daftarpremium
║❖ ${prefix}ownergrup
║❖ ${prefix}keluarkanbot
║❖ ${prefix}delete <tag chat bot>
║❖ ${prefix}kickall
║❖ ${prefix}linkgrup
║❖ ${prefix}tariktautan
║❖ ${prefix}grup <open/close>
║❖ ${prefix}dewasafitur <aktif/nonaktif>
║❖ ${prefix}sambutmember <aktif/nonaktif>
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.grupcmd = grupcmd
const makercmd = (prefix) => {
`
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔═══✪〘 MAKER 〙✪════════
║❖ ${prefix}sticker
║❖ ${prefix}stickergif
║❖ ${prefix}stickertoimg
║❖ ${prefix}ttp2
║❖ ${prefix}ttg
║❖ ${prefix}tts
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════`
}
exports.makercmd = makercmd
const readme = (prefix) => {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme
const info = () => {
    return `
╔═══✪〘 INFORMATION 〙✪════════
╠❖ *BOT TYPE : NODEJS V14*
╠❖ *NAME : DABOTDahyun*
╠❖ *VERSION : 3.0**
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan Bot *DABOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sewa = () => {
    return `
╔═══✪〘 DAFTAR PREMIUM 〙✪════════
╠❖ *PEMBAYARAN 10k
╠❖ *DANA : 085747852482*
╠❖ *CHAT OWNER DISERTAI BUKTI TRANSAKSI*
╠❖ *Wa.me/6285747852482
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════
`
}
exports.sewa = sewa
const sumbang = () => {
    return `
╔═══✪〘 DONATE 〙✪════════
╠❖ *DONASI BISA MELALUI*
╠❖ *DANA : 085747852482*
╠❖ *TERIMA KASIH*
╠═════════════════════════
╚═══✪〘 DABOT 〙✪═══════
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
