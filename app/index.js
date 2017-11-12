import React, {
  Component
}                           from 'react';
import { Provider }         from 'mobx-react/native'
import stores               from './mobx';
import App                  from './app';
import registerScreens      from './screens';



export default class Index extends Component {

  render() {
    const { DrawerNavigator, navigationStore } = registerScreens();
    const Stores = {navigationStore, ...stores};

    return (
      <Provider {...Stores}>
        <App DrawerNavigator={DrawerNavigator} />
      </Provider>
    );
  }
}
