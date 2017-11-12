// Common Store
import {observable, action} from 'mobx';

class ObservableCommonStore {

  @observable isLoading = false

  @action setLoading(loadingState) {
    this.isLoading = loadingState; 
  }

}

export default new ObservableCommonStore();
