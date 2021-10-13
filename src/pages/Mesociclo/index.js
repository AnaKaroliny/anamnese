import React from 'react';
import { Form, Row, Col,} from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

class Mesociclo extends React.Component {
    render() {
        return (
            <div>
                <HeaderForm />
    
                <FormContainer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 1</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 2</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 3</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 4</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 5</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 6</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 7</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label >Semana 8</Form.Label>
                            <Form.Control type="text" onChange={this.props.handleChange} />      
                        </Form.Group>







                    </Form>
                </FormContainer>
            </div>
        )

    }
}

export default Mesociclo;
