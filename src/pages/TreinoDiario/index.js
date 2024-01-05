import React, { useState } from 'react';
import { Container, Table, Button } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';

const exercicios = [
  {
    nome: 'Agachamento',
    serie: 3,
    repeticoes: 10,
    descanso: '1 min.',
    observacao: 'Manter a postura correta',
    gif: 'http://muscul.az.free.fr/pt/Mc25.gif'
  },
  {
    nome: 'Leg press',
    serie: 3,
    repeticoes: 15,
    descanso: '1 min.',
    observacao: 'Manter os pés alinhados',
    gif: 'http://muscul.az.free.fr/pt/mc08m.gif'
  },
  {
    nome: 'Terra',
    serie: 4,
    repeticoes: 15,
    descanso: '1 min.',
    observacao: 'Manter os pés alinhados',
    gif: 'http://muscul.az.free.fr/pt/Mlomb5b.gif'
  },
  {
    nome: 'Flexão de braço',
    serie: 3,
    repeticoes: 12,
    descanso: '1 min.',
    observacao: 'Manter o corpo alinhado',
    gif: 'http://muscul.az.free.fr/pt/md15p.gif'
  },
  {
    nome: 'Remada curvada alternada',
    serie: 3,
    repeticoes: 12,
    descanso: '1 min.',
    observacao: 'Manter o corpo alinhado',
    gif: 'http://muscul.az.free.fr/pt/md15p.gif'
  },
  // Adicione mais exercícios aqui
];

function DiaDaSemana() {
  let { dia } = useParams();
  return dia;
}

function TreinoDiario() {
    const [expandedRows, setExpandedRows] = useState([]);

    const handleRowClick = (index) => {
        const newExpandedRows = [...expandedRows];
        if (newExpandedRows.includes(index)) {
        newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
        } else {
        newExpandedRows.push(index);
        }
        setExpandedRows(newExpandedRows);
    };

  return (
    <div>
      <HeaderForm />
      <Container>
        <h1>Treino: {DiaDaSemana()}</h1>
        <Table>
          <thead>
            <tr>
              <th>Exercício</th>
              <th>Série x Repetições</th>
              <th>Observações</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {exercicios.map((exercicio, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)}>
                  <td>{exercicio.nome}</td>
                  <td>{exercicio.serie} x {exercicio.repeticoes} <br /> Descanso: {exercicio.descanso}</td>
                  <td>{exercicio.observacao}</td>
                  <td>
                    <Button>Ver</Button>
                  </td>
                </tr>
                {expandedRows.includes(index) && (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <img src={exercicio.gif} alt="Exemplo de GIF" />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TreinoDiario;
