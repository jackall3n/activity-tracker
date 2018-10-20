import React, {Component} from 'react';

import './register.scss';

export default class RegisterRoute extends Component {
    render() {
        return (
            <div className='registration'>
                    <form className='registration-card'>
                        <div className='registration-content'>
                            <div className='cell large-12 grid-container'>
                                <h1>Registration</h1>
                                <div className='grid-x grid-padding-x'>
                                    <div className='cell medium-6'>
                                        <label htmlFor='first_name'>First name</label>
                                        <input type='text' name='first_name' placeholder='Jack'/>
                                    </div>
                                    <div className='cell medium-6'>
                                        <label htmlFor='surname'>Surname</label>
                                        <input type='text' name='surname' placeholder='Allen'/>
                                    </div>
                                </div>

                                <fieldset className="medium-6 cell">
                                    <legend>Gender</legend>
                                    <input id='male' name='gender' type="radio" value='male'/><label
                                    htmlFor="male">Male</label>
                                    <input id='female' name='gender' type="radio" value='female'/><label
                                    htmlFor="female">Female</label>
                                </fieldset>
                                <div className='grid-x grid-padding-x'>
                                <div className='cell medium-6'>
                                    <label htmlFor='postcode'>Home postcode</label>
                                    <input type='text' name='postcode' placeholder='CV37 9QR'/>
                                </div>
                                    <div className='cell medium-6'>
                                    <label htmlFor='birthday'>Date of birth</label>
                                    <input type='text' name='birthday' placeholder='DD/MM/YYYY'/>
                                </div>
                                </div>
                                <div className='grid-x grid-padding-x'>
                                    <div className='cell medium-8'>
                                        <label htmlFor='school'>Name of your school, college or academy</label>
                                        <select name='school'>
                                            <option value='sav'>Stratford-upon-avon College</option>
                                            <option value='so'>Some other shit place</option>
                                        </select>
                                    </div>

                                    <div className='cell medium-4'>
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
                                </div>

                                <div className='cell small-12'>
                                    <input id='gdpr' name='gdpr' type="checkbox"/><label htmlFor="gdpr">Yes, I accept
                                    conditions that I have not read*</label>
                                </div>

                            </div>
                        </div>
                        <div className='registration-footer'>
                            <div className='grid-x align-center-middle'>
                                <button type='submit'>Register</button>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}