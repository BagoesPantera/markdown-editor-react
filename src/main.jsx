import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// bootstrap
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import SplashScreen from './components/SplashScreen';

import { ContextProvider } from './ContextProvider';

const Home = React.lazy(() => import('./pages/home'));
const PreviewMarkdown = React.lazy(() => import('./pages/preview/markdown'));
const PreviewHTML = React.lazy(() => import('./pages/preview/html'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={SplashScreen}> 
              <Home/> 
            </React.Suspense> 
            } 
          />

        <Route path="/preview/markdown" element={
            <React.Suspense fallback={<>...</>}> 
              <PreviewMarkdown />
            </React.Suspense> 
            } 
          />

        <Route path="/preview/html" element={
            <React.Suspense fallback={<>...</>}> 
              <PreviewHTML />
            </React.Suspense> 
            } 
          />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
