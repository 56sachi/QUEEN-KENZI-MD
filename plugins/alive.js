const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============ping=======
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})

//===========menu========
cmd({
    pattern: "menu",
    react: "📃",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let tex = `
> *👋. *HEY* *FREIND* ジ,

> ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ ⚡ *(ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ)* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ.🌐*

🦄 ∆ ◦ _*ɴᴀᴍᴇ ʙᴏᴛ*_ : 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍
🦄 ∆ ◦ _*ᴄʀᴇᴀᴛᴏʀ*_ : *DanuXzz* ジ 🤍
🦄 ∆ ◦ _*ᴠᴇʀsɪᴏɴs*_ : 1.0.0 ( *ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs* )🤍
🦄 ∆ ◦ _*ᴛʏᴘᴇ sᴄʀɪᴘᴛ*_ : *ᴘʟᴜɢɪɴs* 🤍
🦄 ∆ ◦ _*ᴊᴏɪɴ ᴍʏ ɢʀᴏᴜᴘ*_ :  ~https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34~  🤍
🦄 ∆ ◦ _*ᴄᴏɴᴛᴀᴄᴛ*_ : ~https://wa.me/94740460412~ 🤍

> *ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*

___ { ➖ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ➖ 📶  }
_____________________________
_____________________________
||
> | • .𝙵𝙱 / 𝚞𝚛𝚕 >>⛓‍💥

> | • .𝙰𝙿𝙺 >> 📂

> | • .𝙸𝙶 / 𝚞𝚛𝚕 >> ⛓‍💥

> | • .𝚅𝙸𝙳𝙴𝙾 / 𝚀𝚞𝚎𝚛𝚢 >> 📽️

> | • .𝚃𝙸𝙺𝚃𝙾𝙺 / 𝚞𝚛𝚕 >> ⛓‍💥

> | • .𝙼𝙴𝙳𝙸𝙰 𝙵𝙸𝚁𝙴 / 𝚞𝚛𝚕 >>🔧

> | • .𝚂𝙾𝙽𝙶 >> 🎧

> | • .𝚈𝚃𝚂 >> 🛟
|___

 *____ {  𝐀𝐈 🧨 }*
_____________________________
_____________________________
||
~|___𝙰𝙸 / 𝚃𝙴𝚇𝚃  >>~

  *___ {  𝐎𝐖𝐍𝐄𝐑 🧑🏿‍🔧  }*
_____________________________
_____________________________
 ||
> | • .𝙱𝙰𝙽𝙲𝙷𝙰𝚃 >> 🎛️

> | • .𝙱𝙰𝙽 @ 𝚄𝚂𝙴𝚁 >> ⚠️
 
> | • .𝚄𝙽𝙱𝙰𝙽𝙳 >>  ✅

> | • .𝙱𝙻𝙾𝙲𝙺 >> 🚫

> | • .𝚄𝙽𝙱𝙻𝙾𝙲𝙺 >> ♻️

> | • .𝚂𝙴𝚃𝙿𝙿 ×𝚁𝙴𝙿𝙻𝚈 𝚆𝙸𝚃𝙷 𝙿𝙾𝙷𝙾𝚃𝙾>> 📷                                         

  *___{   𝐆𝐑𝐎𝐔𝐏 🕵🏾‍♂️👮🏾‍♂️  }*
_____________________________
_____________________________
 ||
 *|* ~𝙳𝙴𝙻𝙴𝚃𝙴  × 𝚁𝙴𝙿𝙻𝚈 𝚃𝙾 𝚃𝙷𝙴 𝙼𝚂𝙶 𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝙳𝙴𝙻  >>  ⛑️~ 

> | • .𝚂𝙴𝚃𝙳𝙴𝚂𝙲 / 𝚃𝙴𝚇𝚃 >> 📝

> | • .𝙳𝙴𝙼𝙾𝚃𝙴 >>  🎐

> | • .𝙷𝙸𝙳𝙴𝚃𝙰𝙶 >>  🛏️

> | • . 𝙸𝙽𝚅𝙸𝚃𝙴 >> 🧧

> | • . 𝙺𝙸𝙺 >> ❌
*|____*

 *____ {  𝐈𝐍𝐅𝐎  🧄🥒  }* 
_____________________________
_____________________________
||
> | • .𝙼𝙴𝙽𝚄 >> 📜

> | • .𝙿𝙸𝙽𝙶 >> 📟

> | • .𝚂𝚈𝚂𝚃𝙴𝙼 >> 🛡️

> | • .𝙰𝙻𝙸𝚅𝙴 >> 👋🏿
*|___*

*___ {  𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 👨🏾‍💻 }*
_____________________________
_____________________________
||
> | • .𝚃𝙾𝙼𝙿3 >> 🪩

> | • .𝚃𝙾𝚄𝚁𝙻 >> 🧲

> | • .𝚂𝚃𝙸𝙲𝙺𝙴𝚁 >> 🗽

*°⏰ [  𝗕𝗬  © Ｄａｒｋ < | | > Ｎｅｏｎ Ｃｙｂｅｒｚ ヤ • 🎉 ]*
`


return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
