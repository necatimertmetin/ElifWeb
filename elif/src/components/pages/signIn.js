import React, { useState, useEffect } from 'react';
import '../../assets/css/sign.css';
import imageLinks from '../../data/imageLinks.json';
import { getPalette } from '../utils/getPalette';

const SignIn = ({ paletteName }) => {

    const palette = getPalette(paletteName);

    const handleLoginClick = () => {
        const signImage = document.querySelector('.sign-image');
        signImage.classList.remove('move-right');
        signImage.classList.add('move-left');
    };

    const handleSignUpClick = () => {
        const signImage = document.querySelector('.sign-image');
        signImage.classList.remove('move-left');
        signImage.classList.add('move-right');
    };

    const applyHoverEffect = (buttonClassName, backgroundColor, borderColor, hoverBackgroundColor, hoverBorderColor, hoverColor) => {
        const button = document.querySelector(`.${buttonClassName}`);
        if (button) {
            if (buttonClassName == 'sign-button-primary') {
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = hoverBackgroundColor;
                    button.style.borderColor = hoverBorderColor;
                    button.style.color = hoverColor; // Adjust text color accordingly
                });
                button.addEventListener('mouseout', () => {
                    button.style.backgroundColor = backgroundColor;
                    button.style.borderColor = borderColor;
                    button.style.color = palette.content1;
                });
            }
            else if (buttonClassName == 'sign-button-secondary') {
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = hoverBackgroundColor;
                    button.style.borderColor = hoverBorderColor;
                    button.style.color = hoverColor; // Adjust text color accordingly
                });
                button.addEventListener('mouseout', () => {
                    button.style.backgroundColor = backgroundColor;
                    button.style.borderColor = borderColor;
                    button.style.color = palette.main;
                });
            }



        }
    };

    useEffect(() => {
        // Apply hover effect for primary button
        applyHoverEffect('sign-button-primary', palette.main, palette.content2, palette.content1, palette.main, palette.main);

        // Apply hover effect for secondary button
        applyHoverEffect('sign-button-secondary', 'transparent', palette.main, palette.content1, palette.main, palette.main);
    }, [palette]);

    return (
        <div className="sign-container">
            <div className="sign-wrapper" style={{ backgroundColor: palette.content1 }}>
                <div className='sign-wrapper-left sign-wrapper-side'>
                    <div className='sign-content-container' style={{ borderColor: palette.main, backgroundColor: palette.content2 }}>
                        <div className='sign-content sign-content-title-container'>
                            <div className='sign-content-title' style={{ color: palette.main }}>
                                Sign Up
                            </div>
                            <div className='sign-content-subtitle' style={{ color: palette.main }}>
                                Hello, Friend!
                            </div>
                        </div>

                        <div className='sign-content sign-input-container'>
                            <input className='sign-input' style={{ borderColor: palette.main }} type='text' placeholder='Email' />
                            <input className='sign-input' style={{ borderColor: palette.main }} type='password' placeholder='Password' />
                        </div>
                        <div className='sign-content sign-button-container'>
                            <button className='sign-button sign-button-primary' style={{ borderColor: palette.main, backgroundColor: palette.main, color: palette.content1 }}>
                                Sign Up
                            </button>
                            <button className='sign-button sign-button-secondary' onClick={handleLoginClick} style={{ borderColor: palette.main, backgroundColor: 'transparent', color: palette.main }}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='sign-image sign-wrapper-side'
                    style={{
                        backgroundImage: `url(${imageLinks[0].Sign.backgroundImage})`,
                    }}
                ></div>
                <div className='sign-wrapper-right sign-wrapper-side'>
                    <div className='sign-content-container' style={{ borderColor: palette.main, backgroundColor: palette.content2 }}>
                        <div className='sign-content sign-content-title-container'>
                            <div className='sign-content-title' style={{ color: palette.main }}>
                                Sign In
                            </div>
                            <div className='sign-content-subtitle' style={{ color: palette.main }}>
                                Welcome Back!
                            </div>
                        </div>
                        <div className='sign-content sign-input-container'>
                            <input className='sign-input' style={{ borderColor: palette.main }} type='text' placeholder='Email' />
                            <input className='sign-input' style={{ borderColor: palette.main }} type='password' placeholder='Password' />
                        </div>
                        <div className='sign-content sign-button-container'>
                            <button className='sign-button sign-button-primary' style={{ borderColor: palette.main, backgroundColor: palette.main, color: palette.content1 }}>
                                Sign In
                            </button>
                            <button className='sign-button sign-button-secondary' onClick={handleSignUpClick} style={{ borderColor: palette.main, backgroundColor: 'transparent', color: palette.main }}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
