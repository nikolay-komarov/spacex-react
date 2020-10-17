import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';

import FetchData from './service/fetch-data'

import './css/style.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rocket: `Falcon 1`,
      rocketFeatures: null,
      rockets: [],
      company: null,
    };

    this.fetchData = new FetchData();
  };

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  };

  updateRocket() {
    this.fetchData.getRocet()
      .then(data => {
        this.setState({rockets: data.map(item => item.name)});
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({rocketFeatures}));
  };

  updateCompany() {
    this.fetchData.getCompany()
      .then(company => {
        this.setState({company})
      });
  };

  changeRocket = (rocket) => {
    this.setState({rocket},
      this.updateRocket);
  };
  
  render() {
    return (
      <BrowserRouter>
        <Header
          rockets = {this.state.rockets}
          changeRocket = {this.changeRocket}
        />
        <Route exact path='/'
          render={() => {
            return(
              this.state.company &&
              <Home
                company = {this.state.company}
              />
            );
          }}
        />
        <Route path='/rocket'
          render={() => {
            return (
              this.state.rocketFeatures &&
              <Features 
                {...this.state.rocketFeatures}
              />
            );
          }}
        />
        <Route path='/calendar' component={Calendar} />
        <Route path='/details/:id' component={Details} />
        {
          this.state.company &&
            <Footer
              {...this.state.company.links}
            />
        }
      </BrowserRouter>
    );
  };
}

export default App;
