import React, { useRef, useEffect, useState } from 'react';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

const AudioVisualizer = ({ audioSrc }) => {
  const containerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioMotion = new AudioMotionAnalyzer(containerRef.current, {
      height: 400,
      ansiBands: false,
      showScaleX: false,
      bgAlpha: 0,
      overlay: true,
      mode: 1,
      frequencyScale: 'log',
      radial: true,
      showPeaks: false,
      channelLayout: 'dual-vertical',
      smoothing: 0.7,
    });

    // Check if the HTMLMediaElement is not already connected before connecting
    if (!isConnected) {
      audioMotion.connectInput(audioElementRef.current);
      setIsConnected(true);
    }

    return () => {
      // Disconnect only if connected
      if (isConnected) {
        audioMotion.disconnectInput(audioElementRef.current);
        setIsConnected(false);
      }
      audioContext.close();
    };
  }, [audioSrc, isConnected]);

  return (
    <div>
      <div>
        <p style={{ color: 'white', fontSize: '20px' }}>
          Don't forget to click on empty space before playing!
        </p>
      </div>
      <div className="container"></div>
      <audio
        loop
        src={audioSrc}
      ></audio>
    </div>
  );
};

export default AudioVisualizer;
