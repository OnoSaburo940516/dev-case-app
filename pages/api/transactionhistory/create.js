import TransactionHistory from '../../../models/TransactionHistoryModel'

export default async function handler(req, res) {
    let th = new TransactionHistory();
    let result = await th.save();
    res.status(200).json(result)
}