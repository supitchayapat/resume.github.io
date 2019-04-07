import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { main, portfolio, resume, testimonials } from '../public/manifest.json'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      manifest: {
        main: main,
        portfolio: portfolio,
        resume: resume,
        testimonials: testimonials
      }
    }
  }




  render(){
    console.log(main);
    return(
      <div className="App">
      <Header data={main}/>
        <About data={this.state.manifest.main} />
        <Resume data={this.state.manifest.resume} />
        <Portfolio data={this.state.manifest.portfolio} />
        <Testimonials data={this.state.manifest.testimonials} />
        <Contact data={this.state.manifest.main} />
      <Footer />
      </div>
    );
  }
}

export default App;
