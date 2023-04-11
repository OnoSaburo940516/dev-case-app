import mongoose from 'mongoose'

const MatchHistorySchema = new mongoose.Schema(
    {
        matchId: { type: mongoose.Schema.Types.Number, default: 0 },
        matchUserId: { type: mongoose.Schema.Types.Array , default: [0, 1] },
        matchTokenId: { type: mongoose.Schema.Types.Array, default: [0, 0] },
        matchTokenAmount: { type: mongoose.Schema.Types.Array, default: [10, 10] },
        matchRsult: { type: mongoose.Schema.Types.Boolean, default: true },
    },
    {
        timestamps: true 
    }
)

export default mongoose.models.MatchHistory || mongoose.model('MatchHistory', MatchHistorySchema)