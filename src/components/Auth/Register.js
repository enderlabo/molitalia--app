import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useCustomForm } from '../hooks/useForm';
import Molitalia from '../../assets/logo-molitalia.svg';
import Logo from '../../assets/KV.png';
import Elfo from '../../assets/elfo.png';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import { startLogin } from '../../redux/actions/authAction';

import './styles/auth.css';
import { customModalStyles } from '../../helpers';
import { NavLink } from 'react-router-dom';



Modal.setAppElement('#root')

export const Register = () => {

    const dispatch = useDispatch();
    const [formRegisterValues, handleRegisterChange] = useCustomForm({
        rName: "",
        rLastName: "",
        rCode: "",
        
      });
      const { rName, rLastName, rCode } = formRegisterValues;
      const [modalIsOpen,setIsOpen] = useState(false);
      const { register, handleSubmit, errors } = useForm();

      const openModal = () => {
        setIsOpen(true);
      }
     
      const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
      }
     
      const closeModal = () =>{
        setIsOpen(false);
      }

    const onSubmit = () => {
        console.log(rName, rCode );
        dispatch( startLogin( rName, rCode ) );
        openModal();
  
    }

    const handleLogin = () => {
        console.log('login')
    }

    return (
      <div className="auth__container">
          <div className="counter__img-logo">
            <img src={ Molitalia }  alt="LOGO" width="150" />
          </div>

          <div className="counter__img-contain">
           <img src={ Logo } alt="LOGO" width="550" height="350" />
          </div>

      <div className="auth__register">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
           <layout>Nombres: </layout>
          <div className="auth__ugly-contain">
          <input
              type="text"
              className="inputFeo"
              
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
          
            <layout>Apellidos: </layout>
          <div className="auth__ugly-contain">
          <input
              type="text"
              className="inputFeo"
              
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

            <layout>Código: </layout>
          <div className="auth__ugly-contain">
          <input
              type="password"
              className="inputFeo"
              
              name="rCode"
              autoComplete="off"
              value={rCode}
              onChange={handleRegisterChange}
              ref={register({
              required: true,
              minLength: 6,
              maxLength: 20,
              })}
          />
      
          {errors.rCode && errors.rCode.type === "required" && (
              <p> El código es requerido. </p>
          )}

          {errors.rCode && errors.rCode.type === "minLength" && (
              <p> El código requiere un mínimo de 6 dígitos. </p>
          )}

          {errors.rCode && errors.rCode.type === "maxLength" && (
              <p> EL código permite un máximo de 20 dígitos. </p>
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

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customModalStyles}
          contentLabel="Example Modal"
        >
 
          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Bienvenido a Molitalia</h2> */}
          <NavLink id="modal__a" exact to="/mapa" onClick={closeModal}>X</NavLink>
         <ReactPlayer 
          width="400px"
          height="300px"
          controls
          url="https://www.youtube.com/watch?v=AG7RHHi8GME"
         >

         </ReactPlayer>
        </Modal>

          <div className="auth__img-elf">
              <img alt="LOGO" src={ Elfo } width="200"
              onClick={ onSubmit }
              />
          </div>
      </div>

      <div className="register__button">
          <p href="/registro" >Aceptar</p>
        </div>

      </div>
    )
}
