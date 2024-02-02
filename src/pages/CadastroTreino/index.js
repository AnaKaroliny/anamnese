import React from 'react';
import { Container, Table, Button, TableRow, TableCell, Input, Select, Option, Title } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';
import ExercicioService from '../../services/ExercicioService';

function ProfileName() {
    let { name } = useParams();
    return name;
}

class CadastroTreino extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // exercises: [
            //     {
            //         exercise: '',
            //         sets: '',
            //         repetitions: '',
            //         restTime: '',
            //         observations: ''
            //     }
            // ],
            daysWeek: [
                'Segunda-feira',
                'Terça-feira',
                'Quarta-feira',
                'Quinta-feira',
                'Sexta-feira',
                'Sábado',
                'Domingo'
            ],
            exercisesPerDay: {
                segunda: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                terca: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                quarta: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                quinta: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                sexta: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                sabado: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ],
                domingo: [
                    {
                        exercise: '',
                        sets: '',
                        repetitions: '',
                        restTime: '',
                        observations: ''
                    }
                ]
            },
            exercicios: [],
        };
    }

    // handleInputChange = (index, event) => {
    //     const { name, value } = event.target;
    //     const exercises = [...this.state.exercises];
    //     exercises[index][name] = value;
    //     this.setState({ exercises });
    // };

    // handleAddExercise = () => {
    //     const exercises = [...this.state.exercises];
    //     exercises.push({
    //         muscle: '',
    //         exercise: '',
    //         sets: '',
    //         repetitions: '',
    //         restTime: '',
    //         observations: ''
    //     });
    //     this.setState({ exercises });
    // };

    // handleRemoveExercise = (index) => {
    //     const exercises = [...this.state.exercises];
    //     exercises.splice(index, 1);
    //     this.setState({ exercises });
    // };

    componentDidMount() {
        ExercicioService.getExercicios((exercicios) => {
            const exercicioAux = Object.values(exercicios);
            this.setState({ exercicios: exercicioAux });
        });
    }

    handleInputChange = (day, index, event) => {
        const { name, value } = event.target;
        const exercisesPerDay = { ...this.state.exercisesPerDay };
        exercisesPerDay[day][index][name] = value;
        this.setState({ exercisesPerDay });
      };
      
      handleAddExercise = (day) => {
        const exercisesPerDay = { ...this.state.exercisesPerDay };
        exercisesPerDay[day].push({
          muscle: '',
          exercise: '',
          sets: '',
          repetitions: '',
          restTime: '',
          observations: ''
        });
        this.setState({ exercisesPerDay });
      };
      
      handleRemoveExercise = (day, index) => {
        const exercisesPerDay = { ...this.state.exercisesPerDay };
        exercisesPerDay[day].splice(index, 1);
        this.setState({ exercisesPerDay });
      };

    render() {
        const { daysWeek, exercisesPerDay, exercicios } = this.state;

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
                <HeaderForm />
                <Container>
                    <ProfileName />
                    {Object.keys(exercisesPerDay).map((day, dayIndex) => (
                        <Table key={dayIndex} >
                            <caption>{daysWeek[dayIndex]}</caption>
                            <tbody>
                                {exercisesPerDay[day].map((exercise, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Title>Exercício</Title>
                                        <Select
                                            name="exercise"
                                            value={exercise.exercise}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        >
                                            <Option value="">Selecione</Option>
                                            {Object.keys(exerciciosPorMusculo).map((musculo) => (
                                                <optgroup key={musculo} label={musculo}>
                                                    {exerciciosPorMusculo[musculo].map((exercicio, i) => (
                                                        <option key={i} value={exercicio}>{exercicio.label}</option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <Title>Séries</Title>
                                        <Select
                                            name="sets"
                                            value={exercise.sets}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
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
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Title>Tempo de Descanso</Title>
                                        <Select
                                            name="restTime"
                                            value={exercise.restTime}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
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
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                    {index === exercisesPerDay[day].length - 1 && (
                                        <Button onClick={() => this.handleAddExercise(day)}>+</Button>
                                    )}
                                    {index !== exercisesPerDay[day].length - 1 && (
                                        <Button onClick={() => this.handleRemoveExercise(day, index)}>x</Button>
                                    )}
                                    </TableCell>
                                </TableRow>
                                ))}
                            </tbody>
                        </Table>
                    ))};
                </Container>
            </div>
        );
    }
}

export default CadastroTreino;