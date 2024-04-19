
import './App.css';
import React from 'react';

import NavBar from './components/NavBar/navBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import DialogsContainer from './components/Dialogs/Dialogs-Container';
import UserscContainer from './components/Users/UserscContainer';
import ContentContainer from './components/Content/contentContainer';
import HeaderContainer from './components/Header/headerContainer';
import Login from './components/Login/login';
import NewsContainer from './components/News/NewsContainer';
import {initialState} from './Redux/setting_reducer';
import SettingContainer from './components/Settings/SettingContainer';
import MusicContainer from './components/Music/MusicContainer';
import Dialog1 from './components/Dialogs/DialogItem/Dialog1';
import Dialog2 from './components/Dialogs/DialogItem/Dialog2';
import Dialog3 from './components/Dialogs/DialogItem/Dialog3';
import Dialog4 from './components/Dialogs/DialogItem/Dialog4';
import Dialog5 from './components/Dialogs/DialogItem/Dialog5';


function App(props) {
    
    return (
        
        <BrowserRouter>
        <div className="app_wallaper">
            <HeaderContainer /> 
            <NavBar />
            
            <div className = {initialState.colorFetching?"app_wallaper_content":"app_wallaper_contentaAl"}>
            <Routes>
            <Route path="/dialogs" element= {<DialogsContainer/>}/>
            <Route path="/profile/" element={<ContentContainer/>}/>
            <Route path="/profile/:profileId" element={<ContentContainer/>}/>
            <Route path="/users" element= {<UserscContainer />}/>
            <Route path="/news" element= {<NewsContainer/>}/>
            <Route path="/music" element={<MusicContainer/>}/>
            <Route path="/setting" element= {<SettingContainer/>}/> 
            <Route path="/login" element= {<Login/>}/> 
            <Route path="/dialogs/dialog/1" element={<Dialog1/>}/>
            <Route path="/dialogs/dialog/2" element={<Dialog2/>}/>
            <Route path="/dialogs/dialog/3" element={<Dialog3/>}/>
            <Route path="/dialogs/dialog/4" element={<Dialog4/>}/>
            <Route path="/dialogs/dialog/5" element={<Dialog5/>}/>
            
            
            
            
            </Routes>
            </div>
            
            
        </div>
        </BrowserRouter>


    );
}






export default App;
