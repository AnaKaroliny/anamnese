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
import Forms from "../../pages/Forms";
import Form from "../../pages/Form";

function AlunoRoutes() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Admin routes */}
                    <Route exact path="/" element={<Forms />} />
                    <Route exact path="/form/:name" element={<Form />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AlunoRoutes;
