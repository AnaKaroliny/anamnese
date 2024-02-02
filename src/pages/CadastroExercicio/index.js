import React from 'react';
import { Container } from './styles';

import HeaderForm from '../../components/HeaderForm';
import ExercicioService from '../../services/ExercicioService';

class CadastroExercicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musculo: '',
            exercicioNome: '',
            exercicios: [], // Array para armazenar os exercícios cadastrados
            musculos: [],
        };
    }

    componentDidMount() {
        ExercicioService.getMusculos((musculos) => {
            this.setState({ musculos });
        });

        ExercicioService.getExercicios((exercicios) => {
            const exercicioAux = Object.values(exercicios);
            this.setState({ exercicios: exercicioAux });
        });
    }

    handleMusculoChange = (event) => {
        if (event.target.value) {
            this.setState({ musculo: event.target.value.label });

            var musculoObj = JSON.parse(event.target.value);
            this.setState({ musculoObj });
        }
    }

    handleExercicioNomeChange = (event) => {
        this.setState({ exercicioNome: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { exercicioNome, musculoObj } = this.state;
        ExercicioService.setExercicio(exercicioNome, musculoObj.label, musculoObj.id);
    }

    render() {
        const { exercicios } = this.state;

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
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {/* Adicionar os valores no banco de dados */}
                            <label htmlFor="musculo">Músculo:</label>
                            <select id="musculo" value={this.state.musculo} onChange={this.handleMusculoChange}>
                                <option value="">Selecione um músculo</option>
                                {this.state.musculos && this.state.musculos.map((musculo, index) => (
                                    <option key={index} value={JSON.stringify(musculo)}>{musculo.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="exercicioNome">Nome do exercício:</label>
                                <input type="text" id="exercicioNome" value={this.state.exercicioNome} onChange={this.handleExercicioNomeChange} />
                            </div>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Músculo</th>
                                <th>Nome do exercício</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(exerciciosPorMusculo).map((musculo, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td colSpan="2" className="musculo">{musculo}</td>
                                    </tr>
                                    {exerciciosPorMusculo[musculo].map((exercicio, index) => (
                                        <tr key={index}>
                                            <td colSpan="2">{exercicio.label}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </div>
        );
    }
}

export default CadastroExercicio;