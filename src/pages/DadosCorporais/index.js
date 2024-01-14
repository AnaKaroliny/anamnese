import React, { useContext } from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';
import AppContext from '../../components/AppContext';

function DadosCorporais() {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    return (
        <div>
            <HeaderForm />
            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Peso em Jejum</Form.Label>
                        <Form.Control name="pesoJejum" type="number" onChange={myContext.handleChange.bind(this)} value={formAluno.pesoJejum}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="groupTreino">
                        <Row>
                            <Col xs={4}>
                                <Form.Label>Altura</Form.Label>
                                <Form.Control name="altura" type="text" placeholder="ex: 1,62" onChange={myContext.handleChange.bind(this)} value={formAluno.altura}/>
                            </Col>
                            <Col>
                                <Form.Label>Data de nascimento</Form.Label>
                                <Form.Control name="dataNascimento" type="date" onChange={myContext.handleChange.bind(this)} value={formAluno.dataNascimento}/>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHorarioDeTreino">
                        <Form.Label>Horário(s) de treino(s)</Form.Label>
                        <Form.Control name="horarioTreino" type="text" placeholder="ex: 8:00 e 18:00" onChange={myContext.handleChange.bind(this)} value={formAluno.horarioTreino}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHorarioDeTreino">
                        <Form.Label>Tipo(s) de treino(s)</Form.Label>
                        <Form.Control name="tipoTreino" type="text" placeholder="ex: Musculação, corrida" onChange={myContext.handleChange.bind(this)} value={formAluno.tipoTreino}/>
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numberPage={2} backPage={"/dadosPessoais"} nextPage={"/saude"} />
        </div>
    )
}

export default DadosCorporais;
