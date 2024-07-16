import React from 'react'
import Header from '../components/header'
import { useNavigate  } from "react-router-dom";

const HeaderSecundary = ({title,subtitle,img,tipo, locacion}) => {
  const ciudad = JSON.parse(locacion)
  const navigate = useNavigate();

  return (
    <div className='HeaderSecundary-background'>
      <Header/>
      <div className="HeaderSecundary-wrapper">
        <div className="HeaderSecundary-container">
          <div className='Header-Secundary-buttons'>
            <button onClick={() => navigate('/')}>
              <i className="fa-sharp fa-light fa-chevron-left"></i> Go Home
            </button>
            <div className='HeaderSecundary-map'>
              <li>Home</li>
              <li><i className="fa-sharp fa-light fa-chevron-right"></i></li>
              <li>{tipo}</li>
              <li><i className="fa-sharp fa-light fa-chevron-right"></i></li>
              <li>{ciudad?.locality}</li>
            </div>
            <div className='HeaderSecundary-share'>
              <button><i class="fa-light fa-arrow-up-from-square"></i></button>
            </div>
          </div>
          <div className="HeaderSecundary-title"  style={{ backgroundImage: `url(${img})` }}>
            <h2 className='HeaderSecundary-h2'> {title} </h2>        
            <h3 className='HeaderSecundary-subtitle'> { subtitle } </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSecundary