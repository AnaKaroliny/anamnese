import React from 'react';
import { HeaderContainer, ImageContainer, TitleContainer } from './styles';
import logo from '../../assets/images/AcademiaGladiusLogo.jpg';

export default function HeaderForm() {
    return (
        <div>
            <ImageContainer>
                <img src={logo} width="80" height="80" class="logo" />
            </ImageContainer>
            <HeaderContainer />
            <TitleContainer>
                <label class="header-title" Placeholder xs={12} bg="blue" >
                    Academia Gladius Fitness
                </label>
            </TitleContainer>
        </div>
    )
}