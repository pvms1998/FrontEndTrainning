import logo from '../assets/images/logo-acexis.png'
import React, { useState, useEffect } from 'react';
import {Button} from 'antd'

function Index(props) {
    return(
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <div>
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        marginTop: 3,
                        width: '15%',
                        height: '10%',
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    )
}
export default Index
