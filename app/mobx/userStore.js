import {observable, action} from 'mobx';

class userAuth {

  @observable id
  @observable name
  @observable avatarUrl

  constructor(user) {
    this.id = user.id;  
    this.name = user.name;  
    this.avatarUrl = user.avatarUrl;  
  }
}
