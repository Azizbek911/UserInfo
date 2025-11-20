import { Telegraf, Markup } from "telegraf";
import { TOKEN } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import { messageHandler } from "./commands/messageHandler.command.js";
import { getMe } from "./commands/me.command.js";
import { telegram_id } from "./commands/action/telegram_id.js";



const bot = new Telegraf(TOKEN);

connectToDatabase();

bot.on("message", async (ctx, next) => messageHandler(ctx, next));

bot.start( async (ctx) => {
    await ctx.reply("Hello! I am your friendly bot. How can I assist you today?", Markup.inlineKeyboard([
        [Markup.button.callback("My Telegram ID", "telegram_id")],
        [Markup.button.url("Visit our website", "https://blackhole.uz")]
    ]))
});


bot.command("me", async (ctx) => getMe(ctx));

bot.action("telegram_id", (ctx) => telegram_id(ctx));



bot.launch((err) => {
    if (err) throw err;
    else console.log("Bot started successfully 🟢")
});


export default bot;