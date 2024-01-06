import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
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

import Login from "../pages/Login";

var isAuthenticated = () => {
    return true;
};

const PrivateRoute = ({ children }) => {
    const authed = isAuthenticated() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/" />;
  }

function AllRoutes() {
    const [formAluno, setFormAluno] = useState({});

    function handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        setFormAluno({...formAluno, [fieldName]: fieldValue});
        console.log(formAluno);
    }

    const userSettings = {
        formAluno: formAluno,
        handleChange
    };

    return (
        <AppContext.Provider value={userSettings}>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Login />} />

                        {/* User routes */}
                        <Route path="/dadosPessoais" element={<DadosPessoais />} />
                        <Route path="/corporal" element={<DadosCorporais />} />
                        <Route path="/saude" element={<DadosDeSaude />} />
                        <Route path="/dados" element={<Dados />} />
                        <Route path="/dados2" element={<Dados2 />} />
                        <Route path="/submit" element={<SubmitForm />} />
                        <Route path="/sent" element={<FormSent />} />
                        <Route path="/treino" element={<PrivateRoute><Treino /></PrivateRoute>} />
                        <Route path="/treinoDiario/:dia" element={<PrivateRoute><TreinoDiario /></PrivateRoute>} />

                        {/* Admin routes */}
                        <Route path="/alunos" element={<PrivateRoute><Alunos /></PrivateRoute>} />
                        <Route path="/aluno/:name" element={<PrivateRoute><Aluno /></PrivateRoute>} />
                        <Route path="/cadastroExercicio" element={<PrivateRoute><CadastroExercicio /></PrivateRoute>} />
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
}

export default AllRoutes;
