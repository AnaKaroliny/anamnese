import React from 'react';
import { Form } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

function Dados2() {
    return (
        <div>
            <HeaderForm title={"Dados2"} />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Está em uso de algum medicamento e/ou suplemento? Quais? E quais as dosagens?</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Apresenta algum problema de saúde? Histórico familiar de alguma doença?</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numberPage={5} backPage={"/dados"} nextPage={"/submit"} />

        </div>
    )
}

export default Dados2;