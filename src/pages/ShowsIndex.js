
import { Link } from 'react-router-dom'
import { useState } from 'react';

const ShowsIndex =(props) => {

    const [newForm, setNewForm ] = useState({
        img: "",
        date: "",
        venue: "",
        info: ""
    });

    const loaded = () => {
        return props.show.map(show => (
            <div key={show._id} className="show">
                <Link to={`/shows/${show._id}`}>
                    <h1>{show.date}</h1>
                </Link>
                <h3>{show.venue}</h3>
                <h3>{show.info}</h3>
            </div>
        ))
    }
    const loading = () => <h1>Loading ...</h1>

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return(
        <section>
            <form>
                <input 
                value={newForm.img} 
                onChange={handleChange} 
                type="url"  
                placeholder="Image URL"
                name="img"/>

                <input 
                value={newForm.date} 
                onChange={handleChange} 
                type="text"  
                placeholder="Date"
                name="date"/>

                <input 
                value={newForm.venue} 
                onChange={handleChange} 
                type="text"  
                placeholder="Venue"
                name="venue"/>

                <input 
                value={newForm.info} 
                onChange={handleChange} 
                type="info"  
                placeholder="Info"
                name="ingo"/>

                <input type="submit" value= "Add" />
            </form>
            
            { props.show ? loaded() : loading() }
        </section>
    )
};


export default ShowsIndex;
