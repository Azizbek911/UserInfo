import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "User ID is required"],
        unique: true
    },
    first_name: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
    },
}, { timestamps: true });


const User = mongoose.model("users", userSchema);

export default User;