import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

export const makeGoogleMapsLink = (locationString) => {
  if (locationString && locationString.startsWith("https://www.google.com/maps")) {
    return locationString;
  } else {
    const locationEncoded = encodeURIComponent(locationString);
    return `https://www.google.com/maps?q=${locationEncoded}`;
  }
};






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
