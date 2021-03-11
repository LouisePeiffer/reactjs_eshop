import React, { Component } from 'react';

class Panier extends Component {
    render() {
        return (
            <div>
                <div>
                Produit : {this.props.allState.nom}
                Unités : 1
                <button onClick={this.props.foncRendre}>Rendre</button>
                </div>
            </div>
            
        );
    }
}

export default Panier;