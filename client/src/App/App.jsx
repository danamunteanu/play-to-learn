import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { levels, levelWin } from '../_constants/levels.js'
import { docs } from '../_constants/docs.js'
import { GameScreenPage } from '../GameScreenPage'

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="big-container full-height">
                <div className="full-height">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div className="full-height">
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/eridani-wars-css-grid" render={(props) => <GameScreenPage levels={levels} levelWin={levelWin} docs={docs} { ...props }/>} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                              </div>
                        </Router>
                    </div>
            </div>
        );
    }
    
}


function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 