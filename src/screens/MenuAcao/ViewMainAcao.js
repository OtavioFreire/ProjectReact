import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/App.css';
import FinancialAction from '../../FinancialAction.js';

function ViewMainAcao(){
    var [dadoAPI, setDadoAPI] = useState([])

    const changeDadoAPI = async () => {
    var FII = document.getElementById('InputFII').value

    var urlMontada = 'https://brapi.dev/api/quote/'+ FII +'?token=oqAPyXat6Lvw9hBMNwdno7&range=1d&interval=1d&fundamental=false&dividends=false'
      
    setDadoAPI(await axios({
      method: 'get',
      url: urlMontada
    }).then( (value) => value.data.results))
  }

  return(
    <div id ="bodySite">
        <div id="SearchFII">
          <h3>Qual fundo imobiliario deseja pesquisar?</h3>
          <input id="InputFII" placeholder='ex: MXRF11' type='text'></input>
          <button id="ButtonFII" onClick={changeDadoAPI}>Pesquisar FII</button>
        </div>
        {dadoAPI?.length > 0 && (
          dadoAPI.map( (item) => <FinancialAction id={item.longName}
                longName={item.longName} regularMarketPrice={item.regularMarketPrice}></FinancialAction>))}
    </div>
  );

}

export default ViewMainAcao;
