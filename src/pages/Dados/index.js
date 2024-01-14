import React from 'react';
import { Form } from 'react-bootstrap';

import { FormContainer } from './styles';
import HeaderForm from '../../components/HeaderForm';
import FooterForm from '../../components/FooterForm';

function Dados() {
    return (
        <div>
            <HeaderForm title={"Dados"} />
            <FormContainer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Divisão de treino atual na musculação (quantas vezes treina na semana, grupos musculares do dia, quantidade de séries, etc.). Caso fizer outros exercícios descreva o treino e frequência.</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPesoEmJejum">
                        <Form.Label>Apresenta histórico de lesão e/ou cirurgias? (Caso possua encaminhe os exames, tempo de fitoterapia, e protocolos usados para a recuperação).</Form.Label>
                        <Form.Control as="textarea"
                            style={{ width: '350px', height: '100px' }} 
                        />
                    </Form.Group>
                </Form>
            </FormContainer>
            <FooterForm numberPage={4} backPage={"/saude"} nextPage={"/dados2"} />

        </div>
    )
}

export default Dados;