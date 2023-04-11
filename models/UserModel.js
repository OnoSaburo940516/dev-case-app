import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        email: { type: mongoose.Schema.Types.String, required: true, unique: true },
        isAdmin: { type: mongoose.Schema.Types.Boolean, default: false },
        username: { type: mongoose.Schema.Types.String },
        userWalletAddress: { type: mongoose.Schema.Types.String, default: "0x0000000000000000000000000000000000000000"},
        userPrivateKey:{ type: mongoose.Schema.Types.String, default: "0x0000000000000000000000000000000000000000000000000000000000000000"},
        userLevel: { type: mongoose.Schema.Types.Number, default: 0 },
        userRanking: { type: mongoose.Schema.Types.Number, default: 0 },
    },
    {
        timestamps: true
    }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)