import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [input, setInput] = useState({
        title : '',
        desc: '',
        price: null,
        cover: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {

        setInput( prev => ({
            ...prev, [e.target.name] : [e.target.value]
        }))

    }

    const handleClick = async (e) => {
        e.preventDefault()
        try{

            await axios.post('http://localhost:8000/books', input)

            navigate('/')


        }
        catch(err){
            console.log(err);
        }

    }

    console.log(input);
    return(
        <div className="form">
            <h1>Add New book</h1>
            <input type="text" placeholder="title" onChange={handleChange}  name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text"  placeholder="cover" onChange={handleChange} name="cover"/>
          
            <button className="formButton" onClick={handleClick} >submit</button>
            
        </div>
    )
}

export default Add