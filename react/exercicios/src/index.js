import React from 'react'
import ReactDOM from 'react-dom/client';

import Pai from './componentes/Pai'
import Filhos from './componentes/Filhos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Pai nome="Paulo"  sobrenome="Silva">
            <Filhos nome="Pedro" sobrenome="Silva"/>
            <Filhos nome="Paulo" sobrenome="Silva"/>
            <Filhos nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div>
)
