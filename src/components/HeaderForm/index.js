import React, { useState, useEffect } from 'react';
import { HeaderContainer, ImageContainer, TitleContainer, GoBackButton, Title, LogoutButton } from './styles';
import logo from '../../assets/images/AcademiaGladiusLogo.jpeg';
import whatsappLogo from '../../assets/images/whatsapp.png';
import instagramLogo from '../../assets/images/instagram.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import LoginService from "../../services/LoginService";

export default function HeaderForm({ noGoBack, title }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function logout() {
        LoginService.logout();
        navigate("/login");
    }

    function isLogged() {
        LoginService.onAuthStateChanged((response) => {
            setIsLoggedIn(response.success); // Update the state variable
        });
    }

    useEffect(() => {
        isLogged(); // Call the isLogged function when the component mounts
    }, []);

    return (
        <div>
            <HeaderContainer>
                <Link to="/alunos">
                    <ImageContainer>
                        <img src={logo} width="70" height="70" className="logo" alt="Logo Jean Treinador" />
                    </ImageContainer>
                </Link>
                <TitleContainer>
                    <label className="header-title" xs={12} bg="blue" >
                        Jean treinador
                    </label>
                </TitleContainer>
                <div className="social-media">
                    <a href="https://wa.me/558892572062" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLogo} width="25" height="25" alt="Logo do WhatsApp" />
                    </a>
                    <a href="https://www.instagram.com/jean.f_treinador" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} width="25" height="25" alt="Logo do Instagram" />
                    </a>
                    {isLoggedIn && (
                        <LogoutButton onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /></LogoutButton>
                    )}
                </div>
            </HeaderContainer>

            {!noGoBack && (
                <GoBackButton onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></GoBackButton>
            )}

            <Title>{title}</Title>
        </div>
    )
}