import styled from 'styled-components';
import colors from '../../styles/colors';

export const FormContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    label {
        font-size: 18px;
        color: ${colors.darkGrayText};
        font-weight: 500;
        text-align: justify;
    }

    .btn-primary {
        color: ${colors.white};
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        padding: 10px 20px;
        font-size: 18px;
        margin-top: 20px;
        height: 50px;
        width: 100%;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: ${colors.primary};
            border-color: ${colors.primary};
        }
    }
`;
