import MatchHistory from '../../../models/MatchHistoryModel'

export default async function handler(req, res) {
    let mh = new MatchHistory();
    let result = await mh.save();
    res.status(200).json(result)
}