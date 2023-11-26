import React, { useEffect } from 'react';
import '../../assets/css/aboutUs.css';
import heroImg from '../../assets/media/Designer-girl.png';
import { getPalette } from '../utils/getPalette';


const AboutUs = ({ paletteName }) => {
    const palette = getPalette(paletteName);

    useEffect(() => {
        // Add a class to trigger the transition after the page has loaded
        document.querySelector('.flex').classList.add('show-content');
        console.log(palette.main);
    }, []);

    return (
        <div className='poppins'>
            <div className='flex flex-row flex-wrap' style={{ height: '90vh' }}>
                <div className='flex-2 flex flex-column flex-center flex-align-start about-us-title-padding'>
                    <div className='about-us-title'>ABOUT US</div>
                    <div className='title-description flex flex-align-start flex-column flex-center'>
                        &emsp;Welcome to our world, where innovation meets passion, and anonymity amplifies our collective voice. Born out of a shared desire for connection without compromise, we are a community dedicated to fostering genuine interactions in a digital landscape.<br /><br />&emsp;In an era where privacy is both a precious commodity and a fundamental right, we have created a space that embraces the beauty of anonymity. Here, labels dissolve, and ideas take center stage. We are united by the belief that every voice deserves to be heard, irrespective of the speaker.
                    </div>
                    <button className='about-us-button' style={{ backgroundColor: palette.main, important: 'true', color: palette.content2 }}>Read more</button>
                </div>
                <div className='flex-3 flex flex-center flex-align-center'>
                    <img className='image-flip' src={heroImg} alt="Designer girl" />
                </div>
            </div>
            <hr />
            <div style={{ height: '500vh' }}></div>
        </div>
    );
};

export default AboutUs;
