import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// bootstrap
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import SplashScreen from './components/SplashScreen';

const Home = React.lazy(() => import('./pages/home'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={SplashScreen}> 
            <Home/> 
          </React.Suspense> 
          } 
        />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
