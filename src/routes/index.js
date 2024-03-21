import React, { useState, useContext } from "react";
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

var isAuthenticated = () => {
    return true;
};

const PrivateRoute = ({ children }) => {
    //TO-DO: Trocar por função que verifica se o usuário está logado
    const authed = isAuthenticated() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/" />;
}

function ValidatePage({ children }) {
    const myContext = useContext(AppContext);
    const formAluno = myContext.formAluno;

    console.log(children.type.name)

    if (children.type.name === 'DadosCorporais' && (!formAluno || !formAluno.nome || !formAluno.telefone || !formAluno.endCidade || !formAluno.endEstado)) {
        return <Navigate to="/dadosPessoais" />
    }

    if ((children.type.name === 'DadosDeSaúde' || children.type.name === 'Dados' || children.type.name === 'Dados2' || children.type.name === 'SubmitForm' || children.type.name === 'FormSent') && 
    (!formAluno || !formAluno.nome || !formAluno.telefone || !formAluno.endCidade || !formAluno.endEstado || !formAluno.pesoJejum || !formAluno.altura || !formAluno.dataNascimento || !formAluno.horarioTreino || !formAluno.tipoTreino)) {
        return <Navigate to="/dadosPessoais" />
    }

    return children;
}

function GetUserSettings() {
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
    return (
        <AppContext.Provider value={GetUserSettings()}>
            {/* Rota para github pages */}
            {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/anamnese" element={<Login />} />

                        {/* User routes */}
                        <Route path="/dadosPessoais" element={<DadosPessoais />} />
                        <Route path="/corporal" element={<ValidatePage><DadosCorporais /></ValidatePage>} />
                        <Route path="/saude" element={<ValidatePage><DadosDeSaude /></ValidatePage>} />
                        <Route path="/dados" element={<ValidatePage><Dados /></ValidatePage>} />
                        <Route path="/dados2" element={<ValidatePage><Dados2 /></ValidatePage>} />
                        <Route path="/submit" element={<ValidatePage><SubmitForm /></ValidatePage>} />
                        <Route path="/sent" element={<ValidatePage><FormSent /></ValidatePage>} />
                        <Route path="/treino" element={<PrivateRoute><Treino /></PrivateRoute>} />
                        <Route path="/treinoDiario/:dia" element={<PrivateRoute><TreinoDiario /></PrivateRoute>} />

                        {/* Admin routes */}
                        <Route path="/alunos" element={<PrivateRoute><Alunos /></PrivateRoute>} />
                        <Route path="/aluno/:id" element={<PrivateRoute><Aluno /></PrivateRoute>} />
                        <Route path="/aluno/:id/dadosPessoais" element={<PrivateRoute><AlunoDadosPessoais /></PrivateRoute>} />
                        <Route path="/cadastroExercicio" element={<PrivateRoute><CadastroExercicio /></PrivateRoute>} />
                        <Route path="/cadastroTreino/:id" element={<PrivateRoute><CadastroTreino /></PrivateRoute>} />
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
}

export default AllRoutes;
