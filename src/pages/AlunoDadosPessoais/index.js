import React from 'react';
import { Container, Title } from './styles';
import { useParams } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import HeaderForm from '../../components/HeaderForm';
import AlunoService from '../../services/AlunoService';

class AlunoDadosPessoais extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosPessoais: {},
        };
    }

    componentDidMount() {
        const { id } = this.props.params;

        AlunoService.getAluno(id, (aluno) => {
            this.setState({ dadosPessoais: aluno.dadosPessoais });
        });
    }

    formatDate = (dateToFormat) => {
        return <Moment format="DD/MM/yyyy hh:mm">{dateToFormat}</Moment>
    }

    render() {
        const { dadosPessoais } = this.state;

        return (
            <div>
                <HeaderForm />
                <Container>
                    <Title>Informações Pessoais de {dadosPessoais.nome} </Title>
                    <Form>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="nome">
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.nome} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="dataNascimento">
                                    <Form.Label>Data de Nascimento:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.dataNascimento} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="altura">
                                    <Form.Label>Altura:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.altura} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="pesoJejum">
                                    <Form.Label>Peso em Jejum:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.pesoJejum} />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="tipoTreino">
                                    <Form.Label>Tipo de Treino:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.tipoTreino} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="horarioTreino">
                                    <Form.Label>Horário de Treino:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.horarioTreino} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="telefone">
                                    <Form.Label>Telefone:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.telefone} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="cidade">
                                    <Form.Label>Cidade:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.cidade} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="estado">
                                    <Form.Label>Estado:</Form.Label>
                                    <Form.Control type="text" value={dadosPessoais.estado} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="dataCadastro">
                                    <Form.Label>Data de Cadastro:</Form.Label>
                                    <br />
                                    {this.formatDate(dadosPessoais.dataCadastro)}
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default (props) => (
    <AlunoDadosPessoais
        {...props}
        params={useParams()}
    />
);
