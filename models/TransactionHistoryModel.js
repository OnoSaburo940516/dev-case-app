import mongoose from 'mongoose'

const TransactionHistorySchema = new mongoose.Schema(
    {
        transactionHash: { type: mongoose.Schema.Types.String, default: "0x0000000000000000000000000000000000000000000000000000000000000000" },
        transactionType: { type: mongoose.Schema.Types.Boolean , default: true },
        transactionSender: { type: mongoose.Schema.Types.String , default: "0x0000000000000000000000000000000000000000" },
        transactionReceiver: { type: mongoose.Schema.Types.String , default: "0x0000000000000000000000000000000000000000" },
        transactionTokenId: { type: mongoose.Schema.Types.Number, default: 0 },
        transactionTokenAmount: { type: mongoose.Schema.Types.Number, default: 0 },
        transactionSuccess: { type: mongoose.Schema.Types.Boolean, default: true },
    },
    {
        timestamps: true 
    }
)

export default mongoose.models.TransactionHistory || mongoose.model('TransactionHistory', TransactionHistorySchema)