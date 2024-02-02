import React from 'react';
import { HeaderContainer, ImageContainer, TitleContainer, GoBackButton } from './styles';
import logo from '../../assets/images/AcademiaGladiusLogo.jpeg';
import whatsappLogo from '../../assets/images/whatsapp.png';
import instagramLogo from '../../assets/images/instagram.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function HeaderForm({ noGoBack }) {
    const navigate = useNavigate();

    return (
        <div>
            <HeaderContainer>
                <Link to="/">
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
                </div>
            </HeaderContainer>

            {!noGoBack && (
                <GoBackButton onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></GoBackButton>
            )}
        </div>
    )
}