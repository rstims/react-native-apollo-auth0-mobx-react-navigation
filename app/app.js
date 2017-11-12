// App
import React, { Component }     from 'react';
import {
  NativeEventEmitter,
  Platform,
  StyleSheet,
  TextES,
  View
}                               from 'react-native';
import {
  LocationObserver
}                               from 'NativeModules';
import Spinner                  from 'react-native-loading-spinner-overlay';
import { inject, observer }     from 'mobx-react';
import SocketIOClient           from 'socket.io-client';
import Login                    from './components/Login'
import Navigation               from './components/Navigation'
import EStyleSheet              from 'react-native-extended-stylesheet';
import { addNavigationHelpers } from 'react-navigation';

const primary = '#563374';
const secondary = '#6a78c1';

EStyleSheet.build({
  $primary: primary,
  $secondary: secondary,
  $primaryFont: 'Michroma',
});

@inject("authStore", "commonStore", "navigationStore")
@observer
class App extends Component{

  constructor(props) {
    super(props);

    // this.socket = SocketIOClient('http://localhost:3000');

    // LocationObserver.requestAuthorization();

    // this.locationEmitter = new NativeEventEmitter(LocationObserver)
    // const subscription = this.locationEmitter.addListener(
      // 'geolocationDidChange',
      // (change) => {
        // return this.socket.emit('location-data', change);
      // }
    // );

    // LocationObserver.startObserving({"accuracy":'0.5'});

  }

  render() {
    const { DrawerNavigator, navigationStore } = this.props;

    // const isLoading = Store.state.isLoading;
    const loadingText = 'Loading' 

    // console.log("isLoading: %s", isLoading);

    const spinnerProps = {
      overlayColor: secondary,  
      textContent: loadingText,
      textStyle: {color: '#fff'}
    };
    // console.log(addNavigationHelpers({
              // dispatch: navigationStore.dispatch,
              // state: navigationStore.navigationState
            // }));
            // return null;
    return (
      <View style={styles.container}>
        {!false && <DrawerNavigator
            navigation={addNavigationHelpers({
              dispatch: navigationStore.dispatch,
              state: navigationStore.navigationState
            })} 
          />}
        <Spinner visible={false} {...spinnerProps}/>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1 
  },
});

export default App;
