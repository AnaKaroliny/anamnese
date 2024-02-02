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

            select {
                width: 60%;
                height: 30px;
                border: 1px solid;
                border-radius: 5px;
                padding: 5px;
                font-size: 15px;
                color: ${colors.darkGrayText};
                font-weight: 500;
            }
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
    
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding-bottom: 40px;
    }
    
    .pagination a {
        color: ${colors.primary};
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 10px;
        border: 1px solid ${colors.primary};
        border-radius: 5px;
        transition: background-color 0.3s ease;
        text-decoration: none; /* Adicionado para remover a linha abaixo do link */
    }
    
    .pagination a:hover {
        background-color: ${colors.primary};
        color: #fff;
    }
    
    .pagination .active a {
        font-weight: bold;
        background-color: ${colors.primary};
        color: #fff;
    }
`;
