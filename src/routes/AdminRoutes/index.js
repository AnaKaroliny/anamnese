import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Mesociclo from "../../pages/Mesociclo";
import TreinoA from "../../pages/TreinoA";
import TreinoB from "../../pages/TreinoB";
import TreinoC from "../../pages/TreinoC";
import Alunos from "../../pages/Alunos";
import Aluno from "../../pages/Aluno";
import CadastroExercicio from "../../pages/CadastroExercicio";

function AlunoRoutes() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Admin routes */}
                    <Route exact path="/" element={<Alunos />} />
                    <Route exact path="/aluno/:name" element={<Aluno />} />
                    <Route exact path="/cadastroExercicio" element={<CadastroExercicio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AlunoRoutes;
