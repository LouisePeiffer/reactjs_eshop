import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './components/Articles'
import Panier from './components/Panier'

class App extends Component {
  
  state = {
    
    monargent: 20,
    
    panier: [],
    
    articles: [
      { nom : "Coca-Cola", prix : 1, stock : 5, image: './img/coca.jpg'},
      
      { nom : "Cécémel", prix : 1.5, stock : 5, image: './img/cecemel.jpg' },
      
      { nom : "Ice-Tea", prix : 2, stock : 5, image: './img/ice.jpg' },
    ],
  }

  achat = (i) => {
    let {monargent, panier, articles} = this.state
    if (monargent < articles[i].prix || articles[i].stock == 0) {
      return null
    }
    monargent -= articles[i].prix
    console.log(articles[i].prix);
    articles[i].stock --
    panier.push(articles[i])
    this.setState({monargent,articles,panier})
  }

  rendre = (i) => {
    let {monargent, panier, articles} = this.state
    monargent += panier[i].prix
    panier[i].stock ++
    panier.splice(i,1)
    this.setState({monargent, panier, articles})
  }


  render() {
    return (
      <div>
        <h1>Mon argent : {this.state.monargent}</h1>
        {
            this.state.articles.map((el) => {
              if (this.state.monargent < el.prix) {
                return (<h1>"Solde Insuffisant pour {el.nom}"</h1>)
              }
            })
          }
        
        <div className="d-flex justify-content-center">
          {
            this.state.articles.map((el, i) => {
              // console.log(el);
              return (
                <Articles key={i} allState={el} maj={()=> {this.achat(i)}}/>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center">
          {
            this.state.panier.map((el, i) => {
              // console.log(el);
              return (
                <Panier key={i} allState={el} foncRendre={()=> this.rendre(i)}/>
              )
            })
          }
        </div>
      </div>
    );
}
}

export default App;