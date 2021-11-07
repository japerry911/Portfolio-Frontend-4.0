import React from 'react';

const BackgroundVideo = ({ children }) => (
  <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
    <video
      autoPlay
      loop
      muted
      style={{ minHeight: '100vh', width: '100vw', opacity: 0.5 }}
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
