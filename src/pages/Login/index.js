import React from 'react';
import { Container, Form, Input, Button, ErrorMessage } from './styles';

import HeaderForm from '../../components/HeaderForm';

function Login() {
  return (
    <div>
      <HeaderForm />
      <Container>
        <Form>
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button>Login</Button>
          <ErrorMessage>Invalido usuário e senha</ErrorMessage>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
