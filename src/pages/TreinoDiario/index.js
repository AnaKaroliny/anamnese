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
    gif: 'https://i.pinimg.com/originals/18/00/d4/1800d4950bc366c7beb36f079a094ba9.gif'
  },
  {
    nome: 'Abdominal',
    serie: 3,
    repeticoes: 15,
    descanso: '1 min.',
    observacao: 'Manter os pés alinhados',
    gif: 'https://i.pinimg.com/originals/41/43/d0/4143d05c3b416208ca2d3d7b8c0264ca.gif'
  },
  {
    nome: 'Terra',
    serie: 4,
    repeticoes: 15,
    descanso: '1 min.',
    observacao: 'Manter os pés alinhados',
    gif: 'https://i.pinimg.com/originals/c7/94/3c/c7943c2ee3d1bc860a47f25163c9c526.gif'
  },
  {
    nome: 'Flexão de braço',
    serie: 3,
    repeticoes: 12,
    descanso: '1 min.',
    observacao: 'Manter o corpo alinhado',
    gif: 'https://i.pinimg.com/originals/ee/30/fc/ee30fc219a5cb0cb6d3cbf40cf7272f9.gif'
  },
  {
    nome: 'Remada curvada alternada',
    serie: 3,
    repeticoes: 12,
    descanso: '1 min.',
    observacao: 'Manter o corpo alinhado',
    gif: 'https://i.pinimg.com/originals/91/56/8c/91568c7d82bb33367208257810ff262c.gif'
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
                      <img src={exercicio.gif} width={'70%'} height={'70%'} alt="Exemplo de GIF" />
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
