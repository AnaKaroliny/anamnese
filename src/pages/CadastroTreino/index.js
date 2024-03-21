import React from 'react';
import { Container, Table, Button, TableRow, TableCell, Input, Select, Option, Title } from './styles';
import { useParams } from 'react-router-dom';

import HeaderForm from '../../components/HeaderForm';
import ExercicioService from '../../services/ExercicioService';
import AlunoService from '../../services/AlunoService';
import AlunosService from '../../services/AlunoService';

class CadastroTreino extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeAluno: '',
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
            series: [
                1,
                2,
                3,
                4,
                5
            ],
            repeticoes: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                30,
                40,
                50,
                100
            ],
            descanso: [
                "30 segundos",
                "1 a 3 minutos",
                "3 a 5 minutos"
            ],
            exerciciosPorDia: {
                musculo: '',
                exercicio: '',
                series: '',
                repeticoes: '',
                descanso: '',
                observacao: ''
            },
            treinos: [],
            activeTab: 'segunda' // Tab ativa inicialmente
        };
    }

    componentDidMount() {
        AlunoService.getAluno(this.props.params.id, (aluno) => {
            this.setState({ nomeAluno: aluno.dadosPessoais.nome });
        });

        ExercicioService.getExercicios((exercicios) => {
            const exercicioAux = Object.values(exercicios);
            this.setState({ exercicios: exercicioAux });
        });

        AlunoService.getTreinos(this.props.params.id, this.state.activeTab, (treinos) => {
            if (treinos) {
                const treinosAux = Object.values(treinos);
                this.setState({ treinos: treinosAux });
            }
        });
    }

    handleInputChange = (event) => {
        const { name, value, options, selectedIndex} = event.target;
        const { exerciciosPorDia } = this.state;

        if (name === 'exercicio') {
            const musculo = options[selectedIndex].dataset.musculo;
            exerciciosPorDia.musculo = musculo;
        }

        exerciciosPorDia[name] = value;
        this.setState({ exerciciosPorDia });
    };

    handleAddexercicio = () => {
        const { exerciciosPorDia, activeTab } = this.state;

        AlunoService.updateTreinos(this.props.params.id, exerciciosPorDia, activeTab);

        this.setState({ 
            exerciciosPorDia: {
                musculo: '',
                exercicio: '',
                series: '',
                repeticoes: '',
                descanso: '',
                observacao: ''
            }
        });
    };

    handleRemoverExercicio = (treinoId) => {
        AlunosService.removerExercicioDoTreino(this.props.params.id, this.state.activeTab, treinoId);
    };

    handleTabClick = (day) => {
        AlunoService.getTreinos(this.props.params.id, day, (treinos) => {
            const treinosAux = treinos ? Object.values(treinos) : [];
            this.setState({ treinos: treinosAux });
        });

        this.setState({ activeTab: day });
    };

    render() {
        const { nomeAluno, diasDaSemana, exerciciosPorDia, exercicios, activeTab, series, repeticoes, descanso, treinos } = this.state;

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
                <HeaderForm title={'Cadastro de Treino: ' + nomeAluno}/>
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
                        <div>
                            {/* <Title>Lista de treinos</Title> */}
                            <Table>
                            <thead>
                                <TableRow>
                                <TableCell>
                                    <Title>Músculo + Exercício</Title>
                                </TableCell>
                                <TableCell>
                                    <Title>Séries</Title>
                                </TableCell>
                                <TableCell>
                                    <Title>Repetições</Title>
                                </TableCell>
                                <TableCell>
                                    <Title>Descanso</Title>
                                </TableCell>
                                <TableCell>
                                    <Title>Observações</Title>
                                </TableCell>
                                <TableCell>
                                    <Title>Remover</Title>
                                </TableCell>
                                </TableRow>
                            </thead>
                            <tbody>
                                {treinos.map((treino, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{treino.musculo + ' - ' + treino.exercicio}</TableCell>
                                        <TableCell>{treino.series}</TableCell>
                                        <TableCell>{treino.repeticoes}</TableCell>
                                        <TableCell>{treino.descanso}</TableCell>
                                        <TableCell>{treino.observacao}</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() =>
                                                    this.handleRemoverExercicio(treino.id)
                                                }
                                            >
                                                x
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </tbody>
                            </Table>
                        </div>
                            <Table>
                                <tbody>
                                    <TableRow>
                                        <TableCell>
                                            <Title>Exercício:</Title>
                                            <Select
                                                name="exercicio"
                                                value={exerciciosPorDia.exercicio}
                                                onChange={(event) =>
                                                    this.handleInputChange(event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {Object.keys(exerciciosPorMusculo).map((musculo) => (
                                                    <optgroup key={musculo} label={musculo}>
                                                        {exerciciosPorMusculo[musculo].map(
                                                            (exercicio, i) => (
                                                                <option
                                                                    key={i}
                                                                    value={exercicio.label}
                                                                    data-musculo={musculo}
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
                                                name="series"
                                                value={exerciciosPorDia.series}
                                                onChange={(event) =>
                                                    this.handleInputChange(event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {series.map(
                                                    (set, i) => (
                                                        <option
                                                            key={i}
                                                            value={set}
                                                        >
                                                            {set}
                                                        </option>
                                                    )
                                                )}
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Repetições</Title>
                                            <Select
                                                name="repeticoes"
                                                value={exerciciosPorDia.repeticoes}
                                                onChange={(event) =>
                                                    this.handleInputChange(event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {repeticoes.map(
                                                    (rep, i) => (
                                                        <option
                                                            key={i}
                                                            value={rep}
                                                        >
                                                            {rep}
                                                        </option>
                                                    )
                                                )}
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Tempo de Descanso</Title>
                                            <Select
                                                name="descanso"
                                                value={exerciciosPorDia.descanso}
                                                onChange={(event) =>
                                                    this.handleInputChange(event)
                                                }
                                            >
                                                <Option value="">Selecione</Option>
                                                {descanso.map(
                                                    (rest, i) => (
                                                        <option
                                                            key={i}
                                                            value={rest}
                                                        >
                                                            {rest}
                                                        </option>
                                                    )
                                                )}
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Title>Observações</Title>
                                            <Input
                                                type="text"
                                                name="observacao"
                                                value={exerciciosPorDia.observacao}
                                                onChange={(event) =>
                                                    this.handleInputChange(event)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="actions">
                                            <Title>Adicionar</Title>
                                            <Button
                                                onClick={() =>
                                                    this.handleAddexercicio()
                                                }
                                            >
                                                +
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </tbody>
                            </Table>
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