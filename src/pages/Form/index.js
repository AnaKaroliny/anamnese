import React from 'react';
import { Container, Table, Button, TableRow, TableCell, Input, Select, Option } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';

function ProfileName() {
    let { name } = useParams();
    return name;
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [
                {
                    exercise: '',
                    sets: '',
                    repetitions: '',
                    restTime: '',
                    observations: ''
                }
            ],
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
            }
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
        const { exercises, daysWeek, exercisesPerDay } = this.state;
        return (
            <div>
                <HeaderForm />
                <Container>
                    <ProfileName />
                    {Object.keys(exercisesPerDay).map((day, dayIndex) => (
                        <Table key={dayIndex}>
                            <h5>{daysWeek[dayIndex]}</h5>
                            <tbody>
                                {exercisesPerDay[day].map((exercise, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <TableCell>Exercício</TableCell>
                                        <Select
                                            name="exercise"
                                            value={exercise.exercise}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        >
                                            <Option value="">Selecione</Option>
                                            {/* Adicione as opções de exercícios aqui */}
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>Séries</TableCell>
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
                                        <TableCell>Repetições</TableCell>
                                        <Input
                                            type="text"
                                            name="repetitions"
                                            value={exercise.repetitions}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>Tempo de Descanso</TableCell>
                                        <Select
                                            name="restTime"
                                            value={exercise.restTime}
                                            onChange={(event) => this.handleInputChange(day, index, event)}
                                        >
                                            <Option value="">Selecione</Option>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>Observações</TableCell>
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

export default Form;