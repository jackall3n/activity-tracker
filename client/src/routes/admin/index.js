import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import StudentsRoute from './students/students';
import Navigation from '../../components/navigation';
import ProfileSideBar from "../../components/profile/profile-sidebar";

class AdminRoute extends Component {

    render() {
        return (
            <div className='flex-child-auto flex-container flex-dir-row'>
                <aside id='sidebar' className='flex-child-shrink'>
                    <ProfileSideBar/>
                    <Navigation/>
                </aside>
                <main id='main-content' className='flex-child-auto'>
                    <Switch>
                        <Route path='/students' component={StudentsRoute}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(AdminRoute);