import React from "react";
import {
    BrowserRouter as Router,
    Route,
    MemoryRouter,
    Routes
} from "react-router-dom";

import DadosPessoais from "../../pages/DadosPessoais";
import DadosCorporais from "../../pages/DadosCorporais";
import DadosDeSaude from "../../pages/DadosDeSaude";
import Dados from "../../pages/Dados";
import Dados2 from "../../pages/Dados2";
import SubmitForm from "../../pages/SubmitForm";
import FormSent from "../../pages/FormSent";
import Mesociclo from "../../pages/Mesociclo";
import TreinoA from "../../pages/TreinoA";
import TreinoB from "../../pages/TreinoB";

function AlunoRoutes() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Routes>
                    {/* User routes */}
                    <Route exact path="/" element={<DadosPessoais />} />
                    <Route path="/corporal" element={<DadosCorporais />} />
                    <Route path="/saude" element={<DadosDeSaude />} />
                    <Route path="/dados" element={<Dados />} />
                    <Route path="/dados2" element={<Dados2 />} />
                    <Route path="/submit" element={<SubmitForm />} />
                    <Route path="/sent" element={<FormSent />} />
                {/* </Switch> */}
                {/* <Routes> */}
                </Routes>
            </div>
        </Router>
    );
}

export default AlunoRoutes;
