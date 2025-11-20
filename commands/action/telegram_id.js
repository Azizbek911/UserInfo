import bot from "../../index.js";


export const telegram_id = async (ctx) => {
    try {
        const userID = ctx.from.id;
        await bot.telegram.sendMessage(userID, `Your Telegram ID is: \`\`\`${userID}\`\`\``, {parse_mode: "Markdown"});
    } catch (error) {
        console.error("Error in telegram_id action:", error);
        await ctx.reply("Sorry, an error occurred while fetching your Telegram ID.");
    }
}