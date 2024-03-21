import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';
import AppContext from '../../components/AppContext';

function Dados2() {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    return (
        <div>
            <HeaderForm title={"Dados de Saúde"} />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicMedicamento">
                        <Form.Label>Está em uso de algum medicamento e/ou suplemento? Quais? E quais as dosagens?</Form.Label>
                        <Form.Control as="textarea" name="descricaoMedicamento"
                            style={{ width: '350px', height: '100px' }}
                            onChange={myContext.handleChange.bind(this)} value={formAluno.descricaoMedicamento}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDoenca">
                        <Form.Label>Apresenta algum problema de saúde? Histórico familiar de alguma doença?</Form.Label>
                        <Form.Control as="textarea" name="descricaoDoenca"
                            style={{ width: '350px', height: '100px' }}
                            onChange={myContext.handleChange.bind(this)} value={formAluno.descricaoDoenca}
                        />
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numberPage={5} backPage={"/dados"} nextPage={"/submit"} />

        </div>
    )
}

export default Dados2;