import { connect } from "react-redux";
import Nav from "./Nav";
import Questions from "./Questions";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Add from "./Add";
import Leaderboard from "./Leaderboard";
import Notfound from "./Notfound";
import Poll from "./Poll";

const Dashboard = (props) => {
    return ( 
            <Router  basename={process.env.PUBLIC_URL}>
                <div className="content">
                    <Nav/> 
                    <h3 className="center"> Would You Rather...?</h3>
                    <Switch>
                        <Route exact path='/'>
                            <Questions/>
                        </Route>
                        <Route path='/add'>
                            <Add/>
                        </Route>
                        <Route path='/leaderboard'>
                            <Leaderboard/>
                        </Route>
                        <Route path='/questions/:question_id'>
                            <Poll/>
                        </Route>
                        <Route>
                            <Notfound/>
                        </Route>
                    </Switch>                 
                </div>
            </Router>
     );
}
 
export default connect()(Dashboard);