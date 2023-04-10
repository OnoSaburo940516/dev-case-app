import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    username: { type: String },
    userWalletAddress: { type: String, default: "0x0000000000000000000000000000000000000000"},
},
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)