import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortalWithAdmin } from '@forklaunch/healthcare-leadgen-ui';
import '@forklaunch/healthcare-leadgen-ui/styles.css';
import { config } from './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PortalWithAdmin config={config} iamUrl={import.meta.env.VITE_IAM_URL} />
  </React.StrictMode>
);
