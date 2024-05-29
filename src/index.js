import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'container/App'
import 'simplebar-react/dist/simplebar.min.css';
import 'styles/index.css'
import '@fortawesome/fontawesome-free/css/all.css';



const root = createRoot(document.getElementById('app'));
root.render(<React.StrictMode>
    <App />
  </React.StrictMode>);
