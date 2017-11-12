// Navigation.js - View
import React, {
  Component,
}           from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
}           from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class NavigationView extends Component{

  constructor(props) {
    super(props);

    // Dark background needs light theme
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <View style={styles.topbar}>
        <View style={styles.left}>
          <Icon 
            onPress={() => (this.props.isLoggedIn || true) && this.props.openDrawer()}
            name="bars" 
            size={30} 
            color="#FFF" />
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>WEEKEND</Text>
        </View>
        <View style={styles.right}>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  topbar: {
    height:60,
    flexDirection: 'row',
    backgroundColor: '$primary',
  },
  left:{
    flex:1,
    marginTop:20,
    left:10,
  },
  right:{
    flex:1,
    marginTop:20,
    right:10,
  },
  middle:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    paddingTop:10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: '$primaryFont',
  },
}); 
