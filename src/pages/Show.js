import { useState } from "react";

const Show =(props) => {
    const id = props.match.params.id;
    const shows = props.shows;
    const show = shows.find(s => s._id === id);

    const [ editForm, setEditForm ] = useState(show);

    const handleChange = event => {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));

    }

    
    
    
    return(
        <div className="show">
            <img src={show?.img} alt={show?.date}/>
            <h1>{show?.date}</h1>
            <h3>{show?.venue}</h3>
            <h3>{show?.info}</h3>
        </div>
        
    )

};


export default Show;