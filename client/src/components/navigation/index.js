import * as React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {Component} from "react";

import './navigation.scss';

class Navigation extends Component {
    state = {
        links: [
            {
                to: '/students',
                title: 'Students'
            }, {
                to: '/activities',
                title: 'Activities'
            }, {
                to: '/feedback',
                title: 'Feedback'
            },{
                to: '/register',
                title: 'Registration'
            }
        ]
    };

    renderLink = (link, index) => {
        const {location} = this.props;

        return (
            <NavLink activeClassName='active'
                     isActive={() => location.pathname === link.to}
                     exact
                     key={index}
                     to={link.to}>
                {link.title}
            </NavLink>
        )
    };

    render() {
        return (
            <nav>
                {this.state.links.map(this.renderLink)}
            </nav>
        )
    }
}

export default withRouter(Navigation);