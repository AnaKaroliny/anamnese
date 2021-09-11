import React from 'react';
import { HeaderContainer, ImageContainer, TitleContainer } from './styles';

import logo from '../../assets/images/AcademiaGladiusLogo.jpg';

export default class HeaderForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderContainer>
                <ImageContainer>
                    <img src={logo} width="80" height="80" class="logo" />
                </ImageContainer>
                <TitleContainer>
                    <label class="header-title"  Placeholder xs={12} bg="blue" >
                        Academia Gladius Fitness
                    </label>
                </TitleContainer>
            </HeaderContainer>
        )
    }
}
