import React from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

function DadosPessoais() {
    return (
        <div>
            <HeaderForm title={"Dados Pessoais"} />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label >Nome</Form.Label>
                        <Form.Control type="text" />      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSobrenome">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEndereco">
                        <Form>
                            <Row>
                                <Form.Label>Endereço</Form.Label>
                                <Col xs={8}>
                                    <Form.Control placeholder="Cidade" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Estado" />
                                </Col>
                            </Row>
                        </Form>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCep">
                        <Form>
                            <Row>
                                <Col xs={8}>
                                    <Form.Control placeholder="CEP" />
                                </Col>
                            </Row>
                        </Form>
                    </Form.Group>
                </Form>
                <FooterForm numeracao={1} anteriorPage={"/"} proximaPage={"/corporal"} />
            </FormContainer>

        </div>
    )
}

export default DadosPessoais;
