// Home.js - Component
import React, {
  Component
}                 from 'react';
import navigation from './Navigation';
import HomeView   from '../views/Home';

class Home extends Component{

  constructor(props) {
    super(props); 
    this.state = {};
  }

  render() {
    return (<HomeView />);
  }
}
export default navigation()(Home);
