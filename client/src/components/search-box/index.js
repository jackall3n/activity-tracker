import * as React from "react";

import './search-box.scss';

export default class SearchBox extends React.Component {
    render() {
        return (
            <div className='search-box'>
                <i className='search-box-icon'/>
                <div className='search-box-input-holder'>
                    <input placeholder='Search' type='text' onChange={this.props.onChange} value={this.props.value}/>
                </div>
            </div>
        )
    }
}