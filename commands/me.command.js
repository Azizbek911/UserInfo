import User from "../module/user.module.js";


export const getMe = async (ctx) => {
    try {
        const userID = ctx.from.id;

        const user = await User.findOne({ id: userID});

        if (!user) {
            return ctx.reply("User not found. Please register first.");
        }
        return ctx.reply(`Your information:\nID: ${user.id}\nName: ${user.first_name} ${user.last_name}\nUsername: @${user.username}\nCreated At: ${user.createdAt.toLocaleString()}\nUpdated At: ${user.updatedAt.toLocaleString()}`);
    } catch (error) {
        console.error(error);
        return ctx.reply("An error occurred while fetching your information.");
    }
}