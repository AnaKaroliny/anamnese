import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Title, InputGroup } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';
import AlunoService from '../../services/AlunoService';

class Aluno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeAluno: '',
        };
    }

    componentDidMount() {
        AlunoService.getAluno(this.props.params.id, (aluno) => {
            this.setState({ nomeAluno: aluno.dadosPessoais.nome });
        });
    }

    render() {
        return (
            <div>
                <HeaderForm title={"Formulário de medidas: " + this.state.nomeAluno} />
                <Container>
                    <Form>
                        <div className="form-group">
                            <FormGroup>
                                <FormGroup>
                                    <Label htmlFor="pescoço">Pescoço</Label>
                                    <Input type="number" id="pescoço" name="pescoço" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="ombro">Ombro relaxado</Label>
                                    <InputGroup>
                                        <Input type="number" id="ombro-direito" name="ombro-direito" placeholder="Direito" />
                                        <Input type="number" id="ombro-esquerdo" name="ombro-esquerdo" placeholder="Esquerdo" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="braço-relaxado">Braço relaxado</Label>
                                    <InputGroup>
                                        <Input type="number" id="braço-relaxado-direito" name="braço-relaxado-direito" placeholder="Direito" />
                                        <Input type="number" id="braço-relaxado-esquerdo" name="braço-relaxado-esquerdo" placeholder="Esquerdo" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="braço-contraído">Braço contraído</Label>
                                    <InputGroup>
                                        <Input type="number" id="braço-contraído-direito" name="braço-contraído-direito" placeholder="Direito" />
                                        <Input type="number" id="braço-contraído-esquerdo" name="braço-contraído-esquerdo" placeholder="Esquerdo" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="antebraço">Antebraço</Label>
                                    <InputGroup>
                                        <Input type="number" id="antebraço-direito" name="antebraço-direito" placeholder="Direito" />
                                        <Input type="number" id="antebraço-esquerdo" name="antebraço-esquerdo" placeholder="Esquerdo" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="tórax-relaxado">Tórax Relaxado</Label>
                                    <Input type="number" id="tórax-relaxado" name="tórax-relaxado" />
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormGroup>
                                    <Label htmlFor="cintura">Cintura</Label>
                                    <Input type="number" id="cintura" name="cintura" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="abdome">Abdome</Label>
                                    <Input type="number" id="abdome" name="abdome" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="quadril">Quadril</Label>
                                    <Input type="number" id="quadril" name="quadril" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="coxa">Coxa</Label>
                                    <InputGroup>
                                        <Input type="number" id="coxa-direita" name="coxa-direita" placeholder="Direita" />
                                        <Input type="number" id="coxa-esquerda" name="coxa-esquerda" placeholder="Esquerda" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="panturrilha">Panturrilha</Label>
                                    <InputGroup>
                                        <Input type="number" id="panturrilha-direita" name="panturrilha-direita" placeholder="Direita" />
                                        <Input type="number" id="panturrilha-esquerda" name="panturrilha-esquerda" placeholder="Esquerda" />
                                    </InputGroup>
                                </FormGroup>
                            </FormGroup>
                        </div>
                        <div className="form-group-button">
                            <Button type="submit">Enviar</Button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default (props) => (
    <Aluno
        {...props}
        params={useParams()}
    />
);