const express = require("express")
const router = express.Router()
const pool = require('../config/db')
const bcrypt = require('bcrypt')


// registeration api
router.post('/register', async(req, res) => {
const {username , email, password} = req.body;

try {
    const [rows] = await pool.query('SELECT * FROM register WHERE email = ?', [email])

    if(rows.length > 0){
        return res.status(409).json({
            message : "email is already exist"
        })
    }

    const hashPassword = await bcrypt.hash(password , 10)
    await pool.query('INSERT INTO (username, email, password), VALUES(?,?,?)', [username, email, hashPassword])
     console.log(username, email)
    return res.status(200).json({
        message : "user is register successfully!"
    })
} catch (error) {
    console.log(error)
    return res.status(500).json(error.message)
}


})


module.exports = router;