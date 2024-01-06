import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 20px;
`;

export const Label = styled.label`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
