import express from 'express'
import mysql from 'mysql'
import cors  from 'cors'

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogData"
})

app.get('/', (req,res)=> {
    return res.json("From backend")
})

app.listen(8008, () => {
    console.log("listening")
})

app.get('/blog', (req, res) => {
    const sql = "SELECT * FROM blog";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})