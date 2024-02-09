import React from 'react';
import { Container, Table, Button, TableRow, TableCell, Input, Select, Option, Title } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';
import ExercicioService from '../../services/ExercicioService';

class CadastroTreino extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diasDaSemana: [
                { label: 'Segunda', value: 'segunda' },
                { label: 'Terça', value: 'terça' },
                { label: 'Quarta', value: 'quarta' },
                { label: 'Quinta', value: 'quinta' },
                { label: 'Sexta', value: 'sexta' },
                { label: 'Sábado', value: 'sábado' },
                { label: 'Domingo', value: 'domingo'}
            ],
            exercicios: [],
            exerciciosPorDia: [{
                muscle: '',
                exercise: '',
                sets: '',
                repetitions: '',
                restTime: '',
                observations: ''
            }],
            activeTab: 'segunda' // Tab ativa inicialmente
        };
    }

    componentDidMount() {
        ExercicioService.getExercicios((exercicios) => {
            const exercicioAux = Object.values(exercicios);
            this.setState({ exercicios: exercicioAux });
        });
    }

    handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const { exerciciosPorDia } = this.state;
        exerciciosPorDia[index][name] = value;
        this.setState({ exerciciosPorDia });
    };

    handleAddExercise = () => {
        const { exerciciosPorDia } = this.state;
        exerciciosPorDia.push({
            muscle: '',
            exercise: '',
            sets: '',
            repetitions: '',
            restTime: '',
            observations: ''
        });
        this.setState({ exerciciosPorDia });
    };

    handleRemoveExercise = (index) => {
        const { exerciciosPorDia } = this.state;
        exerciciosPorDia.splice(index, 1);

        this.setState({ exerciciosPorDia });
    };

    handleTabClick = (day) => {
        this.setState({ activeTab: day });
    };

    render() {
        const { diasDaSemana, exerciciosPorDia, exercicios, activeTab } = this.state;

        // Agrupar exercícios por músculo
        const exerciciosPorMusculo = {};

        for (const musculoId in exercicios) {
            if (exercicios.hasOwnProperty(musculoId)) {
                const { label: musculo, ...exerciciosDoMusculo } = exercicios[musculoId];

                exerciciosPorMusculo[musculo] = Object.values(exerciciosDoMusculo);
            }
        }

        return (
            <div>
                <HeaderForm title={'Cadastro de Treino: ' + this.props.params.name}/>
                <Container>
                    <div className="tabs">
                        {diasDaSemana.map((day, index) => (
                            <button
                                key={index}
                                className={`tab ${activeTab === day.value.toLowerCase() ? 'active' : ''}`}
                                onClick={() => this.handleTabClick(day.value.toLowerCase())}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        {Object.keys(exerciciosPorDia).map((exercise, index) => (
                            <Table
                                key={index}
                            >
                                <tbody>
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Title>Exercício {index + 1}:</Title>
                                            <Select
                                                name="exercise"
                                                value={exercise.exercise}
                                                onChange={(event) =>
                                                    this.handleInputChange(index, event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {Object.keys(exerciciosPorMusculo).map((musculo) => (
                                                    <optgroup key={musculo} label={musculo}>
                                                        {exerciciosPorMusculo[musculo].map(
                                                            (exercicio, i) => (
                                                                <option
                                                                    key={i}
                                                                    value={exercicio}
                                                                >
                                                                    {exercicio.label}
                                                                </option>
                                                            )
                                                        )}
                                                    </optgroup>
                                                ))}
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Séries</Title>
                                            <Select
                                                name="sets"
                                                value={exercise.sets}
                                                onChange={(event) =>
                                                    this.handleInputChange(index, event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {/* Adicione as opções de séries aqui */}
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Repetições</Title>
                                            <Input
                                                type="text"
                                                name="repetitions"
                                                value={exercise.repetitions}
                                                onChange={(event) =>
                                                    this.handleInputChange(index, event)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Title>Tempo de Descanso</Title>
                                            <Select
                                                name="restTime"
                                                value={exercise.restTime}
                                                onChange={(event) =>
                                                    this.handleInputChange(index, event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Observações</Title>
                                            <Input
                                                type="text"
                                                name="observations"
                                                value={exercise.observations}
                                                onChange={(event) =>
                                                    this.handleInputChange(index, event)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="actions">
                                            {index === exerciciosPorDia.length - 1 && (
                                                <Button
                                                    onClick={() =>
                                                        this.handleAddExercise()
                                                    }
                                                >
                                                    +
                                                </Button>
                                            )}
                                            {index !== exerciciosPorDia.length - 1 && (
                                                <Button
                                                    onClick={() =>
                                                        this.handleRemoveExercise(index)
                                                    }
                                                >
                                                    x
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                </tbody>
                            </Table>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default (props) => (
    <CadastroTreino
        {...props}
        params={useParams()}
    />
);