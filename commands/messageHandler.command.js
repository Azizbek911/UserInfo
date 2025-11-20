import User from "../module/user.module.js";
import { admin } from "./admin.command.js";



export const messageHandler = async (ctx, next) => {
    try {
        if (!ctx) return console.error("No context provided to messageHandler");
        const userID = ctx.from.id;

        const user = await User.find({ id: userID});

        if (!user || user.length === 0) {
            const newUser = await User.create([{
                id: userID,
                first_name: ctx.from.first_name,
                last_name: ctx.from.last_name || "",
                username: ctx.from.username || "",
            }]);

            console.log("New user created: ", newUser);
        }
        // await admin(ctx);
        next();
    } catch (error) {
        console.error(error);
        return ctx.reply("An error occurred while processing your message.");
    }
}