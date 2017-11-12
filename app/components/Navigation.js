// Navigation.js - Component
import React, {
  Component
}                             from 'react';
import { View }               from 'react-native';
import NavigationView         from '../views/Navigation';
import EStyleSheet            from 'react-native-extended-stylesheet';
import { observer, inject }   from 'mobx-react';
import { NavigationActions }  from 'react-navigation'

// First function
export default () => { 

  // Second function, pass component to be wrapped 
  return (WrappedComponent) => {

    // Declare HOC 
    @inject("navigationStore")
    @observer 
    class Navigation extends Component{

      openDrawer = () => this.props.navigationStore.dispatch(NavigationActions.navigate({routeName:'DrawerOpen'}))

      render() {
        return (
          <View style={styles.container}>
            <NavigationView
              isLoggedIn={this.props.isLoggedIn}
              openDrawer={this.openDrawer}
            />
            <WrappedComponent />
          </View>
        );
      }
    }
    return Navigation;
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1 
  },
});
