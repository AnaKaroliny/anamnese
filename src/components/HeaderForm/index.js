import React from 'react';
import { HeaderContainer, ImageContainer, TitleContainer } from './styles';
import logo from '../../assets/images/AcademiaGladiusLogo.jpeg';
import whatsappLogo from '../../assets/images/whatsapp.png';
import instagramLogo from '../../assets/images/instagram.png';
import { Link } from 'react-router-dom';

export default function HeaderForm() {
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
        </div>
    )
}