import {observable, action} from 'mobx';
import Auth                 from '../auth';
import Bluebird             from 'bluebird';
import commonStore          from './commonStore';

const auth = new Auth();

class ObservableAuthStore {

  @observable accessToken     = false
  @observable isAuthenticated = false

  @action loginUser = (username, password) => {

    commonStore.setLoading(true, 'Accessing user...');

    let chain = Bluebird.resolve();

    chain = chain.then(() => auth.realmLogin(username, password));
    chain = chain.then(response => {
      this.accessToken = response.accessToken;
      this.isAuthenticated = true;
      commonStore.setLoading(false);
    });
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
