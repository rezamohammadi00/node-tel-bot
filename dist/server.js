var TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
var TOKEN = process.env.TEL_BOT_TOKEN;
var bot = new TelegramBot(TOKEN, {
    polling: true,
});
bot.onText(/\/start/, function (msg) {
    console.log(msg.chat.id + " ID" + " user is typing");
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "hiiiiiiiiiiiiiiiii");
});
bot.on("message", function (msg) {
    console.log(msg);
    var chatId = msg.chat.id;
    bot.sendPhoto(chatId, "AgACAgQAAxkBAANSZ4GVTofy6Ap00mPlhn3bAVHJQdgAAvPFMRvSLRFQ_wWG7T2tosgBAAMCAAN5AAM2BA");
});
console.log("bot is running");
