import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    MemoryRouter,
    Redirect
} from "react-router-dom";

import DadosPessoais from "../pages/DadosPessoais";
import DadosCorporais from "../pages/DadosCorporais";
import DadosDeSaude from "../pages/DadosDeSaude";
import Dados from "../pages/Dados";
import Dados2 from "../pages/Dados2";
import SubmitForm from "../pages/SubmitForm";
import Mesociclo from "../pages/Mesociclo";
import TreinoA from "../pages/TreinoA";
import TreinoB from "../pages/TreinoB";
import FormAluno from "../pages/FormAluno";

function userRoutes() {
    return <FormAluno />
}

function adminRoutes() {
    return (<Router>
        <div>
            <Routes>
                <Route exact path="/">
                    <TreinoB />
                </Route>
            </Routes>
        </div>
    </Router>);
}

export default function App() {
    var admin = false;

    if (admin) {
        return adminRoutes();
    } else {
        return userRoutes();
    }
}
