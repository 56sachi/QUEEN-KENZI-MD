const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"EJkJcl4Wigd67jJz6bouKFhcZwkXPx5Uf/PsVRDHZV8="},"public":{"type":"Buffer","data":"XtkVgg5+35FK65fVoaCekKm0l0tRmRNK2+MpKfsOqxU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uNR0rf4wapvUktZf6AqMvcMLcvU1toujWN7K5JgSl3Y="},"public":{"type":"Buffer","data":"l+0yxhqXmGFuF64H7bTtWkA3lI0xzPC/GiI26aimkGM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WCgkxeguAMUNzsSraOHZtzQQmYB0fS/2TJAbUl3DZnI="},"public":{"type":"Buffer","data":"aaG19bO84jl4R9C9XP8CwWsjo0eESAqkxJwNC/7Stng="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8ClpA8noMuKVMUgKfiE7Kl0sE8wTaOm/ra6zQWKdO00="},"public":{"type":"Buffer","data":"dfhD6p6/FDKZ/tv5QK633BTvxZECpe5YlgIJN+LYqwg="}},"signature":{"type":"Buffer","data":"PccjoisLHy5jyA8WJTvgsTqqXD5We7BUURuWn5C2BiaP/SeocwpWfYiyLmOs9iKbkNsnc/3TFaskxVMjqrcOiQ=="},"keyId":1},"registrationId":226,"advSecretKey":"yMFwaK20UKxIH1Rg1pZ/0x0X+03GpxFIeEn16xEbbWo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"jC56357yTb2VFINBiqdJmA","phoneId":"e7b88c11-cc43-43ba-8909-1fc533a984d2","identityId":{"type":"Buffer","data":"pfC+Yym+AnnR1oOagg15zG2izN0="},"registered":true,"backupToken":{"type":"Buffer","data":"gnMO54bRz/8zDuXVKAzGpAjDYuY="},"registration":{},"pairingCode":"J65ERP22","me":{"id":"94775049552:18@s.whatsapp.net"},"account":{"details":"CNq1s4YDENjYlbgGGAIgACgA","accountSignatureKey":"IgkMDIhrdXnXSkaIyluq6YpYkHcGh8Voo6HJIH2bsSw=","accountSignature":"sx+fHlgoqOT7C1FBCQaV+fVAvfC0hNd1/VCiEYyEzuDXQG0+rczLLtymzIX1dfQjbIA4BOu3NhxGdkz19ejcBQ==","deviceSignature":"D7ktIgekj4nNkascNE/mLYoYSLg9VIi6WC4TKgeZpn5WNdhokm21fFDPy7nwA98k1/t6mXuVJmt2YwbmoJCrhA=="},"signalIdentities":[{"identifier":{"name":"94775049552:18@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSIJDAyIa3V510pGiMpbqumKWJB3BofFaKOhySB9m7Es"}}],"platform":"android","lastAccountSyncTimestamp":1728408680}", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/08ce20a843b7650a296e7.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©DΛЯK ПΣӨП ᑕYBΣЯZ ``| 2024🤍*",
AUTO_VOICE : process.env.AUTO_VOICE || "true",
READ_CMD: process.env.READ_CMD || "false",
MODE : process.env.MODE || "public",
AUTO_BIO : process.env.AUTO_BIO || "true",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
