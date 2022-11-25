import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



const Data = () => {

    const [book, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {

            try{
            const res = await axios.get('http://localhost:8000/books')
            console.log(res);
            
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    return(
        <div>data</div>
    )
}

export default Data