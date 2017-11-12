import _                       from 'lodash';
import React, { Component }    from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity
}                              from 'react-native'
import {
  DrawerNavigator,
  NavigationActions,
}                              from 'react-navigation'
import Login                   from '../components/Login';
import Home                    from '../components/Home';
import Config                  from 'react-native-config'
import Ionicons                from 'react-native-vector-icons/Ionicons';
import EStyleSheet             from 'react-native-extended-stylesheet';
import { inject, observer }    from 'mobx-react';
import { observable, action }  from 'mobx';

@inject("navigationStore")
@observer
class Drawer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, navigationStore } = this.props;

    const NavigateHome   = NavigationActions.navigate({routeName:'Home'});
    const NavigateLogin  = NavigationActions.navigate({routeName:'Login'});

    return (
      <View style={styles.drawer}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigationStore.dispatch(NavigateHome)}
              style={[styles.drawerItem, (navigation.state.index === 0 && _.get(navigation,"state.routes[0].routes[0].index","") === 1) ? {backgroundColor: 'black'} : null]}>
              <Text style={styles.drawerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigationStore.dispatch(NavigateLogin)}
              style={[styles.drawerItem, (navigation.state.index === 0 && _.get(navigation,"state.routes[0].routes[0].index","") === 1) ? {backgroundColor: 'black'} : null]}>
              <Text style={styles.drawerText}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.state.index === 1 ? navigation.navigate('DrawerClose') : navigation.navigate(true ? 'Home' : 'Login')} >
          <Text style={styles.drawerText}>{true ? 'Logout' : 'Login'}</Text>
          <Ionicons
            name='md-exit'
            size={22}
            color='white'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#6a78c1',
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderBottomColor: 'rgba(0,0,0,.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drawerText: {
    color: '#fff',
    fontSize: 18,
    // fontFamily: 'nemoy-medium',
    padding: 14
  },
  header: {
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    shadowColor: '#21292b',
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: .7,
    marginBottom: 8,
    elevation: 10
    },
    logo: {
      height: 60,
      width: 200,
      alignSelf: 'center',
      marginVertical: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    }
})


// register all screens of the app
export default (initialRouteName = 'Home') => {
  const screens = {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
  };

  const config = {
    initialRouteName,
    drawerWidth: 200,
    drawerBackgroundColor: 'blue',
    contentComponent: Drawer,
    };
    
    const DrawerNav = DrawerNavigator(screens, config);

    class ObservableNavigationStore {

      @observable.ref navigationState = DrawerNav.router.getStateForAction(DrawerNav.router.getActionForPathAndParams('Login'));

      @action dispatch = (action) => {

        const newState = DrawerNav.router.getStateForAction(action);
        const routes   = newState.routes;

        if(['DrawerOpen','DrawerClose'].indexOf(action.routeName) > -1){
          routes[0] = this.navigationState.routes[0]; 
        } 

        const state = {
          index: newState.index,
          routes,
        };

        return (this.navigationState = state);
      }
    }

    return {
      DrawerNavigator: DrawerNav,
      navigationStore: new ObservableNavigationStore(),
    } 
}
