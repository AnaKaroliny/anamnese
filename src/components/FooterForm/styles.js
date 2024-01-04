import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    .footer {
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .disabled {
        visibility: hidden;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.darkPrimary};

    .container-numberPage {
        font-family: 'Bebas Neue', cursive;
        font-size: 28px;
        font-weight: 600px;
        color: ${colors.white};
        padding-left: 18px;
        padding-right: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;
