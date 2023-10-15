import React, { useState } from 'react';
import ViewMainAcao from './screens/MenuAcao/ViewMainAcao';

function App (){

  var [actionView, setActionView] = useState(0)

  const teste = () => {
    setActionView(1)
    console.log(actionView)
  }

  return (
    <div>
      <header id="Cabecalho">
        <h1>Consulta Ações</h1>
        <div onClick={teste} id="ValorAcao">
          <p>Valor ação</p>
        </div>
      </header>
      <body>
        {actionView === 1 && ViewMainAcao}
      </body>
      <footer>
        <div>
          <h6 id="Rodape"> Desenvolvido por Otavio Freire</h6>
        </div>
      </footer>
    </div>
  );
}

export default App;
