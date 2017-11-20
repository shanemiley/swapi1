import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()

    this.state = {};

    this.getPlanets =   this.getPlanets.bind(this)
    this.getPeople =   this.getPeople.bind(this)
    this.getSpecies =   this.getSpecies.bind(this)
    this.getFilms =   this.getFilms.bind(this)
    this.getStarships =   this.getStarships.bind(this)
    this.getVehicles =   this.getVehicles.bind(this)
    this.output =   this.output.bind(this)
    this.outputFilm =   this.outputFilm.bind(this)

  }

  getPlanets() {

    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
      

      this.setState({
        result: this.output(response)
      })
    })

  }
  getPeople() {

    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      console.log(response);
      this.setState({
        result: this.output(response)
      })
    })

  }
  getSpecies() {

    axios.get('https://swapi.co/api/species/')
    .then((response) => {
      console.log(response);
      this.setState({
        result: this.output(response)
      })
    })

  }
  getFilms() {

    axios.get('https://swapi.co/api/films/')
    .then((response) => {
      console.log(response);
      this.setState({
        result: this.outputFilm(response)
      })
    })

  }
  getStarships() {

    axios.get('https://swapi.co/api/starships/')
    .then((response) => {
      console.log(response);
      this.setState({
        result: this.output(response)
      })
    })

  }
  getVehicles() {

    axios.get('https://swapi.co/api/vehicles/')
    .then((response) => {
      console.log(response);
      this.setState({
        result: this.output(response)
      })
    })

  }


  output(response) {
    let el = [];

    for (let i = 0;i<response.data.results.length; i++){
      el.push(
        <div class="list-group" key={i}>
          <button class="btn btn-primary" onClick={() => {
            this.setState({
            
            })
          }}>
            {response.data.results[i].name}

          </button>
          
        </div>
      ); 
    }
    return el;
  }
   outputFilm(response) {
    let el = [];

    for (let i = 0;i<response.data.results.length; i++){
       console.log(response.data.results[i].title);
      el.push(
        <div class="list-group" key={i}>
          <button class="btn btn-primary" onClick={() => {
            this.setState({
              selected: response.data.results[i].title,
            })
          }}>
            {response.data.results[i].title}
          </button>
         
        </div>
      ); 
    }
    return el;
  }


  render() {
    return (
    <div class="jumbotron">
    <h1>The only slighty better way to use swapi</h1>
    <h1>Swapily!</h1>
    <div class="navbar navbar-inverse bg-inverse ">
    <div class="container-fluid">

    <button class="btn btn-primary" onClick={this.getPlanets}>Get planets</button>
    <button class="btn btn-primary" onClick={this.getPeople}>Get people</button>
    <button class="btn btn-primary" onClick={this.getSpecies}>Get species</button>
    <button class="btn btn-primary" onClick={this.getFilms}>Get films</button>
    <button class="btn btn-primary" onClick={this.getStarships}>Get starships</button>
    <button class="btn btn-primary" onClick={this.getVehicles}>Get vehicles</button>

    

    {this.state.result}
    
    
    </div>
   
    </div>
    </div>


    );
  }
}

export default App;



