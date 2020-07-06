import React,{Component} from 'react';
import './api/basic'
import './api/high'
import './api/city'
import './api/order/order'
import './api/order/endOrder'
import './api/order/finish_order'
import './api/order/detail'
import './api/map/bike_list'
import './api/role/role_list'
import './api/role/user_list'

class App extends Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
