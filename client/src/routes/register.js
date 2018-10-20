import React, { Component } from 'react';

export default class RegisterRoute extends Component {
    render() {
        return (
            <div>
                <h1>You should register here</h1>
                <h4>Then it will all be ok</h4>

                <form>
                    <div>
                        <label htmlFor='first_name'>First name</label>
                        <input type='text' name='first_name' />
                    </div>
                    <div>
                        <label htmlFor='surname'>Surname</label>
                        <input type='text' name='surname' />
                    </div>
                    <div>
                        <label htmlFor='postcode'>Home postcode</label>
                        <input type='text' name='postcode' />
                    </div>
                    <div>
                        <label htmlFor='gender'>Gender</label>
                        <input type='radio' name='gender' /> Male
                    <input type='radio' name='gender' /> Female
                    </div>
                    <div>
                        <label htmlFor='birthday'>Date of birth</label>
                        <input type='text' name='birthday' placeholder='DD/MM/YYYY' />
                    </div>
                    <div>
                        <label htmlFor='school'>Name of your school, college or academy</label>
                        <select name='school'>
                            <option value='sav'>Stratford-upon-avon College</option>
                            <option value='so'>Some other shit place</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='year'>Year group</label>
                        <select name='year'>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='college_yr_1'>College Yr 1</option>
                            <option value='college_yr_2'>College Yr 2</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='gdpr'>Happy to accept conditions that you wont read?*</label>
                        <input type='checkbox' name='gdpr' />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}