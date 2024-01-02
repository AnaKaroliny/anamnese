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

    @media(min-height: 700px) {
        height: 85vh;
    }
`;
