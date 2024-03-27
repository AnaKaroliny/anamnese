import styled from 'styled-components';
import colors from '../../styles/colors';

export const FormContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

    label {
        font-size: 15px;
        color: ${colors.darkGrayText};
        font-weight: 500;
    }

    .form-control {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;

        &:focus {
            outline: none;
            border-color: ${colors.primary};
        }
    }
`;
