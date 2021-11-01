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

    const handleSubmit = event => {
        event.preventDefault();
        const { _id, img, date, venue, info } = editForm;
        props.updateShows({ img, venue, date, info }, _id);
        props.history.push('/shows');

    }

    const removeShow = () => {
        props.deleteShows(show._id);
        props.history.push('/shows');
    }
    
    
    
    return(
        <div className="show">
            <img src={show?.img} alt={show?.date}/>
            <h1>{show?.date}</h1>
            <h3>{show?.venue}</h3>
            <h3>{show?.info}</h3>
            <button onClick={removeShow}>DELETE</button>
            <form onSubmit={handleSubmit}>
            <input 
                value={editForm.img} 
                onChange={handleChange} 
                type="url"  
                placeholder="Image URL"
                name="img"/>

            <input 
                value={editForm.date} 
                onChange={handleChange} 
                type="text"  
                placeholder="Date"
                name="date"/>

            <input 
                value={editForm.venue} 
                onChange={handleChange} 
                type="text"  
                placeholder="Venue"
                name="venue"/>

            <input 
                value={editForm.info} 
                onChange={handleChange} 
                type="text"  
                placeholder="Info"
                name="info"/>
            <input 
                type="submit" 
                value="Edit" />
                
            </form>
        </div>
        
    )

};


export default Show;