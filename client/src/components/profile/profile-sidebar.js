import * as React from 'react';

import './profile-sidebar.scss';

export default class ProfileSideBar extends React.Component {
    render() {
        const profile_image_src = 'https://ocr.org.uk/Images/OCR-Cambridge-Technicals-T2-HeroDesktop-1400x785.png';
        return (
            <div className='profile-sidebar'>
                <div className='profile-image' style={{backgroundImage: `url(${profile_image_src})`}}>
                </div>

                <div className='profile-name'>
                    Peter Hinett
                </div>
            </div>
        )
    }
}