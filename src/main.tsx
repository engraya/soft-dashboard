import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'apexcharts/dist/apexcharts.css';

import ReactGA from "react-ga4";

ReactGA.initialize("G-SCQP74FRK3");


// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: window.location.pathname, });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
