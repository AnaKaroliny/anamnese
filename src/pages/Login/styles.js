import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  .login-button {
    width: 100%;
    border: none;
    text-align: center;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    &:hover {
      background-color: ${colors.primaryDark};
      color: #fff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 60px;
  border: 0px solid #ccc;
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
  text-align: center;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;