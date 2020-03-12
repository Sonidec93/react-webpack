import React, { Component, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Users from './containers/Users';



const Pizza = React.lazy(() => {
    return import('./containers/Pizza');
})
class App extends Component {

    render() {

        return (
            <React.Fragment>
                <div>
                    <Link exact to="/pizza">Pizza</Link>
                    <Link exact to='/users'>Users</Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/pizza" render={(props) => {
                            return(
                            <Suspense fallback={<div>Loading ....</div>}>
                                <Pizza {...props} />
                            </Suspense>
        )
                        }} />
                        <Route render={(props) => <div>Not Found!</div>} />
                    </Switch>
                </div>
            </React.Fragment>

        )
    }
}


export default App;