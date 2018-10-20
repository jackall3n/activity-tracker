import React, { Component } from 'react';

export default class RegisterRoute extends Component {
    render() {
        return (
            <div className='grid-container'>
                <div className='grid-x grid-padding-x'>
                    <form className='cell large-8 large-offset-2'>
                        <h1>You should register here</h1>
                        <h6>Then it will all be ok</h6>

                        <div className='grid-x grid-padding-x'>
                            <div className='cell small-6'>
                                <label htmlFor='first_name'>First name</label>
                                <input type='text' name='first_name' placeholder='Jack' />
                            </div>
                            <div className='cell small-6'>
                                <label htmlFor='surname'>Surname</label>
                                <input type='text' name='surname' placeholder='Allen' />
                            </div>
                        </div>

                        <fieldset class="small-6 cell">
                            <legend>Gender</legend>
                            <input id='male' name='gender' type="radio" value='male' /><label for="male">Male</label>
                            <input id='female' name='gender' type="radio" value='female' /><label for="female">Female</label>
                        </fieldset>
                        <div className='cell small-6'>
                            <label htmlFor='postcode'>Home postcode</label>
                            <input type='text' name='postcode' placeholder='CV37 9QR' />
                        </div>
                        <div>
                            <label htmlFor='birthday'>Date of birth</label>
                            <input type='text' name='birthday' placeholder='DD/MM/YYYY' />
                        </div>
                        <div className='grid-x grid-padding-x'>

                            <div className='cell small-8'>
                                <label htmlFor='school'>Name of your school, college or academy</label>
                                <select name='school'>
                                    <option value='sav'>Stratford-upon-avon College</option>
                                    <option value='so'>Some other shit place</option>
                                </select>
                            </div>

                            <div className='cell small-4'>
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
                            <input id='gdpr' name='gdpr' type="checkbox" /><label htmlFor="gdpr">Yes, I accept conditions that I have not read*</label>
                        </div>

                        <div className='grid-x align-center-middle'>
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}