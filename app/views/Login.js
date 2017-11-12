import React, { Component } from 'react';
import {
  Dimensions,
  Modal,
  Alert,
  Button,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Config from 'react-native-config'

export default class LoginView extends Component {


    render() {
      let form;
      if (this.props.viewLogin) {
        form = <LoginForm realmLogin={this.props.onAuth} />;
      } else {
        form = <RegistrationForm createUser={this.props.onAuth} />;
      }

      return (
        <View style={styles.container}>
          <View style={styles.tabContainer}>
            <Button
              onPress={this.props.toggleLoginRegister}
              title="Log In"
            />
            <Button
              onPress={this.props.toggleLoginRegister}
              title="Sign up"
            />
          </View>
          <View style={styles.socialContainer}>
            <TouchableHighlight onPress={() => this.props.store.webAuth('facebook')}>
              <Image
                style={styles.socialIcon}
                source={{uri: Config.FACEBOOK_BUTTON}}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.store.webAuth('twitter')}>
              <Image
                style={styles.socialIcon}
                source={{uri: Config.FACEBOOK_BUTTON}}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.formContainer}>
            {form}
          </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    formContainer: {
        flex: 2,
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    socialContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        marginTop: 10,
        width: 100,
        textAlign: 'center',
        fontSize: 16
    },
    socialIcon: {
      width:338,
      height:47,
      marginTop: 10
    },
    logo: {
      top: 0,
      width:45,
      height:50
    }
});
