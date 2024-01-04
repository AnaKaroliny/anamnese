import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
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

    a {
        font-size: 18px;
        font-weight: 500;
        text-align: justify;
        margin-top: 20px;
    }

    .logo {
        margin-right: 5px;
        margin-bottom: 3px;
    }
`;
