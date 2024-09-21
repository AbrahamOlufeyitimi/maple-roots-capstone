import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import React from 'react';
import './App.scss'

function App() {


  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/"  element={<WelcomePage />}/>
    //     <Route path="/onboarding"  element={<OnboardingPage />}/>
    //     <Route path="/home"  element={<HomePage />}/>

    //   </Routes>
    // </BrowserRouter>
    <ProfilePage />
  )
}

export default App
