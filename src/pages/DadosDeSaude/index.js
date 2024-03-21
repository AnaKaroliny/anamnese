import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';
import AppContext from '../../components/AppContext';

function DadosDeSaúde() {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    return (
        <div>
            <HeaderForm title={"Dados de Saúde"} />

            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicHorasSono">
                        <Form.Label>Costuma dormir bem? Quantas horas em média?</Form.Label>
                        <Form.Control as="textarea" name="descricaoHorasSono"
                            style={{ width: '350px', height: '100px' }}
                            onChange={myContext.handleChange.bind(this)} value={formAluno.descricaoHorasSono}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicObjetivo">
                        <Form.Label>Como se sente em relação ao seu físico e qual seu objetivo a curto e longo prazo?</Form.Label>
                        <Form.Control as="textarea" name="descricaoObjetivo"
                            style={{ width: '350px', height: '100px' }}
                            onChange={myContext.handleChange.bind(this)} value={formAluno.descricaoObjetivo}
                        />
                    </Form.Group>


                </Form>
            </FormContainer>

            <FooterForm numberPage={3} backPage={"/corporal"} nextPage={"/dados"} />

        </div>
    )
}

export default DadosDeSaúde;
