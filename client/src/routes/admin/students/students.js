import React, {Component} from 'react';
import SearchBox from "../../../components/search-box/index";

import './students.scss';

class StudentsRoute extends Component {
    state = {
        search: '',
        students: [{
            name: {
                first: 'Jack',
                second: 'Allen'
            },
            school: 'Stratford-upon-Avon College'
        }, {
            name: {
                first: 'John',
                second: 'Smith'
            },
            school: 'Birmingham High School'
        }, {
            name: {
                first: 'Thomas',
                second: 'Tank'
            },
            school: 'The Shaw Academy'
        }]
    };

    renderStudent = (student, index) => {
        return (
            <div className='student'
                 key={index}>
                <div className='student-name'>{student.name.first} {student.name.second}</div>
                <div className='student-school'>{student.school}</div>
            </div>
        )
    };

    render() {
        const students = this.state.students.filter(s => {
           if(!this.state.search) {
               return true;
           }

           return `${s.name.first} ${s.name.second}`.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0;
        });

        return (
            <div>
                <h2 className='route-title'>Students</h2>

                <div>
                    <SearchBox value={this.state.search} onChange={e => this.setState({
                        search: e.target.value
                    })}/>

                    <div className='students-results'>{students.length} results found</div>

                    <div className='students'>
                        {students.map(this.renderStudent)}
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentsRoute;