import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortalApp } from '@forklaunch/healthcare-leadgen-ui';
import '@forklaunch/healthcare-leadgen-ui/styles.css';
import { config } from './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortalApp config={config} />
  </React.StrictMode>
);
