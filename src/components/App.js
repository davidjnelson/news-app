import React from 'react';
import { ConnectedSearchBar } from '../containers/ConnectedSearchBar';
import { ConnectedSearchResults } from '../containers/ConnectedSearchResults';

const App = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <ConnectedSearchBar />
      <ConnectedSearchResults />
    </div>
  );
};

export { App }
