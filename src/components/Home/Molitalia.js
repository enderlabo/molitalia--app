import React from 'react';
import Logo from '../../assets/KV.png';
import Logo2 from '../../assets/logo-molitalia.png';
import WhiteToy from '../../assets/PNG/Recurso 15.png';
import GreenBuilding from '../../assets/PNG/Recurso 19.png';
import RedBanner from '../../assets/PNG/Recurso 14.png'
import BlueBuilding from '../../assets/PNG/Recurso 13.png';
import Bear from '../../assets/PNG/Recurso 12.png';
import BearRed from '../../assets/PNG/Recurso 18.png';
import OrangeBuilding from '../../assets/PNG/Recurso 4.png';
import Elf2 from '../../assets/PNG/Recurso 2.png';
import BrownBuilding from '../../assets/PNG/Recurso 10.png';
import Reno from '../../assets/PNG/Recurso 8.png';
import PinkBuilding from '../../assets/PNG/Recurso 1.png';
import Elfo3 from '../../assets/PNG/Recurso 3.png';
import Todinno from '../../assets/PNG/Recurso 6.png';
import Costa from '../../assets/PNG/Recurso 7.png';
import Dog from '../../assets/PNG/Recurso 5.png';
import Banner from '../../assets/PNG/Recurso 11.png';
import Arbol from '../../assets/PNG/Recurso 16.png';
import Guy from '../../assets/PNG/Recurso 17.png';
import Guy2 from '../../assets/PNG/niña.png';
import Fanny from '../../assets/PNG/Fanny.png'; 


import './styles/molitalia.css';
import { NavLink } from 'react-router-dom';

export const Molitalia = () => {

    const url = () =>{
    
       window.location.href = "https://appstouchperu.com/Apps/Molitalia/";
    } 
        
    return (
        <div className="map__contain">
            <div className="molitalia__logo">
                <img alt="LOGO" src={ Logo } width="350" />
            </div>    
            <div className="molitalia__logo-moli">
                <img alt="LOGO" src={ Logo2 } width="200" />
            </div>
            {/* Green building */}
            <div className="molitalia__5-7">
                <div className="img__5-7">
                    <img alt="5-7 Años" src={ GreenBuilding } width="120" />
                </div>

                <div className="img__whiteToy">
                    <img alt="Muñeco de nieve" src={ WhiteToy } width="80" />
                </div>

                <div className="img__redBanner">
                    <img alt="redBanner" src={ RedBanner } width="100"
                    height="40"
                    />
                </div> 

                <div className="img__fanny">
                    <img alt="LOGO" src={ Fanny } width="140" />
                </div>
            </div>
            {/* Blue building */}
            <div className="molitalia__0-2">
                <div className="img__0-2">
                    <img alt="0-2 Años" src={ BlueBuilding } width="120"  />
                </div>

                <div className="img__bear">
                    <img alt="img__bear" src={ Bear } width="80" />
                </div>

                <div className="img__bear-red">
                    <img alt="img__bearRed" width="60" src={ BearRed } />
                </div>
            </div> 

            {/* Orange Building */}
            <div className="molitalia__games">
                <div className="img__games">
                    <img alt="Logo" src={ OrangeBuilding } width="120"
                    onClick={ url } />
                </div>

                <div className="img__elf2">
                    <img alt="Logo" src={ Elf2 } width="100" />
                </div>
            </div>
            
            {/*Brown Building  */}
            <div className="molitalia__8-11" >
                <div className="img__8-11" >
                    <img alt="LOGO" width="120" src={ BrownBuilding } />
                </div>
                <div className="img__reno" >
                    <img alt="LOGO" width="120" src={ Reno } />
                </div>
                <div className="img__costa">
                    <img alt="LOGO" width="120" src={ Costa } />
                </div>
                <div className="img__dog">
                    <img alt="LOGO" src={ Dog } width="60" />
                </div>
                <div className="img__orangeBanner">
                    <img alt="LOGO" src = { Banner } width="130" />
                </div>
            </div>

            {/* Pink Building */}
            <div className="molitalia__2-4">
                <div className="img__2-4" >
                    <img alt="LOGO" src={ PinkBuilding } width="100" height="200" />
                </div>
                <div className="img__elfo3"  >
                    <img alt="LOGO" width="90" src={ Elfo3 } />
                </div>
                <div className="img__todinno" >
                    <img alt="LOGO" width="130" src={ Todinno } />
                </div>
            </div>

            {/* Merry C */}
            <div className="molitalia__arbol">
                <div className="img__arbol">
                    <img alt="LOGO" src={ Arbol } width="170" />
                </div>
            </div>

            {/* Yellow guy */}
            <div className="molitalia__yellowGuy">
                <div className="img__yellowGuy">
                    <img alt="LOGO" src={ Guy } width="140" />
                </div>

                <div className="img__guy">
                    <img alt="LOGO" src={ Guy2 } width="80" />
                </div>
            </div>

            

        </div>
    )
}
