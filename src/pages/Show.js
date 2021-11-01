import React from "react";


const Show =(props) => {
    console.log("this is", props)
    const id = props.match.params.id;
    const shows = props.shows;
    const show = shows.find((s) => {
        console.log(s._id);
        console.log(id);
        return s._id === id
      })
    console.log(show)
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