import React, { Component } from "react";

class FinancialAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            longName: props.longName,
            regularMarketPrice: props.regularMarketPrice
        }
    }

    render() {
        return <div>
            <h2>Id: {this.state.id}</h2>
            <h2>Nome ação: {this.state.longName}</h2>
            <h2>Custo da Ação: {this.state.regularMarketPrice}</h2>
        </div>
    }
}

export default FinancialAction;