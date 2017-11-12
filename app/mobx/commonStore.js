// Common Store
import {observable, action} from 'mobx';

class ObservableCommonStore {

  @observable isLoading = false
  @observable loadingText = 'Loading...'

  @action setLoading(loadingState, loadingText = 'Loading...') {
    this.loadingText = loadingText; 
    this.isLoading   = loadingState; 
  }

  @action setLoadingText() {
    this.isLoading   = loadingState; 
  }

}

export default new ObservableCommonStore();
