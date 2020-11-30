import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useCustomForm } from '../hooks/useForm';
import Molitalia from '../../assets/logo-molitalia.svg';
import Logo from '../../assets/KV.png';
import Elfo from '../../assets/elfo.svg';
import Modal from 'react-modal';

import { login } from '../../redux/actions/authAction';

import './styles/auth.css';
import { customModalStyles } from '../../helpers';



Modal.setAppElement('#root')

export const Register = () => {

  const dispatch = useDispatch();
  let subtitle;

    const [formRegisterValues, handleRegisterChange] = useCustomForm({
        rName: "",
        rLastName: "",
        rCode: "",
        
      });
      const { rName, rLastName, rCode } = formRegisterValues;
      const [modalIsOpen,setIsOpen] = useState(false);

      const openModal = () => {
        setIsOpen(true);
      }
     
      const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
      }
     
      const closeModal = () =>{
        setIsOpen(false);
      }

    const onSubmit = (data) => {
        console.log('Register successfully' + data);
        openModal();
        dispatch( login(rCode, rName) );
  
    }

    const handleLogin = () => {
        console.log('login')
    }

    const { register, handleSubmit, errors } = useForm();
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

            <layout>Códigos: </layout>
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
          <button onClick={closeModal}>Cerrar</button>
          <div>Soy un modal</div>
          {/* <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
        </Modal>

          <div className="auth__img-elf">
              <img alt="LOGO" src={ Elfo } width="200"
              onClick={ onSubmit }
              />
          </div>
      </div>

      </div>
    )
}
