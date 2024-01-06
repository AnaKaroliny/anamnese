import React from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

class TreinoB extends React.Component {
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
                                <option value="1">Supino inclinado (Peito)</option>
                                <option value="2">Crucifixo inclinado (Peito)</option>
                                <option value="3">Supino reto com barra (Peito)</option>
                            </Form.Select>        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 1</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Repetições</option>
                                <option value="1">15</option>
                                <option value="2">12</option>
                                <option value="3">10</option>
                                <option value="3">08</option>
                                <option value="3">06</option>
                            </Form.Select>        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 2</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Repetições</option>
                                <option value="1">15</option>
                                <option value="2">12</option>
                                <option value="3">10</option>
                                <option value="3">08</option>
                                <option value="3">06</option>
                            </Form.Select>        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 3</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Repetições</option>
                                <option value="1">15</option>
                                <option value="2">12</option>
                                <option value="3">10</option>
                                <option value="3">08</option>
                                <option value="3">06</option>
                            </Form.Select>        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 4</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="15"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="12"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="10"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="08"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}              
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Série 5</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="15"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="12"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="10"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="08"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                </div>
                            ))}             
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Tempo de descanso</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Tempo</option>
                                <option value="1">0s-30s</option>
                                <option value="2">30s-1min</option>
                                <option value="3">1min-2min</option>
                            </Form.Select>      
                        </Form.Group>

                    </Form>
                </FormContainer>
            </div>
        )

    }
}

export default TreinoB;
