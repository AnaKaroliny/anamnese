import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faAddressCard, faCircleMinus, faFileMedical } from '@fortawesome/free-solid-svg-icons'

import HeaderForm from '../../components/HeaderForm';
import AlunosService from '../../services/AlunosService';
import ReactPaginate from 'react-paginate';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'new',
            searchQuery: '',
            alunos: [],
            offset: 0, // offset inicial para a paginação
            perPage: 5, // quantidade de itens por página
            currentPage: 0, // página atual
        };
    }

    componentDidMount() {
        AlunosService.getAlunos((alunos) => {
            const alunosList = Object.entries(alunos).map(([id, item]) => {
                return { id, nome: item.dadosPessoais.nome, isNew: item.dadosPessoais.isNew };
            });
            this.setState({ alunos: alunosList });
        });
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handlePageClick = (data) => {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
    
        this.setState({
            currentPage: selectedPage,
            offset: offset,
        });
    };

    filterItems = () => {
        const { filter, searchQuery, alunos, offset, perPage } = this.state;

        // Filter the list items based on the filter value
        const filteredAlunosAux = alunos.filter(item => {
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
            return isNew && searchRegex.test(item.nome);
        });

        // Calcular a página atual de alunos com base no offset e na quantidade de itens por página
        const currentPageAlunos = filteredAlunosAux.slice(offset, offset + perPage);

        return currentPageAlunos;
    }

    render() {
        const { filter, searchQuery, perPage, alunos } = this.state;
        var filteredAlunosAux = this.filterItems();

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
                        {filteredAlunosAux.map(item => (
                            <ListGroup.Item key={item.id}>
                                <div className="group-item">
                                    {item.nome}
                                    <div className="group-item-buttons">
                                        {/* Ver informações pessoais do aluno */}
                                        <Link to={`/alunos`} key="info" className="item-button">
                                            <FontAwesomeIcon icon={faAddressCard} />
                                        </Link>
                                        <Link to={`/aluno/${item.nome}`} key="aluno" className="item-button">
                                            <FontAwesomeIcon icon={faFileMedical} />
                                        </Link>
                                        <Link to={`/cadastroTreino/${item.nome}`} key="treino" className="item-button">
                                            <FontAwesomeIcon icon={faDumbbell} />
                                        </Link>
                                        {/* Excluir aluno */}
                                        <Link to={`/alunos`} key="excluir" className="item-button">
                                            <FontAwesomeIcon icon={faCircleMinus} />
                                        </Link>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Próximo'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(searchQuery ? filteredAlunosAux.length : alunos.length / perPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </Container>
            </div>
        );
    }
}

export default Forms;