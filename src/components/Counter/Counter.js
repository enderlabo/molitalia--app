import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/KV.png';
import Molitalia from '../../assets/logo-molitalia.png';
import Contador from '../../assets/contador.png';

import './styles/counter.css';
import { NavLink } from 'react-router-dom';

const Counter = () => {

  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  // const [ seconds, setSeconds ] = useState('0');

  let interval = useRef();
 
  const startTimer = () => {
    const countDownTime = new Date('Dec 13, 2020, 00:00:00').getTime();

    interval = setInterval( () => {
      const now = new Date().getTime();
      const distance = countDownTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if ( distance < 0 ) {
        //stop our time
        clearInterval(interval.current);
      } else {
        // update timer 
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
      }
    }, 1000);
  }

  useEffect( () =>{
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });
    return (
      <div className="counter__container animate__animated animate__fadeIn">

        <div className="counter__img-logo">
          <img src={ Molitalia }  alt="LOGO" width="150" />
        </div>

        <div className="counter__img-contain">
           <img src={Logo} alt="LOGO" width="550" height="350" />
        </div>
     
          {/* <div className="counter__days">
              <p>{days}</p>
                <p id="hours">{hours}</p>
              <p>{minutes}</p> 
          </div> */}
          <div className="counter__days">
            <p>BIENVENIDOS</p>
          </div>

        {/* <div className="counter__border-contain">

          <div className="counter__contain2">
            <img src={ Contador } alt="CONTADOR" width="450" />
         
          </div> */}

          
        {/* 

          
          
            <div className="img__border">
              <img src={ Esfera } alt="ESFERA" width="100" />
            </div>

            <div className="img__border2">
              <img src={ Esfera } alt="ESFERA" width="100" />
            </div>

            <div className="img__border3">
              <img src={ Esfera } alt="ESFERA" width="100" />
            </div>

            <div className="img__character">
              <img alt="Pinguino" src={ Pinguino }  width="80" />
            </div>
            <div className="img__character2">
              <img alt="Elfo" src={ Elfo } width="80" />
            </div>
            <div className="img__character3">
              <img alt="Reno" src={ Reno } width="80" />
            </div> 
          */}
           {/* </div>   */}

        {/* <div className="counter__days-text">
          <div className="counter__days-contain">
            <p>DÍAS</p>
          </div>
          <div className="counter__hours-contain">
            <p>HORAS</p>
          </div>
          <div className="counter__min-contain">
            <p>MINUTOS</p>
          </div>
        </div> */}

        <div className="counter__button">
          <NavLink exact to="/registro" >Registro</NavLink>
        </div>
       
      </div>
    )
}

export default Counter

