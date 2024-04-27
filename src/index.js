import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinBox from './UXPinBox.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinBox />, document.getElementById("root"));