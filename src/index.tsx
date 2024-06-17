import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import AppComponent from './App.component';

const root = createRoot(document.getElementById('root')!!);
root.render(<AppComponent />);