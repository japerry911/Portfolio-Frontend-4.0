import React from 'react';

const BackgroundVideo = ({ children }) => (
  <div
    style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#000',
    }}
  >
    <video
      autoPlay
      loop
      muted
      style={{
        opacity: 0.5,
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <source
        src="https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/home/1050392533-preview.mp4"
        type="video/mp4"
      />
    </video>
    {children}
  </div>
);

export default BackgroundVideo;
