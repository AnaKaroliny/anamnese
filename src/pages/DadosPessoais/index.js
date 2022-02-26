import React, { useContext } from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';
import AppContext from '../../components/AppContext';

function DadosPessoais() {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    return (
        <div>
            <HeaderForm title={"Dados Pessoais"} />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            name="nome"
                            type="text"
                            onChange={myContext.handleChange.bind(this)}
                            value={formAluno.nome}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            name="sobrenome"
                            type="text"
                            onChange={myContext.handleChange.bind(this)}
                            value={formAluno.sobrenome}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSobrenome">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control
                            name="dataNascimento"
                            type="date"
                            onChange={myContext.handleChange.bind(this)}
                            value={formAluno.dataNascimento}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEndereco">
                        <Form>
                            <Row>
                                <Form.Label>Endereço</Form.Label>
                                <Col xs={8}>
                                    <Form.Control
                                        name="endCidade"
                                        placeholder="Cidade"
                                        onChange={myContext.handleChange.bind(this)}
                                        value={formAluno.endCidade}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        name="endEstado"
                                        placeholder="Estado"
                                        onChange={myContext.handleChange.bind(this)}
                                        value={formAluno.endEstado}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCep">
                        <Form>
                            <Row>
                                <Col xs={8}>
                                    <Form.Control
                                        name="endCep"
                                        placeholder="CEP"
                                        onChange={myContext.handleChange.bind(this)}
                                        value={formAluno.endCep}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numberPage={1} nextPage={"/corporal"} />
        </div>
    )
}

export default DadosPessoais;
