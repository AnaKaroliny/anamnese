import React from 'react';
import HeaderForm from '../../components/HeaderForm';
import { Container } from './styles';
import logo from '../../assets/images/whatsapp.png';

class FormSent extends React.Component {
    render() {
        return (
            <div>
                <HeaderForm />
                <Container>
                    <label>
                        Obrigado por compartilhar suas informações! Estamos aqui para ajudá-lo em sua jornada.
                    </label>
                    <br />
                    <label>
                        Se você precisar entrar em contato com o Jean, basta clicar no número abaixo e você será redirecionado ao WhatsApp:
                    </label>
                    <div className="whatsapp">
                        <img src={logo} width="30" height="30" alt="Logo do WhatsApp" className="logo" />
                        <a href="https://wa.me/558892572062">88 9257-2062</a>
                    </div>
                </Container>
            </div>
        );
    }
}

export default FormSent;
