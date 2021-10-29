import { Route, Switch } from 'react-router-dom';
import ShowsIndex from '../pages/ShowsIndex';
import Show from '../pages/Show';



function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path= '/'>
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