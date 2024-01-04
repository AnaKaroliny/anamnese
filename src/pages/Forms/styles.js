import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    .filter {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;

        .filter-select {
            flex: 1;
        }

        .filter-search {
            flex: 4;
        }

        label {
            font-size: 15px;
            color: ${colors.darkGrayText};
            font-weight: 500;
            margin: 10px;
            width: 100%;
        }

        select {
            margin-left: 10px;
        }

        input {
            margin-left: 10px;
            width: 60%;
        }

        @media (max-width: 845px) {
            flex-direction: column;

            input {
                width: 80%;
            }
          }
    }
`;
