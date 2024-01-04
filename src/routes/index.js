import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Mesociclo from "../pages/Mesociclo";
import TreinoA from "../pages/TreinoA";
import TreinoB from "../pages/TreinoB";
import TreinoC from "../pages/TreinoC";
import FormAluno from "../pages/FormAluno";
import AdminRoutes from "../routes/AdminRoutes";

function userRoutes() {
    return <FormAluno />
}

function adminRoutes() {
    return <AdminRoutes />;
}

export default function App() {
    var admin = true;

    if (admin) {
        return adminRoutes();
    } else {
        return userRoutes();
    }
}
