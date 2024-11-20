import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import ReactGA from "react-ga4";

ReactGA.initialize("G-SCQP74FRK3");

// Send a custom event
ReactGA.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
  nonInteraction: true, // optional, true/false
  transport: "xhr", // optional, beacon/xhr/image
});

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
