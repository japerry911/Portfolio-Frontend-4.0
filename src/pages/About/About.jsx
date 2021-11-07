import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import { events } from '../../assets';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Timeline events={events} />
    </div>
  );
};

export default AboutPage;
