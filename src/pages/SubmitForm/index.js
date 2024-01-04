import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

class SubmitForm extends React.Component {
    state = { user: null, error: null };

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        console.log('Um nome foi enviado: ' + JSON.stringify(this.state.value));
        event.preventDefault();

        try {
            let user = "User";
            this.setState({ user });
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        let { user, error } = this.state;

        return (
            <div>
                <HeaderForm />
                {error && <p>{error.message}</p>}
                {user && (
                    <Navigate to="/sent" replace={true} />
                )}
                <FormContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <label>
                            Ao clicar no botão abaixo, você estará enviando seus dados para nós. Após o envio, o treinador Jean entrará em contato com você o mais rápido possível para fornecer todas as informações necessárias.
                        </label>
                        <br/>
                        <Button variant="primary" type="submit" className="btn btn-primary">
                            Enviar
                        </Button>
                    </Form>
                </FormContainer>
                <FooterForm numberPage={6} backPage={"/dados2"} />
            </div>
        );
    }
}

export default SubmitForm;
