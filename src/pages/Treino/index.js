import React from 'react';
import { Container, Label, ButtonContainer, Button } from './styles';

import HeaderForm from '../../components/HeaderForm';
import { useNavigate } from 'react-router-dom';

function Treino() {
    const navigate = useNavigate();

    function redirectToTreinoDiario(dia) {
        navigate(`/treinoDiario/${dia}`);
    }

    // render() {
        return (
            <div>
                <HeaderForm />
                <Container>
                    <Label>Escolha o dia da semana:</Label>
                    <ButtonContainer>
                        <Button onClick={() => redirectToTreinoDiario('Segunda')}>Segunda</Button>
                        <Button onClick={() => redirectToTreinoDiario('Terça')}>Terça</Button>
                        <Button onClick={() => redirectToTreinoDiario('Quarta')}>Quarta</Button>
                        <Button onClick={() => redirectToTreinoDiario('Quinta')}>Quinta</Button>
                        <Button onClick={() => redirectToTreinoDiario('Sexta')}>Sexta</Button>
                        <Button onClick={() => redirectToTreinoDiario('Sábado')}>Sábado</Button>
                        <Button onClick={() => redirectToTreinoDiario('Domingo')}>Domingo</Button>
                    </ButtonContainer>
                </Container>
            </div>
        );
    // }

    // redirectToTreinoDiario(dia) {
        // Redirecionar para "treinoDiario" passando o dia por parâmetro
        // useLogoutTimer(`/treinoDiario/${dia}`);
    // }
}

export default Treino;
