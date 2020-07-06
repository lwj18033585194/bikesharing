import React,{Component} from 'react'
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Home from './pages/home'
import Buttons from './pages/ui/Buttons'
import Modals from  './pages/ui/Modals'
import Loadings from './pages/ui/Loadings'
import Notification from './pages/ui/Notification'
import Messages from './pages/ui/Messages'
import Tabss from './pages/ui/Tabss'
import Gallery from './pages/ui/Gallery'
import Carousels from './pages/ui/Carousels'
import FormLogin from './pages/form/FormLogin'
import FormRegister from './pages/form/FormRegister'
import BasicTable from './pages/table/BasicTable'
import HighTable from './pages/table/HighTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import NoMatch from './pages/nomatch'
class IRouter extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                            <Route path='/home' component={Home} />
                            <Route path="/ui/buttons" component={Buttons}/>
                            <Route path="/ui/modals" component={Modals} />
                            <Route path="/ui/loadings" component={Loadings} />
                            <Route path="/ui/notification" component={Notification}/>
                            <Route path="/ui/messages" component={Messages} />
                            <Route path="/ui/tabs" component={Tabss} />
                            <Route path="/ui/gallery" component={Gallery} />
                            <Route path="/ui/carousel" component={Carousels} />
                            <Route path="/form/login" component={FormLogin} />
                            <Route path="/form/reg" component={FormRegister}/>
                            <Route path="/table/basic" component={BasicTable}/>
                            <Route path="/table/high" component={HighTable} />
                            <Route path="/city" component={City} />
                            <Route path="/order" component={Order} />
                            <Redirect to='/home' />
                            </Switch>
                        </Admin>
                    } />
                        <Route component={NoMatch}/>
                    </Switch>
                </App>
            </Router>
        )
    }
}
export default IRouter;