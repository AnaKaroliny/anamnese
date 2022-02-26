import React, { useState } from 'react';

import AlunoRoutes from '../../routes/AlunoRoutes';
import AppContext from '../../components/AppContext';
import 'bootstrap/dist/css/bootstrap.css';

function FormAluno() {
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
            <div className='App'>
                <AlunoRoutes />
            </div>
        </AppContext.Provider>
    );
}

export default FormAluno;
