import {
    Alert,
} from 'react-native';
import Auth0    from 'react-native-auth0';
import Bluebird from 'bluebird';
import Config   from 'react-native-config'

export default class Auth {
  constructor() {
    // Set auth with Auth0 Instance
    this.auth = new Auth0({ 
      clientId: Config.AUTH0_CLIENT_ID, 
      domain: Config.AUTH0_DOMAIN 
    }).auth; 
  }

  alert(title, message) {
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
    );
  }

  realmLogin = (username, password) => {
    return this.auth
    .passwordRealm({
      username: username,
      password: password,
      realm: 'Username-Password-Authentication',
      scope: 'openid profile email',
      audience: 'https://' + Config.AUTH0_DOMAIN + '/userinfo'
    })
    .then(credentials => {
      console.log(credentials);
      return true;
      // this.onSuccess(credentials);
    })
    .catch(error => this.alert('Error', error.json.error_description));
  }

  createUser = (username, password) => {
    this.auth.auth
    .createUser({
      email: username,
      password: password,
      connection: 'Username-Password-Authentication',
    })
    .then(success => {
      console.log(success)
      this.alert('Success', 'New user created')
    })
    .catch(error => { 
      this.alert('Error', error.json.description) 
    });
  }

  webAuth = (connection) => {
    auth0.webAuth
    .authorize({
      scope: 'openid profile email',
      connection: connection,
      audience: 'https://' + credentials.domain + '/userinfo'
    })
    .then(credentials => {
      this.onSuccess(credentials);
    })
    .catch(error => this.alert('Error', error.error_description));
  };
}
