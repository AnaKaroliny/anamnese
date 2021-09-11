import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
    background-color: ${colors.black};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ImageContainer = styled.div`
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
    padding-bottom: 20px;

    .header-title {
        font-size: 16px;
        color: ${colors.primary};
        font-weight: unset;
    }
`;
