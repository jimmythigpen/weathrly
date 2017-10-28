import React from 'react';
import Search from './Search'

const Welcome = ({ setLocation }) => (
  <div>
    Welcome to Weathrly
    <br/>
    <br/>
    <Search setLocation={setLocation} />
  </div>
)

export default Welcome
