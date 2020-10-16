import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Features from './components/features/features';
import Footer from './components/footer/footer';
// import Calendar from './components/calendar/calendar';
// import Details from './components/details/details';

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
    // console.log(this.state.rocketFeatures);

    return (
      <>
        <Header
          rockets = {this.state.rockets}
          changeRocket = {this.changeRocket}
        />
        <Main
          rocket = {this.state.rocket}
        />
        {
          this.state.rocketFeatures &&
            <Features 
              {...this.state.rocketFeatures}
            />
        }
        {
          this.state.company &&
            <Footer
              {...this.state.company.links}
            />
        }
      </>
    );
  };
}

export default App;
