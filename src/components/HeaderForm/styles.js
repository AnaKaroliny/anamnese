import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
    position: relative;
    background-color: ${colors.secondary};
    height: 82px;
`;

export const ImageContainer = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    .logo {
        border-radius: 50px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .header-title {
        font-family: 'Bebas Neue', cursive;
        font-size: 30px;
        color: ${colors.darkPrimary};
        font-weight: unset;
    }
`;
