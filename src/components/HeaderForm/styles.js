import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
    position: relative;
    background-color: ${colors.secondary};
    height: 82px;

    @media(max-width: 420px) {
        width: 50px;
        height: 82px;
        background-color: transparent;
        border-style: solid;
        border-width: 50px 0 50px 420px;
        border-color: ${colors.secondary} transparent transparent ${colors.secondary};
        overflow: hidden;
    }
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
    padding-left: 60px;

    .header-title {
        font-family: 'Bebas Neue', cursive;
        font-size: 30px;
        color: ${colors.darkPrimary};
        font-weight: unset;
    }
`;
