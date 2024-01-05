import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    font-size: 12px;
    border-bottom: 1px solid ${colors.darkPrimary};
  }

  th {
    background-color: ${colors.primary};
    padding-left: 10px;
    color: ${colors.white};
    font-weight: bold;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 5px 10px;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.darkPrimary};
    color: ${colors.white};
  }
`;