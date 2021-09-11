import styled from 'styled-components';
import colors from '../../styles/colors';

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    label {
        font-size: 15px;
        color: ${colors.darkGrayText};
        font-weight: 500;
    }
`;
