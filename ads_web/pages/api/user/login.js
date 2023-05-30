import { login } from "../../../services/user"

export default function handler(req, res){
    try{
        const newUser = login(req.body)
        res.status(200).json(User)
    }catch (err){
        res.status(400).json(err.message)
    }
}
