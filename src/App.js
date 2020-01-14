import "antd/dist/antd.css";
import React, {Component} from 'react'
import './App.css';
import PageHeader from './pages/pageHeader'
import DSSV from "./pages/dssv";
import GlobalState from './context/GloBalState';
import BackGround from './assets/images/background1.png'

export default function App() {
    return(
        <GlobalState>
        <div style={{
            height: '100vh',
            backgroundImage: `url(${BackGround})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
              <PageHeader />
              <DSSV />
        </div>
        </GlobalState>
    );
}
