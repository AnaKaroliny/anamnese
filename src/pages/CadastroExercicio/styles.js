import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    padding: 40px;

    form {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    select,
    input[type="text"] {
        width: 100%;
        padding: 10px;
        border: 1px solid ${colors.lightBackground};
        border-radius: 5px;

        &:focus {
            border-color: ${colors.primary};
            outline: none;
        }
    }

    button[type="submit"] {
        display: block;
        background-color: ${colors.primary};
        color: ${colors.white};
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 30px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th,
    td {
        padding: 10px;
        border: 1px solid ${colors.lightBackground};
    }

    th {
        background-color: ${colors.lightBackground};
        font-weight: bold;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        .input-block {
            flex: 3;
            margin-right: 10px;
        }

        button {
            flex: 1;
        }
    }

    .musculo {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
`;