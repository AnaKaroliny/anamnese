import React from 'react';
import { Form } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

function DadosDeSaúde() {
    return (
        <div>
            <HeaderForm />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Costuma dormir bem? Quantas horas em média?</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Como se sente em relação ao seu físico e qual seu objetivo a curto e longo prazo?</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>


                </Form>
            </FormContainer>

            <FooterForm numberPage={3} backPage={"/corporal"} nextPage={"/dados"} />

        </div>
    )
}

export default DadosDeSaúde;
