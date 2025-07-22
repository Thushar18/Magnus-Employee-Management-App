import React from "react";
import {Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import SearchEmployee from './components/SearchEmployee';
import MultipleTabsPage from './components/MultipleTabsPage';
import MenuPage from "./components/MenuPage";
import AutoCompletePage from "./components/AutoCompletePage";
import CollapsibleContentPage from "./components/CollapsibleContentPage"
import ImagesPage from "./components/ImagesPages";
import SliderPage from "./components/SliderPage";
import ProtectedRoute from './components/ProtectedRoute';
import TooltipPage from "./components/TooltipPage";
import PopupsPage from "./components/PopupsPage";
import LinksPage from "./components/LinksPage";
import CssProperties from "./components/CssProperties";
import IframesPage from "./components/IframesPage";



function App(){
  const location = useLocation();
  const showSidebar = location.pathname !== '/' && localStorage.getItem('auth') === 'true';
  return(
    <div className="app-container" style={{display:"flex", height:"100%"}}>
      {showSidebar && <Sidebar />}
      <div style={{flex:1, padding:"20px",overflow:"auto"}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/create-employee" element={<ProtectedRoute><CreateEmployee/></ProtectedRoute>} />
          <Route path="/search-employee" element={<ProtectedRoute><SearchEmployee/></ProtectedRoute>} />
          <Route path="/multiple-tabs" element={<ProtectedRoute><MultipleTabsPage /></ProtectedRoute>} />
          <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
          <Route path="/autocomplete" element={<ProtectedRoute><AutoCompletePage /></ProtectedRoute>} />
          <Route path="/collapsible-content" element={<ProtectedRoute><CollapsibleContentPage /></ProtectedRoute>} />
          <Route path="/images" element={<ProtectedRoute><ImagesPage /></ProtectedRoute>} />
          <Route path="/slider" element={<ProtectedRoute><SliderPage /></ProtectedRoute>} />
          <Route path="/tooltips" element={<ProtectedRoute><TooltipPage /></ProtectedRoute>} />
          <Route path="/popups" element={<ProtectedRoute><PopupsPage /></ProtectedRoute>} />
          <Route path="/links" element={<ProtectedRoute><LinksPage /></ProtectedRoute>} />
          <Route path="/css-properties" element={<ProtectedRoute><CssProperties /></ProtectedRoute>} />
          <Route path="/iframes" element={<ProtectedRoute><IframesPage /></ProtectedRoute>} />
        
        </Routes>
      </div>
    </div>
  );
}
export default App;

 