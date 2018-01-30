import React from 'react';
import './AppLayout.scss';

const AppLayout = (props) => (
  <div className="App">
    {props.children}
  </div>
);

export default AppLayout;
