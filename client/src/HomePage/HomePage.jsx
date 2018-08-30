import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="home-container full-height">
                <div className="logout-title-container">
                    <div className="name-label">{user.firstName} {user.lastName}</div>
                    <label className="separator"> | </label>
                     <Link to="/login" className="logout-label">Logout</Link>
                     <i className="fa fa-sign-out-alt logout-icon"></i>
                </div>
                <div className="dashboard-container full-height">
                    <div className="title-container full-width">Play to learn !</div>
                    <div className="list-container">
                        <ul>
                            <li>
                                <Link to="/eridani-wars-css-grid" target="_blank">The Eridani Wars Css Grid</Link>
                            </li>    
                        </ul>
                    </div>
                </div>
                <div className="footer-container">
                    <i className="fa fa-copyright"></i>
                    <label>2018 - Play to learn - All rights reserved</label>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };