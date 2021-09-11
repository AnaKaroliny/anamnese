import React from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

function DadosCorporais() {
    return (
        <div>
            <HeaderForm />
            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Peso em Jejum</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="groupTreino">
                        <Form>
                            <Row>
                                <Col xs={4}>
                                        <Form.Label>Altura</Form.Label>
                                        <Form.Control type="text" placeholder="ex: 1,62"/>
                                </Col>
                                <Col>
                                        <Form.Label>Data de nascimento</Form.Label>
                                        <Form.Control type="date" />
                                </Col>
                            </Row>
                        </Form>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHorarioDeTreino">
                        <Form.Label>Horário(s) de treino(s)</Form.Label>
                        <Form.Control type="text" placeholder="ex: 8:00 e 18:00"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHorarioDeTreino">
                        <Form.Label>Tipo(s) de treino(s)</Form.Label>
                        <Form.Control type="text" placeholder="ex: Musculação, corrida"/>
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numeracao={2} anteriorPage={"/"} proximaPage={"/saude"} />
        </div>
    )
}

export default DadosCorporais;
