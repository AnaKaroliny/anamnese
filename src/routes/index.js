import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  MemoryRouter
} from "react-router-dom";

import DadosPessoais from "../pages/DadosPessoais";
import DadosCorporais from "../pages/DadosCorporais";
import DadosDeSaude from "../pages/DadosDeSaude";
import Dados from "../pages/Dados";
import Dados2 from "../pages/Dados2";
import SubmitForm from "../pages/SubmitForm";

export default function App() {
  return (
    <MemoryRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <DadosPessoais/>
          </Route>
          <Route path="/corporal">
            <DadosCorporais />
          </Route>
          <Route path="/saude">
            <DadosDeSaude />
          </Route>
          <Route path="/dados">
            <Dados />
          </Route>
          <Route path="/dados2">
            <Dados2 />
          </Route>
          <Route path="/submit">
            <SubmitForm />
          </Route>
        </Switch>
      </div>
    </MemoryRouter>
  );
}
