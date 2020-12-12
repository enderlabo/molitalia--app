import React from 'react';
import { useForm } from "react-hook-form";
import { useCustomForm } from '../hooks/useForm';
import Molitalia from '../../assets/logo-molitalia.svg';
import Logo from '../../assets/KV.png';
import Elfo from '../../assets/elfo.png';
import { useHistory } from "react-router-dom";
import {  sweetErrorName, sweetErrorLastName, sweetErrorCode } from '../UI/SweetAlert';

import './styles/auth.css';
import { sweetAlert } from '../UI/SweetAlert';

export const Register = () => {

    const history = useHistory();
    const [formRegisterValues, handleRegisterChange] = useCustomForm({
        rName: "",
        rLastName: "",
        rCode: "",
        
      });
      const { rName, rLastName, rCode } = formRegisterValues;
      const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
      });

      function onSubmit(data) {
        console.log(data);
      }

    const postRegister = () => {

      rCode === '' ? sweetAlert() : history.push("/mapa");

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni: rCode, nombre: rName, apellido: rLastName })
    };

      fetch('https://magicanavidad.molitalia.com.pe/api/registro', requestOptions)
        .then(response => response.json())
    }

    return (
      <div className="auth__container animate__animated animate__fadeIn">
          <div className="counter__img-logo">
            <img src={ Molitalia }  alt="LOGO" width="150" />
          </div>

          <div className="auth__img-contain">
           <img src={ Logo } alt="LOGO" width="550" height="350" />
          </div>

      <div className="auth__register">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
       
           <label>Apellido Paterno: </label>
          <div className="auth__ugly-contain">
          <input
              type="text" 
              className="inputFeo"
              name="rName"
              value={rName}
              onChange={handleRegisterChange}
              ref={register({
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              style={{ borderColor: errors.rName && "red" }}
          />

          </div>
          {/* <br /> */}
            <label>Apellido Materno: </label>
          <div className="auth__ugly-contain">
          <input
              type="text"
              className="inputFeo"
              id="apellido"
              name="rLastName"
              value={rLastName}
              onChange={handleRegisterChange}
              ref={register({ required: true, minLength: 4 })}
          />
          {/* {errors.rLastName &&  (
              sweetErrorLastName()
          )} */}
          </div>
              {/* <br /> */}
            <label>DNI: </label>
          <div className="auth__ugly-contain">
          <input
              type="numeric" 
              min="-100" max="100" 
              className="inputFeo"
              id="dni"
              name="rCode"
              autoComplete="off"
              
              value={rCode}
              onChange={handleRegisterChange}
              ref={register({
              required: true,
              maxLength: 8,
              })}
          />
      
          {/* {errors.rCode &&  (
              sweetErrorCode()
          )} */}

          </div>

        </form>

          <div className="auth__img-elf2">
              <img alt="LOGO" src={ Elfo } width="200"
              
              />
          </div>
      </div>

      <div className="register__button" >
        {/* <NavLink exact to="/mapa" disable={ true } >Aceptar</NavLink> */}
        <a onClick={ postRegister }>Aceptar</a>
      </div>

      </div>
    )
}
