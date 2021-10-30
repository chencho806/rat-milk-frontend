import { Link } from "react-router-dom";

const ShowsIndex =(props) => {
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

    return props.show ? loaded() : loading()
};


export default ShowsIndex;
