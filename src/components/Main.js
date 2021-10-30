import  { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import ShowsIndex from '../pages/ShowsIndex';
import Show from '../pages/Show';



const Main = (props) => {
    const [ show, setShow ] = useState(null);

    const BASE_URL = 'http://localhost:3001/shows/';

    const getShow = async () => {
        const data = await fetch(BASE_URL).then(response => response.json());
        setShow(data);
    }

    const createShow = async (show) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(show)
        });

        getShow();
    }

    useEffect(() => getShow(), []);

    return (
        <main>
            <Switch>
                <Route exact path= "/">
                    <ShowsIndex />
                </Route>
                <Route 
                    path="/:id" 
                    render={(rp) => (
                        <Show 
                            {...rp}
                        />
                    )} 
                />
            </Switch>
        </main>
    );
}
               



        
export default Main;