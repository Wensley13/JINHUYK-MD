//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "50941094788";
global.owner = process.env.OWNER_NUMBER || "50941094788";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZoTmdzaEowamphL2oxWVczMjlxZkxaTFlabDg1OEJ0N2txZXZTd0huVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEp3NHZnWUJsd1FtSlkxZHA0NHphVDBHSXM1VzRWUEU2dlFEM0o4ZDlRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTFUrUGluUWZXV2NKNXJIeGlHTkZLd1FlQlpjZE52MGtrQ3VRZ2hUQzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4S2NyTXFkd2Nnd0cyS1hOVFpmMWRaTnlYYW8rSlJzQURJT3NhNFVnSEVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MWktpUzl4L3Q2UmtCR0tGNEdKMDc3VjJmVDNObVlmZHpubFNsaXFFM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp3SGJGOU5KaVJYczI2T2x2ZkhUcTBFMnhzN2hPSlBzTzZEc2h5eklxamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT050andpMnhyNXdyYThpT2d3YlEyM1NRRTc1MklwSkpNeXdycU9mQ1kwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTFnbitDb0lYNm5KRkt1SzdlY2NHS0ZaUTZKZU4rc1oyUDQ2dGpnaWFBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdSVFAwaTB1aEpXbmJReHcrS0tQOHNQLzlWQWQvM0p5THlUOCtkcGgzZDNCTFg0cHJ0WkQzTjRVMnJpZlBjWWxTRDZFL3oyRi9ITlp3UzZQYnZnNkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJKSDJ5eWJaMlp0TklQRy9zTDJwZG5idWxLeEVZeXQwUXpCV2tzbkJhRkxRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjbWNnTHBwNVN5dXhVOFRZX3RNNTFnIiwicGhvbmVJZCI6ImY5NjU4MzE4LTA1ZmItNGY2Ny04MjA0LTI0MGQ4NDUwYmFlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJML2JrMStIVjFpOElaQUZkRGs3N2wvV0hZYzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmJOWm1YYkNobVNXZEU2VWVwZnFsUUoyT1JJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhINkJZMlc0IiwibWUiOnsiaWQiOiI1MDk0MTA5NDc4ODoyNUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVBHbEhBUXZOV0N1Z1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnNicGo3MVVadFpVd2NSNU1SOUFzcHpmT01ZdVh1aEprdTVkcHcvUWFpZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoianl3TnpsTmprNjFSTVpxTGd1WUxqb05aVk12UHJyTzA5b2Q1VXlDOFNLdklNTjU4REtPMUplYk40c3ZYZjBmYTQ2SWxXd2Z4RTh2MEtYV1A1YXpLQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Im1OS2dPdjR3bWNwUFBGMTFWbVJJRGdZN2ZpaTRqQVU2S1NkZkt2T3V0VS9QazRDWFRRZnRZNi9ESkdpdW5EV3hCWUhjMG5meXM0ZTExUm5kd24rU0FnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDEwOTQ3ODg6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjdHNlkrOVZHYldWTUhFZVRFZlFMS2MzempHTGw3b1NaTHVYYWNQMEdvbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjI5MTI3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFQWEifQ==
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
