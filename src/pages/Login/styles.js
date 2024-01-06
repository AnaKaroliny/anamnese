import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.primary};
  color: #fff;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;