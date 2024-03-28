import React, { useState, useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
    // HashRouter
} from "react-router-dom";
import AppContext from "../components/AppContext";

import DadosPessoais from "../pages/DadosPessoais";
import DadosCorporais from "../pages/DadosCorporais";
import DadosDeSaude from "../pages/DadosDeSaude";
import Dados from "../pages/Dados";
import Dados2 from "../pages/Dados2";
import SubmitForm from "../pages/SubmitForm";
import FormSent from "../pages/FormSent";
import Treino from "../pages/Treino";
import TreinoDiario from "../pages/TreinoDiario";

import Alunos from "../pages/Alunos";
import Aluno from "../pages/Aluno";
import CadastroExercicio from "../pages/CadastroExercicio";
import CadastroTreino from "../pages/CadastroTreino";
import AlunoDadosPessoais from "../pages/AlunoDadosPessoais";

import Login from "../pages/Login";
import LoginService from "../services/LoginService";

const PrivateRoute = ({ children, isLogged }) => {
    return isLogged ? children : <Navigate to="/login" />;
}

function ValidatePage({ children }) {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    if (children.type.name === 'DadosCorporais' && (!formAluno || !formAluno.nome || !formAluno.telefone || !formAluno.endCidade || !formAluno.endEstado)) {
        return <Navigate to="/dadosPessoais" />
    }

    if ((children.type.name === 'DadosDeSaúde' || children.type.name === 'Dados' || children.type.name === 'Dados2' || children.type.name === 'SubmitForm' || children.type.name === 'FormSent') && 
    (!formAluno || !formAluno.nome || !formAluno.telefone || !formAluno.endCidade || !formAluno.endEstado || !formAluno.pesoJejum || !formAluno.altura || !formAluno.dataNascimento || !formAluno.horarioTreino || !formAluno.tipoTreino)) {
        return <Navigate to="/dadosPessoais" />
    }

    return children;
}

function useUserSettings() {
    const [formAluno, setFormAluno] = useState({});

    function handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        setFormAluno({...formAluno, [fieldName]: fieldValue});
    }

    function validateForm(nextPage) {
        if (nextPage === '/corporal') {
            return formAluno.nome && formAluno.telefone && formAluno.endCidade && formAluno.endEstado;
        }

        if (nextPage === '/saude') {
            return formAluno.pesoJejum && formAluno.altura && formAluno.dataNascimento && formAluno.horarioTreino && formAluno.tipoTreino;
        }

        return true;
    }

    function handleNextPage(nextPage) {
        if (validateForm(nextPage)) {
            return true;
        } else {
            // TO-DO: Trocar por mensagem de erro
            alert('Please fill in all the required fields.');
            return false;
        }
    };


    const userSettings = {
        formAluno: formAluno,
        handleChange,
        handleNextPage
    };

    return userSettings
}

function AllRoutes() {
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const userSettings = useUserSettings(); // Chame o Hook personalizado aqui

    useEffect(() => {
        const unsubscribe = LoginService.onAuthStateChanged((response) => {
            setLogged(response.success);
            setLoading(false);
        });

        return () => {
            unsubscribe(); // Cleanup function to unsubscribe from the onAuthStateChanged event
        };
    }, []);

    if (loading) {
        // TO DO: Melhorar loading
        return <div>Loading...</div>;
    }

    return (
        <AppContext.Provider value={userSettings}>
            {/* Rota para github pages */}
            {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />

                        {/* User routes */}
                        <Route path="/dadosPessoais" element={<DadosPessoais />} />
                        <Route path="/corporal" element={<ValidatePage><DadosCorporais /></ValidatePage>} />
                        <Route path="/saude" element={<ValidatePage><DadosDeSaude /></ValidatePage>} />
                        <Route path="/dados" element={<ValidatePage><Dados /></ValidatePage>} />
                        <Route path="/dados2" element={<ValidatePage><Dados2 /></ValidatePage>} />
                        <Route path="/submit" element={<ValidatePage><SubmitForm /></ValidatePage>} />
                        <Route path="/sent" element={<ValidatePage><FormSent /></ValidatePage>} />
                        <Route path="/treino" element={<Treino />} />
                        <Route path="/treinoDiario/:dia" element={<TreinoDiario />} />

                        {/* Admin routes */}
                        <Route path="/alunos" element={<PrivateRoute isLogged={logged}><Alunos /></PrivateRoute>} />
                        <Route path="/aluno/:id" element={<PrivateRoute isLogged={logged}><Aluno /></PrivateRoute>} />
                        <Route path="/aluno/:id/dadosPessoais" element={<PrivateRoute isLogged={logged}><AlunoDadosPessoais /></PrivateRoute>} />
                        <Route path="/cadastroExercicio" element={<PrivateRoute isLogged={logged}><CadastroExercicio /></PrivateRoute>} />
                        <Route path="/cadastroTreino/:id" element={<PrivateRoute isLogged={logged}><CadastroTreino /></PrivateRoute>} />
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
}

export default AllRoutes;
