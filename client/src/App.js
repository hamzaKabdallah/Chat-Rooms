import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Join from './component/Join/Join'
import Chat from './component/Chat/Chat'
import Footer from "./component/footer/Footer"

const  App = () => 
    (
        
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
            <Footer/>
        </Router>
        
        
    );


export default App ;