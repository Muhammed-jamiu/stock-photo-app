import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './new/index.css';
import App from "./new/App.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App/>
  </StrictMode>,
)
