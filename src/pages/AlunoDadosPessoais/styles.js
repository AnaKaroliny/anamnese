/* styles.js */
import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    margin: 0 auto;
    padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    .form-group {
        display: flex;
        flex-direction: row;
    }

    .form-group-button {
        display: flex;
        justify-content: center;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    width: 100%;
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    padding-bottom: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;