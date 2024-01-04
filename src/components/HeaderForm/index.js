import React from 'react';
import { HeaderContainer, ImageContainer, TitleContainer } from './styles';
import logo from '../../assets/images/AcademiaGladiusLogo.jpeg';

export default function HeaderForm() {
    return (
        <div>
            <ImageContainer>
                <img src={logo} width="70" height="70" className="logo" />
            </ImageContainer>
            <HeaderContainer>
                <TitleContainer>
                    <label className="header-title" xs={12} bg="blue" >
                        Jean treinador
                    </label>
                </TitleContainer>
            </HeaderContainer>
        </div>
    )
}