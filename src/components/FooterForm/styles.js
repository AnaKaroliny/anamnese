import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    position: absolute;
    bottom: -80px;
    width: 100%;

    .footer {
        width: 100%;
        height: 56px;
        border-radius: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        /* -webkit-box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91);
        -moz-box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91);
        box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91); */
    }

    .disabled {
        visibility: hidden;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 56px;
    border-radius: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding-left: 80px;
    // -webkit-box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91);
    // -moz-box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91);
    // box-shadow: 3px -3px 4px 0px rgba(51,51,51,0.91);
    background-color: ${colors.darkPrimary};

    .container-numberPage {
        // background-color: #0000002b;
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
