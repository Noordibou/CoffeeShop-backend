const jwt = require('jsonwebtoken')
const User = require('./models/User')
require('dotenv').config()

const verifyToken = (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) return res.json({ status: true, user: user.username })
            else return res.json({ status: false })
        }
    })
}
// const verifyToken=(req,res,next)=>{
//     const token=req.cookies.token
//     // console.log(token)
//     if(!token){
//         return res.status(401).json("You are not authenticated!")
//     }
//     jwt.verify(token,process.env.TOKEN_KEY,async (err,data)=>{
//         if(err){
//             return res.status(403).json("Token is not valid!")
//         }

//         req.userId=data._id

//         // console.log("passed")

//         next()
//     })
// }
module.exports = verifyToken