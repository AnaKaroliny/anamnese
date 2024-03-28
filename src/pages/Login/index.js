import React from 'react';
import { Container, Form, Input, Button, ErrorMessage } from './styles';
import { Link, Navigate } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';
import LoginService from '../../services/LoginService';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false,
            errorMessage: ''
        };
    }

    handleLogin = async () => {
        try {
            const { username, password } = this.state;
            LoginService.signInWithEmailAndPassword(username, password, (response) => {
                if (response.success) {
                    this.setState({ login: true });
                } else {
                    this.setState({ errorMessage: "Usuário ou senha inválidos, por favor tente novamente."});
                }
            });
        } catch (error) {
            this.setState({ errorMessage: 'Um erro aconteceu durante o login.' });
        }
    };

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        const { username, password, login, errorMessage } = this.state;

        if (login) {
            return <Navigate to="/alunos" />
        }

        return (
            <div>
                <HeaderForm noGoBack={true} />
                <Container>
                    <Form>
                        <Input
                            type="text"
                            placeholder="Usuário"
                            value={username}
                            onChange={this.handleUsernameChange}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={this.handlePasswordChange}
                        />
                        <Link className="login-button" onClick={this.handleLogin}><Button>Login</Button></Link>
                        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Login;
