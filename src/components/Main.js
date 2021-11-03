import  { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import ShowsIndex from '../pages/ShowsIndex';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Header from './Header';
import Background from './Background';
import Footer from './Footer';



const Main = (props) => {
    const [ shows, setShows ] = useState([]);

    const BASE_URL = 'http://localhost:3001/shows/';

    const getShows = async () => {
        const data = await fetch(BASE_URL).then(response => response.json());
        setShows(data);
    }

    const createShows = async (show) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(show)
        });

        getShows();
    }

    const updateShows = async (show, id) => {
        await fetch(BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(show)
        });
        getShows();
    }

    const deleteShows = async id => {
        await fetch(BASE_URL + id, {method: 'DELETE'});
        getShows();
    }

    useEffect(() => getShows(), []);

    return (
        <main>
            <Header />
            <Background />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path= "/shows">
                    <ShowsIndex shows={shows} createShows={createShows}/>
                </Route>
                
                <Route 
                    path="/shows/:id" 
                    render={(rp) => (

                        <Show 
                            {...rp}
                            shows={shows}
                            updateShows={updateShows}
                            deleteShows={deleteShows}
                        />
                        
                    )} 
                />
            </Switch>
            <Footer />
        </main>
    );
}
               



        
export default Main;