import User from "../module/user.module.js";


export const admin = async (ctx) => {
    try {
        const userID = ctx.from.id;
        // Add your admin logic here
        await ctx.reply(`Admin command received from user ID: ${userID}`);
        const users = await User.find({});
        console.log(users);
    } catch (error) {
        console.error("Error in admin action:", error);
        await ctx.reply("Sorry, an error occurred while processing the admin command.");
    }
};