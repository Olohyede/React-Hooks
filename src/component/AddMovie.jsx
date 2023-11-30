import { useState } from "react";

const AddMovie = ({addMovie}) => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
        rating: 0,
        trailerLink: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setMovie((prev) => {
            return({
                ...prev, 
                [name]: value

            })
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addMovie(movie)
        setMovie({title: "", posterUrl: "", description: "", rating: "", trailerLink: ""})
    } 

    return(
            <form className="wrapper">
                <h3 style={{width: "40%", height: "3rem", fontSize: "24px", textAlign: "left", marginLeft: "20px"}}><cite>Add Movie</cite></h3>
                <input type="text" className="input-style" value={movie.title} onChange = {handleChange} id="title" name="title" placeholder="Name"/>
                <input type="text" className="input-style" value={movie.posterUrl} onChange = {((event) => handleChange(event))} id="posterURL" name="posterUrl" placeholder="Add Image"/>
                <input type="text" className="input-style" value={movie.description} onChange = {((event) => handleChange(event))} id="description" name="description" placeholder="description"/>
                <input type="number" className="input-style" value={movie.rating} onChange = {((event) => handleChange(event))} id="rating" name="rating" placeholder="rating"/>
                <button className="Submit" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
    )
};

export default AddMovie;