import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useCustomForm } from '../hooks/useForm';
import Molitalia from '../../assets/logo-molitalia.svg';
import Logo from '../../assets/KV.png';
import Elfo from '../../assets/elfo.png';

import { NavLink } from 'react-router-dom';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { startLogin } from '../../redux/actions/authAction';

import './styles/auth.css';




export const Register = () => {

    const dispatch = useDispatch();
    const [formRegisterValues, handleRegisterChange] = useCustomForm({
        rName: "",
        rLastName: "",
        rCode: "",
        
      });
      const { rName, rLastName, rCode } = formRegisterValues;
      const { register, errors } = useForm();


    // const onSubmit = () => {
    //     console.log(rName, rCode );
    //     dispatch( startLogin( rName, rLastName, rCode ) );
    //     // openModal();
  
    // }
    const isNumberKey = (evt) =>{
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
      return true;
  }

    const handleLogin = (e) => {
      e.preventDefault();
        dispatch( startLogin( rCode, rName, rLastName ) );
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
        <form autoComplete="off" id="auth" >
       
           <label>Nombres: </label>
          <div className="auth__ugly-contain">
          <input
              type="text" 
              className="inputFeo"
              id="nombre"
              name="rName"
              value={rName}
              onChange={handleRegisterChange}
              ref={register({ required: true, minLength: 4 })}
          />
            {errors.rName && errors.rName.type === "required" && (
                <p> El nombre es requerido. </p>
            )}
            {errors.rName && errors.rName.type === "minLength" && (
                <p> Éste campo requiere un mínimo de 4 carácteres. </p>
            )}
          </div>
          {/* <br /> */}
            <label>Apellidos Paterno y Materno: </label>
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
          {errors.rLastName && errors.rLastName.type === "required" && (
              <p> El apellido es requerido. </p>
          )}
          {errors.rLastName && errors.rLastName.type === "minLength" && (
              <p> Éste campo requiere un mínimo de 4 carácteres. </p>
          )}
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
      
          {errors.rCode && errors.rCode.type === "required" && (
              <p> El código es requerido. </p>
          )}

          {errors.rCode && errors.rCode.type === "maxLength" && (
              <p> EL código permite un máximo de 8 dígitos. </p>
          )}
          </div>

          {/* <div className="form-group">
          <input
              type="submit"
              className="btnSubmit btn-lg btn-block"
              value="Create"
          />
          </div>      */}
        </form>

          {/* <div className="auth__img-elf">
              <img alt="LOGO" src={ Elfo } width="200"
              
              />
          </div> */}

          <div className="auth__img-elf2">
              <img alt="LOGO" src={ Elfo } width="200"
              
              />
          </div>
      </div>

      <div className="register__button" onClick={ handleLogin }>
        {/* <NavLink exact to="/mapa">Aceptar</NavLink> */}
        <a >Aceptar</a>
      </div>

      </div>
    )
}
