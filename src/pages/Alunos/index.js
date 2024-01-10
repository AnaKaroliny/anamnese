import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faAddressCard, faCircleMinus, faFileMedical } from '@fortawesome/free-solid-svg-icons'

import HeaderForm from '../../components/HeaderForm';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'new', // initial filter value
            searchQuery: '' // initial search query
        };
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { filter, searchQuery } = this.state;

        // Filter the list items based on the filter value
        const filteredItems = [
            { id: 1, label: 'Sofia Oliveira', isNew: true },
            { id: 2, label: 'Gabriel Santos', isNew: false },
            { id: 3, label: 'Isabella Costa', isNew: true },
            { id: 4, label: 'Lucas Pereira', isNew: false },
            { id: 5, label: 'André Silva', isNew: true }
        ].filter(item => {
            // Filter based on the selected filter value
            var isNew = false;
            if (filter === 'all') {
                isNew = true;
            } else if (filter === 'new') {
                isNew = item.isNew;
            } else if (filter === 'old') {
                isNew = !item.isNew;
            }

            // Filter based on the search query
            const searchRegex = new RegExp(searchQuery, 'i');
            return isNew && searchRegex.test(item.label);
        });

        return (
            <div>
                <HeaderForm />
                <Container>
                    <div className="filter">
                        <label className="filter-select">
                            Selecione:
                            <select value={filter} onChange={this.handleFilterChange}>
                                <option value="all">Todos</option>
                                <option value="new">Novos</option>
                                <option value="old">Antigos</option>
                            </select>
                        </label>
                        <label className="filter-search">
                            Nome:
                            <input type="text" value={searchQuery} onChange={this.handleSearchChange} />
                        </label>
                        <Link to="/cadastroExercicio">
                            <button className="cadastro-button">Cadastrar Exercícios</button>
                        </Link>
                    </div>
                    <ListGroup>
                        {filteredItems.map(item => (
                            <ListGroup.Item>
                                <div className="group-item">
                                    {item.label}
                                    <div className="group-item-buttons">
                                        {/* Ver informações pessoais do aluno */}
                                        <Link to={`/alunos`} key={item.id} className="item-button">
                                            <FontAwesomeIcon icon={faAddressCard} />
                                        </Link>
                                        <Link to={`/aluno/${item.label}`} key={item.id} className="item-button">
                                            <FontAwesomeIcon icon={faFileMedical} />
                                        </Link>
                                        <Link to={`/cadastroTreino/${item.label}`} key={item.id} className="item-button">
                                            <FontAwesomeIcon icon={faDumbbell} />
                                        </Link>
                                        {/* Excluir aluno */}
                                        <Link to={`/alunos`} className="item-button">
                                            <FontAwesomeIcon icon={faCircleMinus} />
                                        </Link>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default Forms;