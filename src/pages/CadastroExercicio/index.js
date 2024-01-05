import React from 'react';
import { Container } from './styles';

import HeaderForm from '../../components/HeaderForm';

class CadastroExercicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            muscle: '',
            exerciseName: '',
            exercises: [] // Array para armazenar os exercícios cadastrados
        };
    }

    handleMuscleChange = (event) => {
        this.setState({ muscle: event.target.value });
    }

    handleExerciseNameChange = (event) => {
        this.setState({ exerciseName: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Adicionar o novo exercício ao array de exercícios
        const newExercise = {
            muscle: this.state.muscle,
            exerciseName: this.state.exerciseName
        };
        this.setState(prevState => ({
            exercises: [...prevState.exercises, newExercise],
            muscle: '',
            exerciseName: ''
        }));
    }

    render() {
        return (
            <div>
                <HeaderForm />
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            {/* Adicionar os valores no banco de dados */}
                            <label htmlFor="muscle">Músculo:</label>
                            <select id="muscle" value={this.state.muscle} onChange={this.handleMuscleChange}>
                                <option value="">Selecione um músculo</option>
                                <optgroup label="Músculos do peito">
                                    <option value="peitorais maior">Peitorais maior</option>
                                    <option value="peitorais menor">Peitorais menor</option>
                                </optgroup>
                                <optgroup label="Músculos das costas">
                                    <option value="latíssimo do dorso">Latíssimo do dorso</option>
                                    <option value="trapézio">Trapézio</option>
                                    <option value="romboides">Romboides</option>
                                </optgroup>
                                <optgroup label="Músculos dos ombros">
                                    <option value="deltoides">Deltoides</option>
                                </optgroup>
                                <optgroup label="Músculos dos braços">
                                    <option value="bíceps">Bíceps</option>
                                    <option value="tríceps">Tríceps</option>
                                    <option value="antebraços">Antebraços</option>
                                </optgroup>
                                <optgroup label="Músculos das pernas">
                                    <option value="quadríceps">Quadríceps</option>
                                    <option value="isquiotibiais">Isquiotibiais</option>
                                    <option value="glúteos">Glúteos</option>
                                    <option value="panturrilhas">Panturrilhas</option>
                                </optgroup>
                                <optgroup label="Músculos do abdômen">
                                    <option value="reto abdominal">Reto abdominal</option>
                                    <option value="oblíquos">Oblíquos</option>
                                    <option value="transverso">Transverso</option>
                                </optgroup>
                                <optgroup label="Músculos do pescoço">
                                    <option value="trapézio">Trapézio</option>
                                    <option value="esternocleidomastóideo">Esternocleidomastóideo</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="input-group">
                            <div className="input-block">
                                <label htmlFor="exerciseName">Nome do exercício:</label>
                                <input type="text" id="exerciseName" value={this.state.exerciseName} onChange={this.handleExerciseNameChange} />
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
                            {this.state.exercises.map((exercise, index) => (
                                <tr key={index}>
                                    <td>{exercise.muscle}</td>
                                    <td>{exercise.exerciseName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </div>
        );
    }
}

export default CadastroExercicio;