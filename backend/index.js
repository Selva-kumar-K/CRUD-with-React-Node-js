import express from 'express'

import mysql from 'mysql'

import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'selva@123',
    database: 'test'

})


app.use(express.json())
app.use(cors())
app.get('/', (req,res) => {
    res.json('Hello from Node js')
})

app.get('/books', (req,res) => {
    const q = 'SELECT * FROM books'

    db.query(q, (err, data) => {
        if (err) console.log(err);
        return res.json(data)
    })
})

app.post('/books', (req,res) => {

    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
    const values = [

        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[values], (err, data) => {
        if (err) console.log(err);
        return res.json('data submitted')
    })
})


app.delete('/books/:id', (req,res) => {
    const booksId = req.params.id
    const q = "DELETE FROM books WHERE id = ?"
    
    db.query(q,[booksId], (err,data) =>{
        if (err) console.log(err);
        return res.json('Book deleted Successfully')
    })

})


app.put('/books/:id', (req,res) => {
    const booksId = req.params.id
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?"

    const values = [

        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    
    db.query(q,[...values, booksId], (err,data) =>{
        if (err) console.log(err);
        return res.json('Book Updated Successfully')
    })

})


app.listen(8000, () => {
    console.log('Server is listening on the port no : 8000');
})