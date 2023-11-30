import React, { useEffect, useState, useRef } from 'react';
import '../../assets/css/radio.css';
import { getPalette } from '../utils/getPalette';
import playIcon from '../../assets/media/play-button.png';
import pauseIcon from '../../assets/media/pause-button.png';
import AudioVisualizer from '../utils/AudioVisualizer';
import MusicList from '../utils/MusicList';
import theMusic from '../../assets/media/musicList/DJ Goja - Wrong Way.mp3';
import musicListJson from '../../data/musicList.json';


const Radio = ({ paletteName }) => {
    const theNewMusic = musicListJson[0].path; // Assuming you want to use the first music entry from the JSON

    const [currentPaletteName, setCurrentPaletteName] = useState(paletteName);
    const [playState, setPlayState] = useState(false);
    const [volumeValue, setVolumeValue] = useState(50);
    const [playResponse, setPlayResponse] = useState(false);
    const [palette, setPalette] = useState(getPalette(paletteName));
    const [darkMode, setDarkMode] = useState(false);
    const audioRef = useRef(null);

    const playButtonClick = () => {
        setPlayResponse(!playResponse);
        setPlayState(!playState);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value) / 100;
        setVolumeValue(newVolume * 100);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    useEffect(() => {
        if (darkMode) {
            setCurrentPaletteName("darkMode");
            setPalette(getPalette(currentPaletteName));
        } else {
            setPalette(getPalette(paletteName));
        }
    }, [darkMode]);

    useEffect(() => {
        if (audioRef.current) {
            if (playState) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [playState]);





    return (
        <div className="radio-container" style={{ backgroundColor: palette.background }}>
            <div className='dark-mode-switch'>
                <input className='dark-mode-switch' type='checkbox' onChange={() => setDarkMode(!darkMode)} />
            </div>
            <div className="radio-wrapper flex flex-row flex-center" style={{ backgroundColor: palette.background }}>
                <div className='radio-left flex-1 flex flex-column flex-center'>
                    <div className='radio-image-wrapper flex flex-center flex-align-center'>
                        {playResponse ? (
                            <div className='radio-logo-container'>
                                <audio
                                    id='radioAudio'
                                    controls
                                    autoPlay
                                    ref={audioRef}
                                    onEnded={() => setPlayState(false)}
                                    onError={() => setPlayState(false)}
                                    style={{ visibility: 'hidden' }} // or style={{ display: 'none' }}
                                >
                                    <source src={theMusic} type='audio/mp3' />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>

                        ) : (
                            <div className="radio-loader">
                                <span></span>
                            </div>
                        )}
                    </div>
                </div>
                <div className='radio-right flex-1 flex flex-column flex-center flex-align-center'>
                    <div className='radio-title-container flex flex-column flex-align-center flex-center flex-1'>
                        <div className='radio-title flex-1 flex flex-center flex-align-center'>
                            Music Name
                        </div>
                        <div className='radio-subtitle flex-1 flex flex-center flex-align-center'>
                            Artist Name
                        </div>
                    </div>
                    <div className='flex-1 flex flex-column flex-align-center flex-center width-100 radio-controller-container'>
                        <div className='play-pause-button flex flex-column flex-center flex-align-center' onClick={playButtonClick} style={{
                            boxShadow: !playState ? '3px 3px 3px #5f5f5f, -3px -3px 3px #ffffff' : ' 0px 0px 30px 1px rgba(0,217,255,0.5),inset 0px 0px 10px 1px rgba(0,217,255,0.5),inset 0 0 5px #00d9ff',
                            border: !playState ? '2px solid transparent' : '2px solid #00d9ff'
                        }}>
                            <img src={!playState ? playIcon : pauseIcon} style={{ width: '55%', paddingLeft: !playState ? '5px' : '0px' }} />
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            className="volume-slider"
                            id="myRange"
                            value={volumeValue}
                            onChange={handleVolumeChange}
                            style={{
                                background: `linear-gradient(to right, #1EAAC4 ${volumeValue}%, #eee ${volumeValue}%)`
                            }}
                        />
                    </div>
                </div>
                <div className='slider-container'></div>
            </div>
        </div>
    );
};

export default Radio;
