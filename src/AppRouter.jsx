import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Menu from './Pages/Menu';
import Footer from './Pages/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Error from './Pages/Err';



function Layout(props){
  return(
    <div>
        <Menu />
          {props.children}
        <Footer />

    </div>

  )

}

function AppRouter() {
  return (
    <BrowserRouter>
        
        
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact/>  
                <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="*" component={Error}/>
            </Switch>
        </Layout>
        
        

    </BrowserRouter>
    
  );
}

export default AppRouter;
