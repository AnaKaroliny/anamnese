import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleChange(event) {
        this.setState({value: event.target.value});
    }

        handleSubmit(event) {
        console.log('Um nome foi enviado: ' + JSON.stringify(this.state.value));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <HeaderForm />
                <FormContainer>
                    <Form onSubmit={this.handleSubmit}>
                    {/* <label>
                        Seus dados serão enviados.
                    </label> */}
                    <Button variant="primary" type="submit">
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
