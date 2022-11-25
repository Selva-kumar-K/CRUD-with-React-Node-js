import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Books = () => {

    const [book, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {

            try{
            const res = await axios.get('http://localhost:8000/books')
            setBooks(res.data)

            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:8000/books/'+ id)
            window.location.reload()
        }
        catch(err) {
            console.log(err);
        }
    }

    return(
       <div>
        <h1>SK Book's Store</h1>   
        <div className="books">
            {book.map((bk) => (
                <div className="book" key={bk.id}>
                    {bk.cover && <img src='selva.jpg' alt ="images"/>}
                    <h2>{bk.title}</h2>
                    <p>{bk.desc}</p>
                    <span>{bk.price}</span>
                    <button className="delete" onClick={() => handleDelete(bk.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${bk.id}`}>Update</Link></button>
                </div>
            ))}

           
        </div>
        <button>
                <Link to='/add'>Add the book</Link>
            </button>
       </div>
    )
}

export default Books