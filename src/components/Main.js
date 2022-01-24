import  { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import ShowsIndex from '../pages/ShowsIndex';
import Home from '../pages/Home';
import Show from '../pages/Show';
import Videos from '../pages/Videos';
import Contact from '../pages/Contact';
import Merch from '../pages/Merch';
import Listen from '../pages/Listen'
import Header from './Header';
import Footer from './Footer';



const Main = (props) => {
    const [ shows, setShows ] = useState([]);

    // const BASE_URL = 'http://localhost:3001/shows/';
    const BASE_URL = 'https://rattlesnakemilk.herokuapp.com/shows/';

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
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/videos">
                    <Videos />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/listen">
                    <Listen />
                </Route>
                <Route path="/merch">
                    <Merch />
                </Route>
                <Route exact path= "/shows">
                    <ShowsIndex shows={shows} createShows={createShows}/>
                </Route>
                <Route 
                     path="/shows/:id" render={rp => (

                        <Show 
                            {...rp}
                            shows={shows}
                            updateShows={updateShows}
                            deleteShows={deleteShows}
                        />
                    )} />
                    
                </Switch>
                <Footer />
            </main>
        );
    }
                        
               



        
export default Main;