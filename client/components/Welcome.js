import React from 'react';
import Search from './Search';

const Welcome = ({ setLocation }) => (
  <div>
    <h2>Welcome, find some weather!</h2>
    <Search setLocation={setLocation} />
  </div>
);

export default Welcome;
