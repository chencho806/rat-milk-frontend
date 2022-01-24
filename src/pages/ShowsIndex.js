
import { Link } from 'react-router-dom'
import { useState } from 'react';



const ShowsIndex =(props) => {

    const [newForm, setNewForm ] = useState(getNewState());

    

    const loaded = () => {
        return props.shows.map(show => (
            <div key={show._id} >
            <table>
                <tbody>
            <tr className="showList" >
                <td>
                    <h3>{show.date}</h3>
                </td>
                
                <td>
                    <h3>{show.venue}</h3>
                </td>
                <td>
                <Link className="Details" to={`/shows/${show._id}`}>
                    <button>Details</button>
                </Link>
                </td>
            </tr>
            </tbody>
            </table>

            </div>
        ));
    }
        
            

                
                    

    const loading = () => <h1>Loading ...</h1>;

    const handleChange = (event) => {
        setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        props.createShows(newForm)
        setNewForm(getNewState());
    }

    function getNewState() {
        return {
            img: "",
            date: "",
            venue: "",
            info: ""
        };
    }

    return(
        <>
        <div>
            <img src="https://i.imgur.com/izHJcF7.jpg?1" alt="" className="showListImage"/>
        </div>
            
                
        <section>
            <form className="Form" onSubmit={handleSubmit}>
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

                <textarea
                rows="10"
                cols="17"
                value={newForm.info} 
                onChange={handleChange} 
                type="text"  
                placeholder="Info"
                name="info"/>

                <input type="submit" value= "Add" />
            </form>
            
                
            { props.shows ? loaded() : loading() }
        </section>
        </>
    )
};


export default ShowsIndex;
