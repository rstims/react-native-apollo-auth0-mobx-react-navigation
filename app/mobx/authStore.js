import {observable, action} from 'mobx';
import Auth                 from '../auth';
import Bluebird             from 'bluebird';

const auth = new Auth();  

class ObservableAuthStore {

  @observable accessToken     = false
  @observable isAuthenticated = false

  @action loginUser = (credentials) => {

    let chain = Bluebird.resolve();

    chain = chain.then(() => auth.realmLogin(credentials.username, credentials.password));
    chain = chain.then(response => console.log(response));
    chain = chain.catch(err => console.error(err));

    return chain;
  }

  @action createUser (credentials) {
    return true;
  }

  @action webAuth (type) {
    return true;
  }

}

export default new ObservableAuthStore();
