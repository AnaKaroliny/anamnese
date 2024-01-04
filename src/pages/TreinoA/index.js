import React from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

class TreinoA extends React.Component {
    render() {
        return (
            <div>
                <HeaderForm />
    
                <FormContainer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Exercício</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Lista de exercícios</option>
                                <option value="1">Supino inclinado</option>
                                <option value="2">Crucifixo inclinado</option>
                                <option value="3">Supino reto com barra</option>
                            </Form.Select>      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 1</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 2</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 3</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 4</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 5</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Tempo de descanso</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                    </Form>
                </FormContainer>
            </div>
        )

    }
}

export default TreinoA;
