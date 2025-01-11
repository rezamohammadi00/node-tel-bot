"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const contact_1 = __importDefault(require("./data/contact"));
const TOKEN = process.env.TEL_BOT_TOKEN;
const bot = new TelegramBot(TOKEN, {
    polling: true,
});
// if user send /start
bot.onText(/\/start/, async (msg) => {
    console.log(msg.chat.id + " ID" + " is joined" + " 🤝");
    const chatId = msg.chat.id;
    // await   bot.sendPhoto(chatId, path.join(__dirname, "assets", "images", "welcome.jpg"));
    bot.sendMessage(chatId, "سلام", {
        reply_markup: {
            keyboard: [
                ["عضو هیات علمی گروه علم اطلاعات و دانش شناسی"],
                ["هیات علمی"],
                ["رئیس اداره پذیرش"],
                ["بایگان اداره فارغ التحصیلان"],
                ["عضو هیات علمی گروه آبیاری و زهکشی"],
                ["کارشناس گروه حسابداری"],
                ["کارشناس گروه مدیریت"],
                ["کارشناس گروه کامپیوتر"],
                ["کارشناس گروه رشته کامپیوتر"],
                ["کارشناس خدمات آموزشی"],
                ["کارگاه جوشکاری"],
                ["کارشناس آموزش رابط معاونت پژوهشی با دفتر نظارت و ارزیابی دانشگاه"],
                ["مدیر گروه زبان انگلیسی"],
                ["هیات علمی"],
                ["رئیس اداره پذیرش"],
                ["بایگان اداره فارغ التحصیلان"],
                ["عضو هیات علمی گروه آبیاری و زهکشی"],
                ["کارشناس گروه حسابداری"],
                ["کارشناس گروه مدیریت"],
                ["کارشناس گروه کامپیوتر"],
                ["کارشناس گروه رشته کامپیوتر"],
                ["کارشناس خدمات آموزشی"],
                ["کارگاه جوشکاری"],
                ["کارشناس آموزش رابط معاونت پژوهشی با دفتر نظارت و ارزیابی دانشگاه"],
                ["مدیر گروه زبان انگلیسی"],
            ],
        },
    });
    bot.sendMessage(chatId, "نام بخش مورد نظر را برای دریافت شماره تلفن وارد کنید");
});
// if user send any message
bot.on("message", (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    const text = msg.text;
    const tell = contact_1.default.find((item) => item["واحد سازمانی"] === text);
    console.log(tell);
    if (tell && text !== "/start") {
        bot.sendMessage(chatId, tell["شماره داخلی"]);
    }
    else {
        if (text !== "/start") {
            bot.sendMessage(chatId, "نام بخش مورد نظر یافت نشد");
            bot.sendMessage(chatId, "از دکمه های موجود استفاده کنید");
        }
    }
});
console.log("bot is running");
