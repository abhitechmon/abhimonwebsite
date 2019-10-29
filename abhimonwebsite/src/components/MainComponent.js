import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home'  component={Home}/>
                    {/* <iframe title="model" width="800" height="315" frameBorder="0" src="https://scapic.com/@Abhimon/ar_business_card-6oqs1/embed/?type=viewer" />     */}
                    <Redirect to="/home" />
                </Switch>
                
                <Footer />
                
            </div>
        );
    }
}

export default Main;