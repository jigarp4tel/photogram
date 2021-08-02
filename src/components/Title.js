import React from 'react'
import logo from '../assets/img/logo.png'

const Title = () => {
    return (
        <div className="title">
            <img className="logo" src={logo} alt="Logo" />
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    )
}

export default Title
