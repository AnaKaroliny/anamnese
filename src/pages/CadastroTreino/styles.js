import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    caption {
        margin: 10px;
        font-size: 18px;
        font-weight: bold;
        color: ${colors.primary};
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid #ccc;
`;

export const TableRow = styled.tr`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const TableCell = styled.td`
    flex: 1;
    padding-bottom: 10px;
    width: 100%;
    margin-right: 10px;
`;

export const Title = styled.h6`
    flex: 1;
    padding-bottom: 10px;
    width: 100%;
    margin-right: 10px;
`;

export const Button = styled.button`
    margin-top: 30px;
    padding: 5px 10px;
    background-color: #ccc;
    border: none;
    color: #fff;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: ${colors.primary};
    }
`;

export const Select = styled.select`
    margin-bottom: 5px;
    padding: 5px;
    width: 100%;

     &:focus {
        border: 1px solid ${colors.primary};
        outline: none;
    }
`;

export const Option = styled.option``;
