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

        .cadastro-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: ${colors.primary};
            color: ${colors.white};
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
        }
        
        .cadastro-button:hover {
            background-color: ${colors.primaryDark};
        }
    }

    .group-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .group-item-buttons {
            display: flex;
            flex-direction: row;
            padding: 5px;
            background-color: ${colors.white};
            margin-bottom: 5px;
        }

        .item-button {
            display: inline-block;
            padding: 10px;
            color: ${colors.lightGray};
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
            font-size: 20px;
        
            &:hover {
                color: ${colors.primary};
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    
    .pagination a {
        color: #007bff;
        cursor: pointer;
        margin: 0 5px;
    }
    
    .pagination .active a {
        font-weight: bold;
    }
`;
